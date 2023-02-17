export interface openOptions {
  preventScrolling?: boolean;
  closeOnClickOutside?: boolean;
  props?: {};
  backDrop?: string | boolean;
}

export interface IDialog {
  open: (component: React.ElementType, openOptions: openOptions) => void;
  close: () => void;
  isOpen: boolean;
}

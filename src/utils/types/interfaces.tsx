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


declare global {
  interface Window {
    gtag_report_conversion: (url?: string) => boolean;
  }
}

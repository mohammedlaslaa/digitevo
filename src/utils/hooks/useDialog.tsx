import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

import { DialogType } from 'utils/types/types';
import { IDialog, openOptions } from 'utils/types/interfaces';

const DialogContext = createContext<IDialog>({
  open: () => undefined,
  close: () => undefined,
  isOpen: false,
});

const source =
  typeof document !== 'undefined' && document.querySelector('#portal');

function DialogProvider({ children }: DialogType) {
  const portal = useRef<HTMLDivElement>(null);
  const [Component, setComponent] = useState<React.ReactNode | undefined>();
  const [options, setOptions] = useState<{
    closeOnClickOutside: boolean;
    backDrop: string | boolean;
  }>({
    closeOnClickOutside: false,
    backDrop: '',
  });

  let backDrop: string | boolean = false;

  if (options.backDrop === true) backDrop = 'bg-gray-200/75';
  else if (options.backDrop) backDrop = options.backDrop;

  const handleClose = () => {
    setComponent(undefined);
    setOptions({
      closeOnClickOutside: false,
      backDrop: '',
    });
    document.body.style.overflow = 'auto';
  };

  const handleOpen = (
    component: React.ElementType,
    {
      props,
      preventScrolling,
      closeOnClickOutside = true,
      backDrop = true,
    }: openOptions
  ) => {
    if (!Component) {
      const C = component;
      setComponent(<C {...{ ...props, close: handleClose }} />);

      setOptions({
        closeOnClickOutside: !!closeOnClickOutside,
        backDrop,
      });

      if (preventScrolling && typeof document !== 'undefined')
        document.body.style.overflow = 'hidden';
    }
  };

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      portal.current?.firstElementChild &&
      !portal.current.firstElementChild.contains(event.target as HTMLElement)
    ) {
      handleClose();
    }
  }, []);

  useEffect(() => {
    if (options.closeOnClickOutside && portal.current) {
      document.addEventListener('mousedown', handleClickOutside);
    } else document.removeEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [options, handleClickOutside]);

  return (
    <DialogContext.Provider
      value={{
        open: handleOpen,
        close: handleClose,
        isOpen: !!(source && Component),
      }}
    >
      {children}
      {source &&
        Component &&
        createPortal(
          <div
            className={`fixed flex flex-col justify-center inset-0 overflow-hidden z-[200] ${
              backDrop || ''
            }`}
          >
            <div ref={portal}>{Component}</div>
          </div>,
          source
        )}
    </DialogContext.Provider>
  );
}

const useDialog = () => useContext(DialogContext);

export { useDialog, DialogProvider };

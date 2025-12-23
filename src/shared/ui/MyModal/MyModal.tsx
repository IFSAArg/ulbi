import { classNames } from 'shared/lib/classNames/classNames';
import {
  ReactNode, MouseEvent, useState, useRef, useEffect, useCallback,
} from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './MyModal.module.scss';

  interface MyModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
  }

const ANIMATION_DELAY = 150;

export const MyModal = (props: MyModalProps) => {
  const {
    className,
    children,
    isOpen,
    onClose,
  } = props;

  const { theme } = useTheme();

  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
    [cls[theme]]: true,
  };

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onContentClick = (event: MouseEvent) => {
    event.stopPropagation();
  };

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler();
    }
  }, [closeHandler]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div className={classNames(cls.MyModal, mods, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

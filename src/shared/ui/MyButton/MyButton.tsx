import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './MyButton.module.scss';

export enum MyButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum MyButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: MyButtonTheme;
  square?: boolean;
  size?: MyButtonSize;
}

export const MyButton: FC<MyButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    size,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
  };

  return (
    <button
      type="button"
      className={classNames(cls.MyButton, mods, [className, cls[theme], cls[size]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

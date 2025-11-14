import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './MyButton.module.scss';

export enum MyButtonTheme {
  CLEAR = 'clear',
}

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme: MyButtonTheme;
}

export const MyButton: FC<MyButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props;

  return (
    <button
      type="button"
      className={classNames(cls.MyButton, {}, [className, cls[theme], theme])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

import { MyButton, MyButtonTheme } from 'shared/ui/MyButton/MyButton';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

interface BugButtonProps {
    className?: string;
  }

export const BugButton = ({ className }: BugButtonProps) => {
  const [error, setError] = useState<Boolean>(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  const onThrow = () => {
    setError(true);
  };

  return (
    <MyButton
      type="button"
      theme={MyButtonTheme.CLEAR}
      onClick={onThrow}
    >
      {t('Сломать')}
    </MyButton>
  );
};

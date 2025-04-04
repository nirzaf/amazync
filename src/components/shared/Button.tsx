import { ButtonHTMLAttributes } from 'react';
import { useTheme } from '../../context/ThemeContext';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) => {
  const { colors } = useTheme();

  const baseClasses = "font-semibold rounded-full transition-all duration-200 ease-in-out transform hover:scale-105 [text-shadow:_0_1px_1px_rgba(0,0,0,0.3)] shadow-lg";

  const variantClasses = {
    primary: `bg-[${colors.chiliRed}] hover:bg-[${colors.chiliRedHover}] text-white`,
    secondary: `bg-[${colors.glaucous}]/30 hover:bg-[${colors.glaucous}]/40 text-[${colors.lavenderWeb}] backdrop-blur-sm border border-[${colors.lavenderWeb}]/20`,
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-12 py-4 text-xl',
  };

  return (
    <button
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
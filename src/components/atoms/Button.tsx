import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick: () => void;
  color: 'primary' | 'secondary' | 'success';
  icon?: React.ReactNode;
}

const colorClasses = {
  primary: 'bg-[#7692ff] text-white',
  secondary: 'bg-[#f9f9f9] text-slate-900 border border-slate-600',
  success: 'bg-[#217346] text-white',
};

export const Button: React.FC<ButtonProps> = ({ title, onClick, color,icon, ...props }) => (
  <button {...props} onClick={onClick} className={`${colorClasses[color]} px-4 py-2 rounded-md flex items-center gap-2`}>
    {icon}{title}
  </button>
);

import React from 'react';

interface InputProps {
  placeholder: string;
  type?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputHome: React.FC<InputProps> = ({ placeholder, type = "text", value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="px-4 py-2 border border-slate-600 rounded-md w-full shadow-lg"
  />
);

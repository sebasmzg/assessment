import React from 'react';
import { InputHome } from '../atoms/Input-home';

interface InputGroupProps {
  label: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputGroup: React.FC<InputGroupProps> = ({ label, placeholder, type, value, onChange }) => (
  <div className="flex flex-col mb-4">
    <label className="text-sm font-semibold mb-1">{label}</label>
    <InputHome placeholder={placeholder} type={type} value={value} onChange={onChange} />
  </div>
);

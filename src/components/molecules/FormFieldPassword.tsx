"use client";

import { Control, FieldError, Path, FieldValues, Controller } from "react-hook-form";
import { Input } from "../atoms/input";
import { InputPassword } from "../atoms/Input-password";

interface FormFieldPasswordProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  control: Control<T>;
  error?: FieldError;
  id?: string;
  placeholder?: string;
}

export const FormFieldPassword = <T extends FieldValues>({
  label,
  name,
  control,
  error,
  id,
  placeholder,
}: FormFieldPasswordProps<T>) => {
  return (
    <div className="w-full flex flex-col mb-4">
      <label
        htmlFor={id || label.toLowerCase()}
        className="text-sm font-medium mb-2"
      >
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <InputPassword
            id={id || label.toLowerCase()}
            type="password"
            placeholder={placeholder || `Enter your ${label.toLowerCase()}`}
            error={error?.message}
            {...field}
          />
        )}
      />
    </div>
  );
};
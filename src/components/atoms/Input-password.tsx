import React, { useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type?: string;
  name?: string;
  error?: string;
}

export const InputPassword = ({
  placeholder,
  type,
  name,
  error,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center relative">
      <input
        type={type === 'password' && showPassword ? 'text' : type}
        name={name}
        placeholder={placeholder}
        className={`w-full p-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-xl`}
        {...props}
      />
      {type === 'password' && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-3"
        >
          {showPassword ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1200 1200"><path fill="#9e9e9e" d="M669.727 273.516c-22.891-2.476-46.15-3.895-69.727-4.248c-103.025.457-209.823 25.517-310.913 73.536c-75.058 37.122-148.173 89.529-211.67 154.174C46.232 529.978 6.431 577.76 0 628.74c.76 44.162 48.153 98.67 77.417 131.764c59.543 62.106 130.754 113.013 211.67 154.174q4.126 2.003 8.276 3.955l-75.072 131.102l102.005 60.286l551.416-960.033l-98.186-60.008zm232.836 65.479l-74.927 129.857c34.47 44.782 54.932 100.006 54.932 159.888c0 149.257-126.522 270.264-282.642 270.264c-6.749 0-13.29-.728-19.922-1.172l-49.585 85.84c22.868 2.449 45.99 4.233 69.58 4.541c103.123-.463 209.861-25.812 310.84-73.535c75.058-37.122 148.246-89.529 211.743-154.174c31.186-32.999 70.985-80.782 77.417-131.764c-.76-44.161-48.153-98.669-77.417-131.763c-59.543-62.106-130.827-113.013-211.743-154.175c-2.731-1.324-5.527-2.515-8.276-3.807m-302.636 19.483c6.846 0 13.638.274 20.361.732l-58.081 100.561c-81.514 16.526-142.676 85.88-142.676 168.897c0 20.854 3.841 40.819 10.913 59.325c.008.021-.008.053 0 .074l-58.228 100.854c-34.551-44.823-54.932-100.229-54.932-160.182c.001-149.255 126.524-270.262 282.643-270.261m168.969 212.035L638.013 797.271c81.076-16.837 141.797-85.875 141.797-168.603c0-20.474-4.086-39.939-10.914-58.155"/></svg>
            
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#9e9e9e" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"/></svg>
          )}
        </button>
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
import React, { ReactNode } from "react";

export const ButtonSubmit = ({
  title,
  icon,
  ...props
}: {
  title: string;
  icon?: React.ReactNode;
}) => {
  return (
    <div className="flex w-full justify-center">
      <button
        type="submit"
        className="w-52 py-2 px-4 bg-[#7692ff] text-white rounded-lg font-medium hover:shadow-md hover:scale-105 transition-all duration-300 flex items-center justify-center"
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </button>
    </div>
  );
};

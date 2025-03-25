import React, { JSX } from "react";

type InputErrorProps = {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
};

export default function InputError({ children }: InputErrorProps) {
  return (
    <div className="bg-red-500 text-center text-white font-bold text-sm p-1 rounded-sm lowercase">
      {children}
    </div>
  );
}

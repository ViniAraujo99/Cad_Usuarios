"use client";
import { useState } from "react";

interface Props {
  type?: string;
  label: string;
  readOnly?: boolean;
  fieldValue?: string | number | undefined
  finalValue?: (v: any) => void
}

export const Fields = ({
  type = "text",
  label,
  readOnly = false,
  fieldValue,
  finalValue
}: Props) => {
  return (
    <>
      <label
        className={`
        flex flex-col
      `}
        htmlFor={label}
      >
        {label}
        <input
          className={`
            p-2 bg-indigo-200
            ${readOnly ? 'focus: outline-none text-gray-500 bg-indigo-100' : ''}
          `}
          id={label}
          readOnly={readOnly}
          type={type}
          value={fieldValue}
          onChange={(e) => {
            finalValue?.(e.target.value)
          }}
        />
      </label>
    </>
  );
};

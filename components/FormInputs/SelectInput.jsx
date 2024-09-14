import React from "react";

export default function SelectInput({ label, name, placeholder, register, className = 'sm:col-span-2', options = [], isRequired=true }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <select {...register(`${name}`, {required: isRequired })} id={name} name={name}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                     focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" required>
        <option value=''>{placeholder}</option>
          {options.map((option, i) => {
            return (
              <option key={i} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
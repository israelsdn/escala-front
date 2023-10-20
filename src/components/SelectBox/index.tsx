import React from 'react';

export default function SelectBox({
  options,
  value,
  onChange,
}: {
  options: any;
  value: number | string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}) {
  return (
    <select value={value} onChange={onChange}>
      {options.map((option: any, index: string) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

import React from 'react';

const mesOptions: any = [
  { label: 'Janeiro', value: 'Janeiro' },
  { label: 'Fevereiro', value: 'Fevereiro' },
  { label: 'Março', value: 'Março' },
  { label: 'Abril', value: 'Abril' },
  { label: 'Maio', value: 'Maio' },
  { label: 'Junho', value: 'Junho' },
  { label: 'Julho', value: 'Julho' },
  { label: 'Agosto', value: 'Agosto' },
  { label: 'Setembro', value: 'Setembro' },
  { label: 'Outubro', value: 'Outubro' },
  { label: 'Novembro', value: 'Novembro' },
  { label: 'Dezembro', value: 'Dezembro' },
];

const anoOption: any = [
  { label: 2023, value: 2023 },
  { label: 2024, value: 2024 },
  { label: 2025, value: 2025 },
];

export function SelectBoxMonth({
  value,
  onChange,
}: {
  value: number | string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}) {
  return (
    <select value={value} onChange={onChange}>
      {mesOptions.map((option: any, index: string) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export function SelectBoxYear({
  value,
  onChange,
}: {
  value: number | string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}) {
  return (
    <select value={value} onChange={onChange}>
      {anoOption.map((option: any, index: string) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

'use client';

import Checkbox from '@/components/Checkbox';
import SelectBox from '@/components/SelectBox';
import Table from '@/components/Table';
import { useState } from 'react';

export default function Home() {
  const [selectedMes, setSelectedMes] = useState('Dezembro');
  const [selectedAno, setSelectedAno] = useState(2023);
  const [viewTabela, setViewTabela] = useState(false);

  const mesOptions = [
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

  const servos = [
    { name: 'Israel Sales', dias: ['Domingo'], skill: 1, frequencia: 2 },
    { name: 'Alyson', dias: ['Sabado'], skill: 1, frequencia: 2 },
    {
      name: 'Isaque',
      dias: ['Quinta-Feira', 'Terça-Feira', 'Domingo'],
      skill: 3,
      frequencia: 1,
    },
  ];

  const anoOption = [
    { label: 2023, value: 2023 },
    { label: 2024, value: 2024 },
    { label: 2025, value: 2025 },
  ];

  const handleSelectMesChange = (event: any) => {
    setSelectedMes(event.target.value);
  };

  const handleSelectAnoChange = (event: any) => {
    setSelectedAno(event.target.value);
  };

  const button = () => {
    if (!viewTabela) {
      setViewTabela(true);
    } else {
      setViewTabela(false);
    }
  };

  return (
    <main className="flex w-screen h-screen bg-gray-300">
      <div>
        <h1>Mes</h1>
        <SelectBox
          options={mesOptions}
          value={selectedMes}
          onChange={handleSelectMesChange}
        />
      </div>
      <div>
        <h1>Ano</h1>
        <SelectBox
          options={anoOption}
          value={selectedAno}
          onChange={handleSelectAnoChange}
        />
      </div>
      <div className="mt-52">
        <h1>Servos</h1>
        {servos.map((servos) => (
          <Checkbox key={servos.name} label={servos.name} />
        ))}
      </div>

      <button onClick={button}>Mostrar tabala</button>

      <Table status={viewTabela} month={selectedMes} year={selectedAno} />
    </main>
  );
}

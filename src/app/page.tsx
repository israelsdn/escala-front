"use client";

import Checkbox from "@/components/Checkbox";
import { SelectBoxMonth, SelectBoxYear } from "@/components/SelectBox";
import Table from "@/components/Table";
import { useState } from "react";

export const servosDefined: object[] = [];

//Usuarios Teste
const servos = [
  { name: "Israel Sales", dias: ["Domingo"], skill: 1, frequencia: 2 },
  {
    name: "Alyson",
    dias: ["Quinta-Feira", "Terça-Feira", "Domingo"],
    skill: 1,
    frequencia: 2,
  },
  {
    name: "Isaque",
    dias: ["Quinta-Feira", "Terça-Feira", "Domingo"],
    skill: 3,
    frequencia: 1,
  },
  {
    name: "Samuel",
    dias: ["Quinta-Feira", "Terça-Feira", "Domingov"],
    skill: 1,
    frequencia: 2,
  },
  {
    name: "HAtus",
    dias: ["Quinta-Feira", "Terça-Feira", "Domingo"],
    skill: 1,
    frequencia: 2,
  },
  { name: "PAtrick", dias: ["Domingo"], skill: 1, frequencia: 2 },
  { name: "Clara", dias: ["Quinta-Feira"], skill: 1, frequencia: 2 },
  { name: "Rebeca", dias: ["Sabado"], skill: 1, frequencia: 2 },
  { name: "Vini", dias: ["Quinta"], skill: 1, frequencia: 2 },
  { name: "Hellen", dias: ["Domingo"], skill: 1, frequencia: 2 },
  {
    name: "Magno",
    dias: ["Quinta-Feira", "Terça-Feira", "Domingo"],
    skill: 1,
    frequencia: 2,
  },
];

export default function Home() {
  const [selectedMes, setSelectedMes] = useState("Novembro");
  const [selectedAno, setSelectedAno] = useState(2023);
  const [viewTabela, setViewTabela] = useState(false);

  const handleSelectMesChange = (event: any) => {
    setSelectedMes(event.target.value);
  };

  const handleSelectAnoChange = (event: any) => {
    setSelectedAno(event.target.value);
  };

  const button = () => {
    setViewTabela(!viewTabela);
  };

  const gerarEscala = () => {};

  return (
    <main className="flex w-screen h-screen bg-gray-300">
      <div>
        <h1>Mes</h1>
        <SelectBoxMonth value={selectedMes} onChange={handleSelectMesChange} />
      </div>
      <div>
        <h1>Ano</h1>
        <SelectBoxYear value={selectedAno} onChange={handleSelectAnoChange} />
      </div>
      <div className="mt-52">
        <h1>Servos</h1>
        {servos.map((servo, index) => (
          <Checkbox key={index} servo={servo} />
        ))}
      </div>

      <div className="mt-10">
        <button onClick={button}>Mostrar tabala</button>
      </div>

      <div>
        <button onClick={gerarEscala}>Gerar escala</button>
      </div>

      <Table status={viewTabela} month={selectedMes} year={selectedAno} />
    </main>
  );
}

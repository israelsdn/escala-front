import DaysMonth from '@/utils/DaysMonth';
import { useState } from 'react';

export default function Table({
  month,
  year,
  status,
}: {
  month: string;
  year: number;
  status: boolean;
}) {
  const [week, setWeek] = useState<React.ReactNode[]>([]);

  const diasSemana = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado',
  ];

  const criarTabela = () => {
    const diasDoMes = DaysMonth(month, year);
    const dataDay = [];
    const dataLines = [];

    for (let i = 0; i < diasDoMes.length; i++) {
      dataDay.push(
        <td
          className={`${
            i % 2 == 0 ? 'bg-gray-400 text-gray-50' : 'bg-gray-50 text-gray-500'
          }
     `}
          key={i}
        >
          {diasDoMes[i][1]}
        </td>,
      );

      if ((i + 1) % 7 === 0) {
        dataLines.push(
          <tr className="text-center" key={i + 1}>
            {[...dataDay]}
          </tr>,
        );
        while (dataDay.length > 0) {
          dataDay.pop();
        }
      } else if (diasDoMes.length - 1 == i) {
        dataLines.push(
          <tr className="text-center" key={i + 1}>
            {[...dataDay]}
          </tr>,
        );
      }
    }
    setWeek(dataLines);
  };

  return (
    <div className={`${status ? 'block' : 'hidden'}`}>
      <button onClick={criarTabela}>Gerar tabela</button>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full h-96 text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              {diasSemana.map((dia, index) => (
                <th
                  scope="col"
                  key={index}
                  className={`${
                    index % 2 == 0 ? 'bg-gray-50' : 'bg-gray-400'
                  } w-52 py-5 text-center`}
                >
                  {dia}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{week}</tbody>
        </table>
      </div>
    </div>
  );
}

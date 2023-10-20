import { eachDayOfInterval, endOfMonth, format, startOfMonth } from 'date-fns';
import Converter from '../Converter';

export default function DaysMonth(month: string | number, year: number) {
  const Month = Converter(month);

  const firtDay = startOfMonth(new Date(year, Month as number));
  const lastDay = endOfMonth(new Date(year, Month as number));

  const daysMonth = eachDayOfInterval({ start: firtDay, end: lastDay });

  const daysMonthFormated = daysMonth.map((data) =>
    format(data, 'EEEE,dd-MM-yyyy').split(','),
  );

  daysMonthFormated.map((data) => {
    data[0] = Converter(data[0]) as string;
  });

  while (daysMonthFormated[0][0] != 'Domingo') {
    switch (daysMonthFormated[0][0]) {
      case 'Sabado':
        daysMonthFormated.unshift(['Sexta-Feira', '']);
        break;
      case 'Sexta-Feira':
        daysMonthFormated.unshift(['Quinta-Feira', '']);
        break;
      case 'Quinta-Feira':
        daysMonthFormated.unshift(['Quarta-Feira', '']);
        break;
      case 'Quarta-Feira':
        daysMonthFormated.unshift(['Terça-Feira', '']);
        break;
      case 'Terça-Feira':
        daysMonthFormated.unshift(['Segunda-Feira', '']);
        break;
      case 'Segunda-Feira':
        daysMonthFormated.unshift(['Domingo', '']);
        break;
    }
  }

  return daysMonthFormated;
}

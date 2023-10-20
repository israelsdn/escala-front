export default function Converter(x: number | string) {
  switch (x) {
    //Mes para number

    case 'Janeiro':
      x = 0;
      break;
    case 'Fevereiro':
      x = 1;
      break;
    case 'Março':
      x = 2;
      break;
    case 'Abril':
      x = 3;
      break;
    case 'Maio':
      x = 4;
      break;
    case 'Junho':
      x = 5;
      break;
    case 'Julho':
      x = 6;
      break;
    case 'Agosto':
      x = 7;
      break;
    case 'Setembro':
      x = 8;
      break;
    case 'Outubro':
      x = 9;
      break;
    case 'Novembro':
      x = 10;
      break;
    case 'Dezembro':
      x = 11;
      break;
  }

  //Traduzir dia

  switch (x) {
    case 'Monday':
      x = 'Segunda-Feira';
      break;
    case 'Tuesday':
      x = 'Terça-Feira';
      break;
    case 'Wednesday':
      x = 'Quarta-Feira';
      break;
    case 'Thursday':
      x = 'Quinta-Feira';
      break;
    case 'Friday':
      x = 'Sexta-Feira';
      break;
    case 'Saturday':
      x = 'Sabado';
      break;
    case 'Sunday':
      x = 'Domingo';
      break;
  }

  return x;
}

import { servosDefined } from '@/app/page';

export type IUser = {
  name: string;
  dias: string[];
  skill: number;
  frequencia: number;
};

export default function Moments(users: IUser, del: boolean) {
  if (!servosDefined.find((user) => user == users)) {
    servosDefined.push(users);
  }

  if (!del) {
    const indice = servosDefined.indexOf(users);
    servosDefined.splice(indice, 1);
  }

  console.log(servosDefined);
}

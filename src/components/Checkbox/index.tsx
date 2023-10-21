import Moments, { IUser } from '@/utils/Moments';
import { useEffect, useState } from 'react';

export default function Checkbox(servo: IUser) {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (isChecked) {
      Moments(servo, true);
    }
    if (!isChecked) {
      Moments(servo, false);
    }
  }, [handleCheckboxChange]);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {servo.name}
        <br />
      </label>
    </>
  );
}

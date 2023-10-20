import { useState } from 'react';

export default function Checkbox({ label }: { label: string }) {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {label}
      <br />
    </label>
  );
}

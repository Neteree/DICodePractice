import { useState } from 'react';
import './Controls.css';

const Controls = (props) => {
  const { counter, setCounter } = props;
  const [selectValue, setSelectValue] = useState(counter);

  const handleSelect = (e) => {
    const value = e.target.value;
    console.log(value);
    setSelectValue(value);
    setCounter(value);
  };

  return (
    <div className="controls">
      <p>Reviews to display: {counter}</p>

      <select value={selectValue} onChange={handleSelect}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  );
};

export default Controls;

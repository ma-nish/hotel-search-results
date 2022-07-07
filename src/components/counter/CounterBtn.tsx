import React from "react";

interface CounterBtnProps {
  disabled?: boolean;
  label: string;
  onClick: () => void;
}

const CounterBtn: React.FunctionComponent<CounterBtnProps> = ({
  disabled,
  label,
  onClick,
}) => {
  return (
    <button type="button" className="counter-btn" disabled={disabled || false} onClick={onClick}>
      {label}
    </button>
  );
};

export default CounterBtn;

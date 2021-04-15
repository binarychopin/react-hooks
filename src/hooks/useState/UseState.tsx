import React, { useState } from 'react';

type TemparatureInputProps = {
  scale: string;
  setTemperature: React.Dispatch<React.SetStateAction<number>>;
  setScale: React.Dispatch<React.SetStateAction<string>>;
  temperature: number;
};
interface Scale {
    [key: string]: string;
}
const scaleNames: Scale = {c : 'Celsius', f: 'Farenheit'};

export default function Calculator() {
  const [scale, setScale] = useState('c');
  const [temperature, setTemperature] = useState(0);

  const celsiusValue =
    scale === 'f' ? convertTo(temperature, toCelsius) : temperature;
  const farenheitValue =
    scale === 'c' ? convertTo(temperature, toFahrenheit) : temperature;

  return (
    <div>
      <TemperatureInput
        setScale={setScale}
        scale='c'
        temperature={celsiusValue}
        setTemperature={setTemperature}
      />
      <TemperatureInput
        setScale={setScale}
        scale='f'
        temperature={farenheitValue}
        setTemperature={setTemperature}
      />
    </div>
  );
}

function TemperatureInput({
  scale,
  temperature,
  setScale,
  setTemperature,
}: TemparatureInputProps) {
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setScale(scale);
    setTemperature(Number(e.currentTarget.value));
  };
  return (
    <>
      <label htmlFor={scale}>{scaleNames[scale]}</label> : 
      <input
        id={scale}
        type='number'
        value={temperature}
        onChange={handleChange}
      />
    </>
    );
}

const convertTo = (value: number, convert: Function): number => {
  const output = convert(value);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded;
};

function toCelsius(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

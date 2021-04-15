import { useEffect, useState } from "react";
export default function UseEffect() {
  const [showText, setShowText] = useState(false);
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });

  useEffect(() => {
    console.log("render");
  }, [values.email]);
  const [ counter, setCounter ] = useState(0);

  const { data, loading } = useFetch(`http://numbersapi.com/${counter}/trivia`);

  return (
    <div>
              <button onClick={() => setCounter(counter + 1)}>increment</button>
      <div>{loading ? "..." : data}</div>
      <button onClick={() => setShowText(!showText)}>Toggle</button>
      {showText && <HiddenText />}
      <input
        type="text"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
}
const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (e: any) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};

function HiddenText() {
  useEffect(() => {
    return () => {
      console.log("hidden text unmounted");
    };
  });
  return <h1>this is a a hidden text</h1>;
}

const useFetch = (url: string) => {
  const [state, setState] = useState({ data: '', loading: true });
  useEffect(() => {
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
        setState({ data: y, loading: false });
      });
  }, [url]);
  return state;
};

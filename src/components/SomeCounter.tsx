import { useState } from "react";
import st from './SomeСounter.module.scss';


export const SomeCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button className={st.color} onClick={increment}>increment</button>
    </>
  )
}
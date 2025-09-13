import { useState } from "react";

function Header ({text}){
  const [count, setCount] = useState(0);
  return (
    <>
    <header>
      <h3>{text.toUpperCase()}</h3>
      <p>Count = {count}</p>
    </header>
    <button onClick={()=> {
      setCount(count + 1);
    }}>Click me</button>
    </>
  );
}

export default Header;
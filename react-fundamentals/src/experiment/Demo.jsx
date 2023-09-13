
import { useState } from 'react';


function Demo() {
  const [name,setName]=useState("");
  return (
      <>

        <h1>Hello React</h1>
        <input
        type='text'
          placeholder="Your name"
          
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <h3>{name}</h3>
        <button onClick={(e) => { alert('Hello '+name)}}>Click Me</button>
      </>
  );
}

export default Demo;


import { useState } from 'react';
import { Button, Container, TextInput } from '@mantine/core';
import { NavbarSimple } from './NavbarSimple';

import { SideNavbar } from "./SideNavbar";

function Demo2() {
  const [name, setName] = useState("");
  return (
    <>
      <SideNavbar />
      <Container>

        <h1>Hello React</h1>
        <TextInput
          type='text'
          placeholder="Your name"

          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h3>{name}</h3>
        <Button onClick={(e) => { console.log(e); alert('Hello ' + name) }}>Click Me</Button>

      </Container>
    </>

  );
}

export default Demo2;

import { MantineProvider, MantineThemeOverride, Text } from '@mantine/core';
import MyShellV2 from './experiment/MyShellV2';

import { DefaultTheme, TealTheme } from "./Themes";

function App() {
  return (
    <MantineProvider theme={TealTheme}>
      <MyShellV2 />
    </MantineProvider>
  );
}

export default App;
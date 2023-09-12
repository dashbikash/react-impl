import Demo2 from "./experiment/Demo2";
import { MantineProvider } from '@mantine/core';
import MyShell from "./experiment/MyShell";
import MyShellV2 from "./experiment/MyShellV2";
const myTheme = {
  colors: {
    brand: [
      "#e9eaff",
      "#c7c9ff",
      "#9fa6ff",
      "#7182ff",
      "#4963ff",
      "#0044ff",
      "#003af3",
      "#002ee6",
      "#001fdb",
      "#0000cc"
    ],
  },
  primaryColor: 'brand',
};
function App() {
  return (

    <MantineProvider theme={myTheme}>
      <MyShellV2 />
    </MantineProvider>

  );
}

export default App;

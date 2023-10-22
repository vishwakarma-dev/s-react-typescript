import React from 'react';
import react_logo from './assets/app_logo/react.svg';
import typescript_logo from './assets/app_logo/typescript.svg';
import material_ui_logo from './assets/app_logo/material_ui.svg'
import './App.css';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Counter from './example/KhCounter';
import KhFooter from './components/Footer';
import { Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


function App() {
  return (
    <React.Fragment>
      <Box className='App-container' height={"100Vh"}>
        <Container maxWidth={"md"}>
        <Stack flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"}>
          <img src={react_logo} className="App-logo" alt="react-logo" />
          <AddIcon  fontSize='large'/>
          <img src={typescript_logo} style={{width: "15vmin", height: "15vmin"}} alt="ts-logo" />
          <AddIcon fontSize='large' />
          <img src={material_ui_logo} style={{width: "15vmin", height: "15vmin"}} alt="mui-logo" />
        </Stack>
        <Counter />
        <Typography mt={4}  variant='h5' align='center' >
          Edit <code>src/App.tsx</code> and save to reload.
        </Typography>
        <Typography variant='h6' align='center'>
          {"Learn "}
          <Box component={"a"}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
              React
          </Box>
          <span>, </span>
          <Box component={"a"}
            className="App-link"
            href="https://www.typescriptlang.org/docs/handbook/react.html"
            target="_blank"
            rel="noopener noreferrer"
            >
              Typescript
          </Box>
          <span> and </span>
          <Box component={"a"}
            className="App-link"
            href="https://mui.com/material-ui/getting-started/"
            target="_blank"
            rel="noopener noreferrer"
            >
              Material-UI
          </Box>
        </Typography>
        <KhFooter />
      </Container>
      </Box>
    </React.Fragment>
  );
}

export default App;



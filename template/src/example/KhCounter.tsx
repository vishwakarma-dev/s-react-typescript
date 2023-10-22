import * as React from 'react';
import "./KhCounter.css"

import { styled } from '@mui/material/styles';
import { Box, Button, Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Container from '@mui/material/Container';



export interface ICounterProps {
    // interface for the props
}

const KhButton = styled(Button)(({ theme }) => ({
  fontSize: '22px',
  marginInlineStart : "5px",
  marginInlineEnd : "5px",
  color: '#8100ff',
  backgroundColor: 'rgba(249, 248, 250, 0.1)',
  borderRadius: '10px',
  transition: 'all 0.15s',
  '&:hover': {
    border: '1px solid #662dd7',
  },
  '&:active': {
    backgroundColor: 'rgba(151, 132, 189, 0.2)',
  },
}));

const KhValue = styled(Typography)({
  paddingLeft: '24px',
  paddingRight: '24px',
  fontFamily: 'Algar',
  color : "#8100ff"
});


function Counter (props: ICounterProps) {
  const [ count , setCount ] = React.useState<number>(0) ;
  
  return (
    <React.Fragment>
      <Container maxWidth='sm' >
        <Card elevation={12}  >
          <CardHeader title={"Counter"} titleTypographyProps={{align :"center"}} />
          <CardContent>
          <KhValue variant='h2' color={""} align='center' gutterBottom>{count}</KhValue>
          <Divider/>
          <Box padding={2} sx={{display: 'flex', justifyContent: 'space-evenly'}}>
            <KhButton variant='outlined' size='small' startIcon={<AddIcon />} onClick={() => setCount(count + 1)}>Increment</KhButton>
            <KhButton variant='outlined' size='small' startIcon={<RemoveIcon />} onClick={() => setCount(count - 1)}>Decrement</KhButton>
          </Box>
          </CardContent>
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default Counter ;
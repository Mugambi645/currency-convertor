import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Container, Grid, Typography } from '@mui/material'
import InputAmount from './components/InputAmount'
import SelectCountry from './components/SelectCountry'
import SwitchCurrency from './components/SwitchCurrency'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container maxWidth="md" sx={{ background: "#fdfdfd"}}>
<Typography variant="h5" sx={{ marginBottom: "2rem"}}>
  Stay Ahead With Accurate Coversions
</Typography>
<Grid container spacing={2}>
  <InputAmount/>
  <SelectCountry/>
  <SwitchCurrency/>
 
</Grid>
    </Container>
  )
}

export default App

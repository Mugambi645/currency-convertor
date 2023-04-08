import { Grid, InputAdornment, TextField } from '@mui/material'
import React from 'react'

const InputAmount = () => {
  return (
    <Grid item>
        <TextField
        label="Amount"
        fullWidth
        InputProps={{
            type: "number",
            startAdornment: <InputAdornment position='start'>$</InputAdornment>
        }}
        />
    </Grid>
  )
}

export default InputAmount
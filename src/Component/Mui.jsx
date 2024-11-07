import React from 'react'
import {Button} from '@mui/material'
import AccountBoxIcon from '@mui/icons-material/AccountBox';

export default function Mui() {
  return (
    <div>
        <Button variant='contained' size='large' startIcon={<AccountBoxIcon/>} sx={{color:'Background'}}>send</Button>

    </div>
  )
}

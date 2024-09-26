import React from 'react'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


function Dashboard() {
  return (
    <>
      <section className='heading'>
        <h3>Dashboard</h3>
      </section>

      <section className='header-stack'>
        <Stack direction='row' spacing={2}>

        <Box sx={{
          width : 250,
          height : 100,
          bgcolor : '#ebf2fa'
        }}></Box>

        <Box sx={{
          width : 250,
          height : 100,
          bgcolor : '#ebf2fa'
        }}></Box>

        <Box sx={{
          width : 250,
          height : 100,
          bgcolor : '#ebf2fa'
        }}></Box>

        <Box sx={{
          width : 250,
          height : 100,
          bgcolor : '#ebf2fa'
        }}></Box>

        </Stack>
      </section>

      <Stack direction='row' spacing={2}>
        <Box sx={{
          width : 500,
          height : 500,
          bgcolor : '#ebf2fa',
          borderRadius : 5
        }}></Box>

        <Stack direction='column' spacing={2}>
        <Box sx={{
          width : 500,
          height : 200,
          bgcolor : '#ebf2fa',
          borderRadius : 5
        }}></Box>
        <Box sx={{
          width : 500,
          height : 200,
          bgcolor : '#ebf2fa',
          borderRadius : 5
        }}></Box>
        </Stack>
      </Stack>
    </>
  )
}

export default Dashboard
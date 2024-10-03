import React from 'react'
import Box from '@mui/material/Box';

function StatisticGrid() {
  return (
    <>
        <Box sx={{
          width : 250,
          height : 100,
          bgcolor : '#ebf2fa'
        }}>
          <section className='stats-grid-section'>
            <h6>Packages</h6>
            <p>date</p>
          </section>
        </Box>

        <Box sx={{
          width : 250,
          height : 100,
          bgcolor : '#ebf2fa'
        }}>
          <section className='stats-grid-section'>
            <h6>Deliveries</h6>
            <p>date</p>
          </section>
        </Box>

        <Box sx={{
          width : 250,
          height : 100,
          bgcolor : '#ebf2fa'
        }}>
          <section className='stats-grid-section'>
            <h6>Customers</h6>
            <p>date</p>
          </section>
        </Box>

        <Box sx={{
          width : 250,
          height : 100,
          bgcolor : '#ebf2fa'
        }}>
          <section className='stats-grid-section'>
            <h6>Returns</h6>
            <p>date</p>
          </section>
        </Box>
    </>
  )
}

export default StatisticGrid
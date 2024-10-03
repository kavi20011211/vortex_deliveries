import React from 'react'
import Stack from '@mui/material/Stack';
import StatisticGrid from '../components/StatisticGrid';
import LineChartcustomer from '../components/LineChart-customer';
import StatsCol from '../components/StatsCol';

function Dashboard() {
  return (
    <>
      <section className='heading'>
        <h3>Dashboard</h3>
      </section>

      <section className='header-stack'>
        <Stack direction='row' spacing={2}>
          <StatisticGrid/>
        </Stack>
      </section>

      <Stack direction='row' spacing={2}>
        <LineChartcustomer/>

        <Stack direction='column' spacing={2}>
          <StatsCol/>
        </Stack>
      </Stack>
    </>
  )
}

export default Dashboard
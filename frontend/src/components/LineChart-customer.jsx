import React from 'react'
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';
function LineChartcustomer() {
  return (
    <>
    <Box sx={{
          width : 500,
          height : 420,
          bgcolor : '#ebf2fa',
          borderRadius : 5
        }}>

      <section className='line-chart-section'>
        <h6>Last month deliveries</h6>
      </section>

    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
    />

        </Box>
    </>
  )
}

export default LineChartcustomer
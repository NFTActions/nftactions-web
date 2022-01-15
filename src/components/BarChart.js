import React from 'react'
import { Bar } from 'react-chartjs-2'

const state = {
  labels: ['Bored Ape Yacht Club', 'Cryptopunks', 'Deadfellaz', 'PhantaBear', 'CryptoSkulls', 'World of Women', 'Azuki', 'Mutant Ape Yacht Club', 'Doodles', 'The Sandbox'],
  datasets: [
    {
      label: 'No. of Sales',
      backgroundColor: 'rgba(24,104,182,1)',
      borderColor: 'rgba(0,0,0,0)',
      borderWidth: 2,
      data: [300, 240, 220, 210, 150, 145, 130, 120, 50, 45]
    }
  ]
}

const BarChart = () => {
  return (
    <div>
      <Bar
        data={state}
        options={{
          title:{
            display: true,
            text: 'Hottest collections in the past hour',
            fontSize:20
          },
          legend:{
            display: true,
            position: 'right'
          }
        }}
      />
    </div>
  )
}

export default BarChart
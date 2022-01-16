import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import axios from 'axios'

// const state = {
//   labels: ['Bored Ape Yacht Club', 'Cryptopunks', 'Deadfellaz', 'PhantaBear', 'CryptoSkulls', 'World of Women', 'Azuki', 'Mutant Ape Yacht Club', 'Doodles', 'The Sandbox'],
//   datasets: [
//     {
//       label: 'No. of Sales',
//       backgroundColor: 'rgba(24,104,182,1)',
//       borderColor: 'rgba(0,0,0,0)',
//       borderWidth: 2,
//       data: [300, 240, 220, 210, 150, 145, 130, 120, 50, 45]
//     }
//   ]
// }

const BarChart = () => {
  const [chartData, setChartData] = useState({});

  const chart = () => {
    let salaries = [];
    let names = [];

    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => {
        console.log(res)
        for (const object of res.data.data) {
          salaries.push(parseInt(object.employee_salary))
          names.push(object.employee_name)
        }

        setChartData({
          labels: names,
          datasets: [
            {
              label: "salaries",
              data: salaries,
              backgroundColor: ['rgba(24,104,182,1)'],
              borderWidth: 2
            }
          ]
        })
      })
      .catch(err => {
        console.log(err);
      })

    console.log(salaries, names)
  }

  useEffect(() => {
    chart()
  }, [])

  return (
    <div>
      <Bar
        data={chartData}
        options={{
          title:{
            display: true,
            text: 'Hottest collections in the past hour',
            fontSize: 20
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
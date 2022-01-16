import Header from './components/Header'
import BarChart from './components/BarChart'
import PlaceholderBlock from './components/PlaceholderBlock'

import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

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
    <div className='container'>
      <Header title='NFTActions' />
      <div><BarChart chartData={chartData} /></div>      
      <PlaceholderBlock text='This is where the table could be added' />
    </div>
  )
}

export default App;

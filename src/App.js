import Header from './components/Header'
import BarChart from './components/BarChart'
import PlaceholderBlock from './components/PlaceholderBlock'

const App = () => {
  return (
    <div className='container'>
      <Header title='NFTActions' />
      <div><BarChart /></div>      
      <PlaceholderBlock text='This is where the table could be added' />
    </div>
  )
}

export default App;

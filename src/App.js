import Header from './components/Header'
import PlaceholderBlock from './components/PlaceholderBlock'

const App = () => {
  return (
    <div className='container'>
      <Header title='NFTActions' />
      <PlaceholderBlock text='This is where the chart could be added'/>
      <PlaceholderBlock text='This is where the table could be added' />
    </div>
  )
}

export default App;

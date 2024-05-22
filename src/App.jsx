import './App.css'
import { Carousel, Header } from './Exports'

function App() {

  const styles = {
    backgroundColor: '#080c0e', 
    minHeight: '100vh',
  };

  return (
    <>
    <div style={styles}>
    <Header />
    <Carousel />
    </div>
    </>
  )
}

export default App

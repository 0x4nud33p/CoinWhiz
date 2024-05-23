import './App.css'
import { Header,Herocomponent,Table } from './Exports'

function App() {

  const styles = {
    backgroundColor: '#080c0e', 
    minHeight: '100vh',
  };

  return (
    <>
    <div style={styles}>
    <Header />
    <Herocomponent />
    <Table />
    </div>
    </>
  )
}

export default App

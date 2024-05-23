import { Header,Herocomponent,Table } from '../Exports'

function Home() {

  const styles = {
    backgroundColor: '#080c0e', 
    minHeight: '100vh',
  };

  return (
    <>
    <div style={styles}>
    <Herocomponent />
    <Table />
    </div>
    </>
  )
}

export default Home

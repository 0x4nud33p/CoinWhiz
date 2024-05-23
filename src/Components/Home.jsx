import { Header,Herocomponent,Market } from '../Exports'

function Home() {

  const styles = {
    backgroundColor: '#080c0e', 
    minHeight: '100vh',
  };

  return (
    <>
    <div style={styles}>
    <Herocomponent />
    <Market />
    </div>
    </>
  )
}

export default Home

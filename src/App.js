import Main from './components/Main'
import SubmitForm from './components/SubmitForm';
import { useLocation } from 'react-router-dom';



const App = () => {
  const { pathname } = useLocation()
  return (
    <>
      <Main />
      {pathname === '/' && <SubmitForm />}
    </>
  )
}

export default App;

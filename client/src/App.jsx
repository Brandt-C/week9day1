import axios from 'axios';

import BackgroundVideo from './components/BackgroundVideo';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import TestUseState from './components/TestUseState';


export default function App() { 


  // const fetchAPI = async () =>{
  //   const response = await axios.get("http://127.0.0.1:5000/api/users");
  //   console.log(response.data.users);
  // };

  // useEffect(() => {
  //   fetchAPI();
  // }, []);

  return (
    <>
        In the beginning... 
        <BackgroundVideo />
        <Header />
        <LoginForm />
        <TestUseState />
    </>
  )
}


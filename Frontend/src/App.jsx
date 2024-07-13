
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Signup from './Components/Signup';
import Courses from './Courses/Courses';
import Home from './Home/Home';
import {Routes,Route} from "react-router-dom";
import {Toaster} from "react-hot-toast";
import myContext from './context/context';
import { useContext } from 'react';
import FeedbackPage from './Components/Feedback';
function App() {

  const { authUser,setAuthUser } = useContext(myContext);
  
  return (
    <>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/courses" element={authUser?<Courses/>:<Signup/>}/>
       <Route path='/signup' element={<Signup/>}></Route>
       <Route path='/contactus' element={<ContactUs/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/feedback' element={<FeedbackPage/>}></Route>
     </Routes>
     <Toaster/>
    </>
  )
}

export default App

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar'
// import About from './components/About';
// import AllInOne from './components/AllInOne';
// import Hero from './components/Hero';
// import Pricing from './components/Pricing';
// import Support from './components/Support'
// import Patient from './components/Patient'
import Homepage from "./pages/Homepage";
import Patientpage from "./pages/Patientpage";
import Doctorlistpage from "./pages/Doctorlistpage";
import Pharmacypage from "./pages/Pharmacypage";
// import Chatpage from "./pages/Chatpage";
// import Signuppage from "./pages/Signuppage";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/pharmacy' element={<Pharmacypage />} />
        {/* <Route path='/chat' element={<Chatpage />} /> */}
        {/* <Route path='/signuppage' element={<Signuppage />} /> */}
        <Route path='/patientpage' element={<Patientpage />} />
        <Route path='/patientpage/doctorlistpage' element={<Doctorlistpage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;

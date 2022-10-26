import './App.css';
import { Banner } from './components/Banner';
import { MainContent } from './components/MainContent';
import { SecOne } from './components/SecOne';
import { SecDoctors } from './components/SecDoctors';
import { FormFooter } from './components/FormFooter';
import { Footer } from './components/Footer';
import LogonNav from './assets/images/semi_footer25.png'

function App() {
  return (
    <div className="container-fluid" style={{ padding: 0  }}>
      {/* <NavbarComponnet/> */}
      <Banner/>
      <MainContent/>
      < SecOne/>
      < SecDoctors/>
      <  FormFooter/>
      <div className='secion-nav'>
        <span className='col-md-12 d-flex pt-4 justify-content-center avalado'>Avalado por:</span>
        <div className='row'>
        <div className='col-md-6 d-flex justify-content-center nav-logo'>
            <img className='mt-4 boehringer' src={LogonNav} alt="logo-nav"/>
        </div>
        <div className='col-md-6 d-flex justify-content-center nav-logo'>
            <img className=' mt-4 boehringer' src={LogonNav} alt="logo-nav"/>
        </div>
        </div>
    </div>
      {/* <   SemiFooter /> */}
      <   Footer />
     
    </div>
  );
}

export default App;

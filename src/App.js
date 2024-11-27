import logo from './logo.svg';
import './App.css';
import NavBar from './components/common/NavBar';
import Hero from './components/Hero';
import Footer from './components/common/Footer';
import RunningCard from './components/common/RunningCard';
import EmpowerCash from './components/EmpowerCash';
import ExternalCash from './components/ExternalCash';
import UsedCard from './components/UsedCard';
import TrustedCash from './components/TrustedCash';
import CreditCash from './components/CreditCash';
import Appx from './components/Appx';

function App() {
  return (
    <>
      {/* <BlogDetails /> */}
      <NavBar />
      <Hero />
      <RunningCard />
      <EmpowerCash />
      <ExternalCash />
      <UsedCard />
      <TrustedCash />
      <CreditCash />
      <Footer />
    </>

  );
}

export default App;

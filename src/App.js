// import logo from './logo.svg';
// import './App.css';
import PageWrapper from './components/Layout/PageWrapper';
import ScrollTop from './components/Layout/ScrollTop';
import LogoutModal from './components/Layout/LogoutModal';

function App() {
  return (
    <div className="App">
        <PageWrapper />
        <ScrollTop />    
        <LogoutModal />
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import logo from './logo.svg';
// import './App.css';
import Layout from './components/layout/Layout';
// import PageWrapper from './components/Layout/PageWrapper';
// import ScrollTop from './components/Layout/ScrollTop';
// import LogoutModal from './components/Layout/LogoutModal';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>

    // <div className="App">
    //     <PageWrapper />
    //     <ScrollTop />    
    //     <LogoutModal />
    // </div>
  );
}

export default App;

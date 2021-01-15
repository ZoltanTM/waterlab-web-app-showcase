import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import logo from './logo.svg';
// import './App.css';
import Layout from './components/layout/Layout';
// import PageWrapper from './components/Layout/PageWrapper';
// import ScrollTop from './components/Layout/ScrollTop';
// import LogoutModal from './components/Layout/LogoutModal';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Layout />
//       </div>
//     </BrowserRouter>

//     // <div className="App">
//     //     <PageWrapper />
//     //     <ScrollTop />    
//     //     <LogoutModal />
//     // </div>
//   );
// }

class App extends React.Component {  
  // title = 'waterlab';

  componentDidMount() {
    let path = localStorage.getItem('path');
    if(path) {
      localStorage.removeItem('path');
      this.router.navigate([path]);
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Layout />
        </div>
      </Router>  
    );
  }
}

export default App;
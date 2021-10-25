import logo from './logo.svg';
import './App.css';
// Fluid container
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

// Font dependencies
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// App components
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <React.Fragment>
      <CssBaseline />
        <Container maxWidth="sm">
          <Header />
          {/* <Main /> */}
          <Footer />
        </Container>
    </React.Fragment>
      
      
    </div>
  );
}

export default App;

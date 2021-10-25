import '../css/header.css';
// Import components for navigation
import Main from './main';
import Weapons from './weapon';
import Monsters from './monsters';
// MUI + React Router dependencies
import * as React from 'react';
import { Switch, Route, Link as RouterLink, MemoryRouter as Router } from 'react-router-dom';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const LinkBehavior = React.forwardRef((props, ref) => (
    <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
  ));

//  Swap out components based on navigation
function Header() {
    return (
        <header className="App-header">
        <h2>Header</h2>
        <Box sx={{ typography: 'body1' }}>
            <Router>
                <Link component={RouterLink} to="/Main">
                Home
                </Link>
                <br />
                <Link component={RouterLink} to="/Monsters">
                Monsters
                </Link>
                <br />
                <Link component={RouterLink} to="/Weapons">
                Weapons
                </Link>
                <br />
                <Link component={LinkBehavior}>Outside Link</Link>
                {/* Handle React-Router Switching */}
                <Switch>
                    <Route path="/Main"><Main />
                    </Route>
                    <Route path="/Monsters"><Monsters />
                    </Route>
                    <Route path="/Weapons"><Weapons />
                    </Route>
                </Switch>
            </Router>
        </Box>
        {/* MUI and React-Router logic from MUI documentation here:
            https://mui.com/guides/routing/
        */}
        
        
        
        </header>
        
        
    );
  }



export default Header;

{/* <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a> */}
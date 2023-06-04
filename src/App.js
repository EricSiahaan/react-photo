import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Wedding from "./pages/Wedding";
import Gallery from "./pages/Gallery"
import Contact from './pages/Contact';


function App() {
  return (
    // <React.Fragment>
    //   <Home />
    // </React.Fragment>
    <Router>
      <Routes>
        {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
        <Route path="/" element={<Home />} />

        {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
        <Route path="/wedding" element={<Wedding />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />

        {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
        {/* <Route path="/contactus" component={ContactUs} /> */}

        {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
      </Routes>
    </Router>
  );
}

export default App;
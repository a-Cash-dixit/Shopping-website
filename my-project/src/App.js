import Category from './components/Category';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import About from './components/About';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import SignUp from './components/SignUp';
function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Category />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/signUp' element={<SignUp />} />
          <Route exact path='/signIn' element={<SignIn />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

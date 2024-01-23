import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';

function App() {
    return (
    <div className="App">
        <link rel="icon" href="../public/favicon.ico" />
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={ <Home />}></Route>
                <Route path='/projects' exact element={ <Projects />}></Route>
                <Route path='/gallery' exact element={ <Gallery />}></Route>
                <Route path='/contact' exact element={ <Contact />}></Route>
            </Routes>
        </Router>
    </div>
    );
}

export default App;

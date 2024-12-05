import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Gallery from './components/pages/Gallery';
import Contact from './components/pages/Contact';
import Demos from './components/pages/Demos';
import './App.css';


function App() {
    return (
    <div className='App'>
        <link rel='icon' href='../public/favicon.ico'/>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={ <Home/>}></Route>
                <Route path='/projects' exact element={ <Projects/>}></Route>
                <Route path='/gallery' exact element={ <Gallery/>}></Route>
                <Route path='/contact' exact element={ <Contact/>}></Route>
                <Route path='/demos' exact element={ <Demos/>}></Route>
            </Routes>
        </Router>
    </div>
    );
}

export default App;
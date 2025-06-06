import React, {useState, useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {Link} from 'react-router-dom';
import {Button} from './Button';
import './Navbar.css';


const styles = StyleSheet.create({
    logo: {
        width: 30,
        height: 30,
    },
});

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 800) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
    <nav className='navbar'>
    <div className='navbar-container'>
        <Link to='/' onClick={closeMobileMenu}>
            <View className='navbar-logo' style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../images/favicon.png')}
                />
            </View>
        </Link>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Portfolio
        </Link>
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                    Projects
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/demos' className='nav-links' onClick={closeMobileMenu}>
                    Demos
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                    Gallery
                </Link>
            </li>
            <li className='nav-item nav-contact'>
                <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                    Contact
                </Link>
            </li>
        </ul>
        {button && <Button buttonStyle='btn--outline' link='/contact'>Contact</Button>}
    </div>
    </nav>
  );
}

export default Navbar
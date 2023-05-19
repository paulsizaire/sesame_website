import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../sesame_log.png'; // Update this to the actual logo path
import './Navigation.css';

function Navigation() {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="full-width-nav" >
            <div className="row">
                <div className="one-third column title" style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        alt='Sesame'
                        src={logo}
                        width='50'
                        height='50'
                        className='d-inline-block logo'
                    />{' '}
                    SESAME
                </div>
                <div className="two-thirds column" style={{ textAlign: 'right', marginTop: '1rem' }}>
                    {expanded &&
                        <>
                            <Link
                                to='section1'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setExpanded(false)}
                                className="link"
                            >
                                Our Technology
                            </Link>
                            <Link
                                to='section2'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setExpanded(false)}
                                className="link"
                            >
                                About Us
                            </Link>
                            <Link
                                to='section3'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setExpanded(false)}
                                className="link"
                            >
                                Contact
                            </Link>
                        </>
                    }
                    <button className="button" onClick={() => setExpanded(!expanded)}>
                        {expanded ? 'Close' : 'Menu'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navigation;

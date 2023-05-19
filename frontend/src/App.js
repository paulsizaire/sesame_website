import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import Navigation from './components/Navigation';
import softwarePic from './software_picture.png';
import './App.css';



function App() {

  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowHeader(true);
    }, 1000);
  }, []);

  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:8000/api/register-email/', {  // Update this to your Django server URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    setEmail('');
  }

  const handleChange = (event) => {
    setEmail(event.target.value);
  }

  return (
    <div>
      <Navigation />
      <Element id='section1' className="full-width-section section-margin">
        <div className="row">
          <div className="one-half column">
            <h2 className={showHeader ? 'fade-in' : 'hidden'}>Energy systems are undergoing a major transformation.</h2>
            <h3>Meet Sesame - the first tool to help heavy industry understand, derisk, and navigate their decarbonization journey</h3>
            <p>Sign up to keep in touch</p>
            <form className="email-form" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
              />
              <button type="submit">Sign Up</button>
            </form>
          </div>
          <div className="one-half column">
            <img src={softwarePic} alt="Software Screenshot" className="image" />
          </div>
        </div>

      </Element>

      <Element id='section2' className="full-width-section">
        Hey Section 2
      </Element>

      <Element id='section3' className="full-width-section">
        Hey Section 3
      </Element>
    </div>
  );
}

export default App;


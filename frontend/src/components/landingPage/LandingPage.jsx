import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import './LandingPage.css';
import {useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';
import blob from '../../images/blob.png';
import pic from '../../images/pic.png';
import signupIcon from '../../images/signupIcon.png';
import calendarIcon from '../../images/calendarIcon.png';
import notificationIcon from '../../images/notificationIcon.png';
import checkedIcon from '../../images/checkedIcon.png';

const LandingPage = () => {
  const {isLoggedIn, user} = useSelector((state) => state.auth);
  const history = useHistory();

  if (isLoggedIn) {
    history.push('/dashboard');
  }

  return (
    <div className="landingPage">
      <div className="primary">
        <div className="welcomeMessage">
          <h1>Track your day with <span className="qutine">Qutine!</span></h1>
          <p>Routine for your quarantine.</p>
        </div>
        <div className="landingPageButtonsContainer">
          <Link to="/register" className="landingPageButtons registerButton">Register</Link>
          <Link to="/login" className="landingPageButtons logInButton">Log in</Link>
        </div>
        <div className="images">
          <img className='blob' src={blob}/>
          <img className='pic' src={pic}/>
        </div>
      </div>

      <div className="landingTutorial">
        <div className="signupIcon grid-steps">
          <img src={signupIcon}/>
          <h2>1.</h2>
          <p>Register to get started with your new routine.</p>
        </div>
        <div className="calendarIcon grid-steps">
          <img src={calendarIcon}/>
          <h2>2.</h2>
          <p>Create new routines and goals.</p>
        </div>
        <div className="notificationIcon grid-steps">
          <img src={notificationIcon}/>
          <h2>3.</h2>
          <p>Get notified before it's time to do your routine.</p>
        </div>
        <div className="checkedIcon grid-steps">
          <img src={checkedIcon}/>
          <h2>4.</h2>
          <p>Track your completed goals.</p>
        </div>
      </div>


    </div>
  );
};


export default LandingPage;

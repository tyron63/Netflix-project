import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import { Link } from 'react-router-dom';

// Styling
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';

// Components
import LoginForm from '../components/Login/LoginForm';
import LoginFooter from '../components/Login/LoginFooter';

class Login extends Component {
  render() {
    return (
      <div className="Login-container-1">
        <div className="headert-top">
          <Link to="/">
            <Logo src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <LoginForm />
        <LoginFooter />
      </div>
    );
  }
}

export default Login;

const customMedia = generateMedia({
  tablet: '640px',
  lsTablet: '740px',
});

//Logo
const Logo = styled.img`
  width: 11rem;
  position: absolute;
  top: 25%;
  left: 11%;
  transform: translate(-50%, -50%);
  margin-left: 0;
  ${customMedia.lessThan('tablet')`
    top: 45%;
    left: 23%;
  `}
`;

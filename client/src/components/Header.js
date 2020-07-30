import React, { Component } from 'react';
import logo from '../svg/logo.svg';
import { NavLink, Link } from 'react-router-dom';
// styling
import styled from 'styled-components';
//Button
import { Button } from './Button';
// Media
import { generateMedia } from 'styled-media-query';

class Header extends Component {
  render() {
    return (
      <HeaderComponent className="header-container">
        <div className="header-top">
          <Link to="/">
            <Logo src={logo} alt="Netflix logo" />
          </Link>
          <NavLink to="/Login" className="signIn-btn">
            Sign In
          </NavLink>
        </div>
        {/* Header Content */}
        <div className="header-content">
          <Title>See what's next</Title>
          <SubTitle>WATCH ANYTHING, CANCEL ANYTIME</SubTitle>
          <Link to='/choose-plan'>
          <Button className="main-offer-btn" primary>
            join free for a month
          </Button>
          </Link>
        </div>
      </HeaderComponent>
    );
  }
}

export default Header;

const customMedia = generateMedia({
  lDesktop: '1350px',
  mDesktop: '1150px',
  Tablet: '960px',
  smTablet: '740px',
});

//Logo
const Logo = styled.img`
  width: 10rem;
  height: 3.5rem;
  position: absolute;
  top: 25%;
  left: 10%;
  transform: translate(-50%, -50%);
  margin-left: 0;
  ${customMedia.lessThan('Tablet')`
    left: 20% !important;
  `}
`;

// Header Container
const HeaderComponent = styled.div`
  .signIn-btn {
    right: 0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: var(--main-red);
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in;
    &:hover {
      background: var(--main-red-hover);
    }
    ${customMedia.lessThan('smTablet')`
      margin-top: 1.25rem !important;
      right: 5%;
  `}
  }

  .Icon svg {
    vertical-align: bottom !important;
    margin-left: 1.5rem;
    ${customMedia.lessThan('smTablet')`
      display: none !important;
  `}
  }

  // header Top
  .header-top {
    position: relative;
    height: 10rem;
    z-index: 1;
  }

  // Header Content
  .header-content {
    right: 27%;
    width: 65%;
    position: relative;
    margin: 4.5rem auto 0;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: column;
    z-index: 2;
    ${customMedia.lessThan('smTablet')`
      display: grid;
      grid-template-rows: repeat(3, 60px);
      margin-top: 8rem;
    `}
  }

  .main-offer-btn {
    font-size: 100%;

  ${customMedia.lessThan('lDesktop')`
    margin: 0 33%;
    font-size: 1.5rem;
  `}
  ${customMedia.lessThan('mDesktop')`
    margin: 0 25%;
    font-size: 1.5rem;
  `}
  ${customMedia.lessThan('Tablet')`
    margin: 0 20%;
    font-size: 1.3rem;
  `}
  ${customMedia.lessThan('smTablet')`
    margin: 0 15%;
    font-size: 1.3rem;
  `}
  }
`;

/* react icons kit */

// Main Title
const Title = styled.h1`
  margin: 0 0 0 1.2rem;
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.1em;
  ${customMedia.lessThan('Tablet')`
    font-size: 2.4rem;
  `}
`;

// SubTitle
const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 1.25em;
  margin: 0 0 1.875rem;
  text-transform: uppercase;
  ${customMedia.lessThan('smTablet')`
    font-size: 1.4rem;
    margin: 0;
  `}
`;

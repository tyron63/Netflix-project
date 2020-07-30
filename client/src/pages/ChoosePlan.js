import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '../components/Button';

import styled from 'styled-components';
// images and logo
import logo from '../svg/logo.svg';
import checkmarkLogo from '../images/Checkmark.png';

import FooterChoosePlan from '../components/chooseplan/footerChoosePlan';

const ChoosePlan = () => {
  return (
    <MainContainer>
      <div className="header-top">
        <Link to="/">
          <Logo src={logo} alt="logo" />
        </Link>
        <NavLink to="/login" className="btn signIn-btn">
          Sign In
        </NavLink>
      </div>
      <div className="header-content">
        <img className="checkmark-logo" src={checkmarkLogo} alt="checkmark" />
        <p>
          Step <strong>1</strong> of <strong>3</strong>
        </p>
        <h2>Choose your Plan</h2>
        <div className="checked-list">
          <div className="bullet">No commitments, cancel anytime</div>
          <div className="bullet">Everthing on Netflix for one low price</div>
          <div className="bullet">Unlimited view on all your devices</div>
        </div>
        <Button>See the plans</Button>
      </div>
      <FooterChoosePlan />
    </MainContainer>
  );
};

export default ChoosePlan;

const MainContainer = styled.div`
  background: #fff;
  //header-top
  .header-top {
    background: #fff;
    height: 6rem;
    border-bottom: 1px solid #e6e6e6;
  }

  // Header content
  .header-content {
    display: grid;
    justify-content: center;
    background: #fff;
    color: var(--main-dark);
    margin-bottom: 6rem;
    width: 85%;
    position: relative;
    margin: auto;
    margin-top: 4.5rem;
    text-align: center;
    align-content: center;
    flex-derection: column;
    z-index: 2;
  }

  // Checkmark Logo
  .checkmark-logo {
    width: 3rem;
    margin-top: 3.125rem;
    margin-bottom: 2rem;
  }

  .header-content img {
    margin: 6.25rem auto 1.875rem;
  }

  .checked-list {
    text-align: left;
    margin: 1rem auto 3rem;
    padding-left: 1.6255rem;
    width: 75%;
    font-size: 17px;
    padding: auto;
  }

  .bullet {
    margin-top: 1rem;
    margin-left: 1rem;
    text-indent: -1em;
    line-height: 1.2rem;
  }

  .signIn-btn {
      margin: 1.5625rem 3% 0;
      padding: 0.4375rem 1.0625rem;
      font-weight: 700;
      line-height: normal;
      color: var(--main-dark);
      font-size: 1.25rem;
      right: 0;
      position: absolute;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }

  }
`;

//logo
const Logo = styled.img`
  width: 10.5rem;
  height: 3.5rem;
  position: absolute;
  top: 9%;
  left: 8%;
  transform: translate(-50%, -50%);
  margin-left: 0;
`;

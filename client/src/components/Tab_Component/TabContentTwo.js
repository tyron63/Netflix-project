import React from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom'

// Images
import TV from '../../images/tab-tv.png';
import Tablet from '../../images/tab-tablet.png';
import MacBook from '../../images/tab-macbook.png';

// Styling
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';

function TabContentTwo() {
  return (
    <TabContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span style={{ fontSize: '1.5rem' }}>
            Watch TV shows and movies anytime, anywhere - personalized for you.
          </span>
          <Link to='/choose-plan' className='btn'>
            <Button>try it now</Button>
          </Link>
        </div>
        {/* Tab Bottom Content */}
        <div className="tab-bottom-content">
          {/* TV image container */}
          <div>
            <img src={TV} alt="Tv" style={{ width: '18.75rem' }} />
            <h3>Watch on your TV</h3>
            <p>
              Smart TVs, Playstation, Xbox, Chromecast, Apple Tv, Blu-ray
              players and more.
            </p>
          </div>
          {/* Tablet image container */}
          <div>
            <img
              src={Tablet}
              alt="Tabler"
              style={{ width: '18.75rem', paddingTop: '0.625rem' }}
            />
            <h3>Watch instantly or download for later</h3>
            <p>Available on phone and tablet, whenever you go.</p>
          </div>
          {/* Macbook image container */}
          <div>
            <img
              src={MacBook}
              alt="MacBook"
              style={{
                width: '18.75rem',
                paddingTop: '0.625rem',
                paddingBottom: '0.625rem',
              }}
            />
            <h3>Use any computer</h3>
            <p>Watch right on Netflix.com.</p>
          </div>
        </div>
      </div>
    </TabContainer>
  );
}
export default TabContentTwo;

const customMedia = generateMedia({
  sDesk: '1440px',
  tablet: '900px',
});

// Main Tab Content Container
const TabContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 15%;
  }

  // Tab Top Content
  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-item: center;
    padding: 2.5rem 0;
    ${customMedia.lessThan('sDesk')`
      grid-template-columns: repeat(2, 1fr);
    `}

    ${customMedia.lessThan('tablet')`
      grid-template-columns: 1fr;
      text-align: center;
      row-gap: 1.5rem
    `}
  }

  span {
    grid-column: 1 / 8;
    ${customMedia.lessThan('tablet')`
      grid-column: 1 / -1;
      font-size: 1.5rem;
    `}
  }

  .btn {
    margin: 0 0.25rem 0.25rem;
    grid-column: 10 / 12;
    ${customMedia.lessThan('tablet')`
      grid-column: 1 / -1;
      margin-left: 30%;
      margin-right: 30%
    `}
  }

  //Tab bottom Content
  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    text-align: center;
    margin-top: 2rem;
    ${customMedia.lessThan('tablet')`
      grid-template-columns: 1fr;
    `}
  }

  h3 {
    margin: 0.5rem 0;
  }

  p {
    color: var(--main-grey);
  }
`;

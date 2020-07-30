import React from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom'

// Icons
import { Icon } from 'react-icons-kit';
import { cross } from 'react-icons-kit/icomoon/cross';
import { checkmark } from 'react-icons-kit/icomoon/checkmark';

// Styling
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';

function TabContent3() {
  return (
    <TabContainer>
      <div className="tab-content">
        <div className="tab-top-content">
          <span style={{ fontSize: '1.5rem' }}>
            Choose one plan watch everything on Netflix
          </span>
          <Link to='/signUp' className='btn'>
          <Button >Try it now</Button>
          </Link>
        </div>
        {/* bottom Content */}
        <div className="tab-bottom-content">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Basic</th>
                <th>Standard</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monthly price</td>
                <td>R200</td>
                <td>R680</td>
                <td>R950</td>
              </tr>
              <tr>
                <td>HD available</td>
                <td>
                  <Icon icon={cross} size={12} />
                </td>
                <td>
                  <Icon icon={checkmark} size={12} />
                </td>
                <td>
                  <Icon icon={checkmark} size={12} />
                </td>
              </tr>
              <tr>
                <td>Ultra HD available</td>
                <td>
                  <Icon icon={cross} size={12} />
                </td>
                <td>
                  <Icon icon={cross} size={12} />
                </td>
                <td>
                  <Icon icon={checkmark} size={12} />
                </td>
              </tr>
              <tr>
                <td>Screens you can watch on at the same time</td>
                <td>1</td>
                <td>2</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Watch on your laptop, TV, phone and tablet</td>
                <td>
                  <Icon icon={checkmark} size={12} />
                </td>
                <td>
                  <Icon icon={checkmark} size={12} />
                </td>
                <td>
                  <Icon icon={checkmark} size={12} />
                </td>
              </tr>
              <tr>
                <td>Unlimited movies and TV shows</td>
                <td>
                  <Icon icon={checkmark} size={12} />
                </td>
                <td>
                  <Icon icon={checkmark} size={12} />
                </td>
                <td>
                  <Icon icon={checkmark} size={12} />
                </td>
              </tr>
              <tr>
                <td>Cancel anytime</td>
                <td>
                  <Icon icon={checkmark} size={12} />
                </td>
                <td>
                  <Icon icon={checkmark} size={12} />
                </td>
                <td>
                  <Icon icon={checkmark} size={12} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </TabContainer>
  );
}
export default TabContent3;

const customMedia = generateMedia({
  lDesk: '1350px',
  mdDesk: '1000px',
});

// Main Component
const TabContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 15%;
    padding-bottom: 1%;
  }

  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    padding: 3rem 0 0;
    ${customMedia.lessThan('lDesk')`
      grid-template-colums: 1fr;
      row-gap: 1.5rem;
      text-align: center;
    `}
  }

  span {
    grid-column: 3 / 9;
    ${customMedia.lessThan('lDesk')`
      grid-column: 1 / -1;
    `}
  }

  .btn {
    grid-column: 9 / 12;
    margin: 0 1.25rem 1.25rem;
    ${customMedia.lessThan('mdDesk')`
      grid-column: 1 / -1;
      margin-left: 30%;
      margin-right: 30%;
    `}
  }

  //Tab Bottom
  .tab-bottom-content {
    margin: 2rem auto;
  }

  //Table
  table {
    width: 100%;
    margin-top: 2rem;
    border-collapse: collapse;
  }

  table thead th {
    text-transform: uppercase;
    padding: 0.8rem;
  }

  table tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }
  table tbody tr td {
    color: #999;
    padding: 0.8rem 1.2rem;
    text-align: center;
  }

  table tbody tr td:first-child {
    text-align: left;
  }

  table tbody tr:nth-child(even) {
    background: #222;
  }
`;

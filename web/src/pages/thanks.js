import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { RiHomeHeartFill } from 'react-icons/ri';
import SEO from '../components/SEO';

export default function Resume() {
  return (
    <>
      <SEO title="Thank You!" />
      <ThanksStyles>
        <div className="container">
          <h1>Thank you for getting in touch!</h1>
          <p>I will reply to you as soon as I can.</p>
          <Link to="/" className="btn filled">
            <RiHomeHeartFill size="25px" />
            Back to Home
          </Link>
        </div>
      </ThanksStyles>
    </>
  );
}

const ThanksStyles = styled.main`
  .container {
    margin-top: 10rem;
    text-align: center;

    p {
      margin-top: 4rem;
    }

    a {
      margin: 0 auto;
      margin-top: 4rem;
      svg {
        margin-right: 1rem;
      }
    }
  }
`;

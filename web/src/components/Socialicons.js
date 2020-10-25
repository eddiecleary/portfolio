import React from 'react';
import styled from 'styled-components';
import {
  FaTwitterSquare as Twitter,
  FaFacebookSquare as Facebook,
  FaInstagramSquare as Instagram,
} from 'react-icons/fa';

export default function Socialicons() {
  return (
    <StyledSocialicons className="socialicons">
      <a aria-label="Facebook" href="https://www.facebook.com">
        <Facebook />
      </a>
      <a aria-label="Instagram" href="https://www.instagram.com">
        <Instagram />
      </a>
      <a aria-label="Twitter" href="https://www.twitter.com">
        <Twitter />
      </a>
    </StyledSocialicons>
  );
}

const StyledSocialicons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 24.6rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2rem;

  svg {
    width: 44px;
    height: 44px;
  }

  @media (min-width: 375px) {
    svg {
      width: 52px;
      height: 52px;
    }
    @media (min-width: 992px) {
      width: 27rem;
      svg {
        width: 60px;
        height: 60px;
      }
    }
  }
`;

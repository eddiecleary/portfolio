import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import Socialicons from './Socialicons';
import Nav from './Nav';

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "assets/images/logo.png" }) {
      childImageSharp {
        fluid(quality: 70, maxWidth: 166) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

export default function Footer() {
  const data = useStaticQuery(query);

  return (
    <>
      <FooterStyles>
        <div className="container">
          <div className="top">
            <Img
              fluid={data.logo.childImageSharp.fluid}
              alt="Eddie Cleary's Logo, illustration blue framed glasses and scriptive font that reads 'Eddie Cleary' "
            />
            <Socialicons />
          </div>
        </div>
        <Nav className="mid" />
        <div className="bottom">
          <p>Copyright &copy; Eddie Cleary {new Date().getFullYear()}</p>
        </div>
      </FooterStyles>
    </>
  );
}

const FooterStyles = styled.footer`
  margin-top: var(--section-divider);
  text-align: center;
  .top {
    > .gatsby-image-wrapper {
      max-width: 16rem;
      margin-left: auto;
      margin-right: auto;
    }
    .socialicons {
      margin-top: 3.2rem;
    }
  }
  .nav {
    display: flex;
    flex-direction: column;

    > a {
      margin-top: 3.2rem;
      margin-left: auto;
      margin-right: auto;
    }

    > a:first-of-type {
      margin-top: 1.5rem;
    }
  }
  .bottom {
    margin-top: 3.2rem;
  }

  @media (min-width: 768px) {
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .gatsby-image-wrapper {
        min-width: 18rem;
        margin: 0;
      }

      .socialicons {
        margin: 0;
      }
    }
    .nav {
      flex-direction: row;
      align-items: center;
      margin: 5rem 0;
      max-width: 60rem;
      margin-left: auto;
      margin-right: auto;

      > a,
      a:first-of-type {
        margin-top: 0;
      }
    }
  }

  @media (min-width: 1200px) {
    .nav {
      margin: 8rem auto;
    }
  }
`;

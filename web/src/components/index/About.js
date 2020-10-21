import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

export const query = graphql`
  query {
    me: file(relativePath: { eq: "assets/images/me.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 260) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;

export default function About() {
  const data = useStaticQuery(query);
  return (
    <AboutStyles id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="flexWrap">
          <Img
            fluid={data.me.childImageSharp.fluid}
            alt="Portrait shot of Eddie Cleary smiling"
          />
          <div className="textWrap">
            <h4 className="h3 light">Front-End Web Developer</h4>
            <p>
              I never knew web development could be so fun. Initially, it was
              frustrating but once I got the hang of it and “saw the matrix” I
              was so glad I took it on as my profession. I love making my
              projects as minimilastic and user friendly as possible, while also
              fine tuning them under the hood so they perform at{' '}
              <em>breakneck</em> speeds.
            </p>
          </div>
        </div>
      </div>
    </AboutStyles>
  );
}

const AboutStyles = styled.section`
  margin-top: var(--section-divider);

  .gatsby-image-wrapper {
    border: solid var(--color-accent) 3px;
    margin-top: 4.2rem;
    max-width: 20rem;
    margin-left: auto;
    margin-right: auto;
  }

  .textWrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3.2rem;

    p {
      text-align: center;
      margin-top: 2.5rem;
      width: 100%;
      max-width: var(--text-width);
    }
  }

  @media (min-width: 375px) {
    .flexWrap {
      margin-top: 5rem;
    }
    h4 {
      margin: 1rem 0;
    }
    .gatsby-image-wrapper {
      max-width: 30rem;
    }
  }

  @media (min-width: 992px) {
    .flexWrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 85rem;
      margin-left: auto;
      margin-right: auto;

      .gatsby-image-wrapper {
        width: 26rem;
        margin-left: 0;
        margin-right: 0;
      }

      .textWrap {
        align-items: flex-start;

        p {
          text-align: left;
        }
      }
    }
  }

  @media (min-width: 992px) {
    .flexWrap {
      max-width: 90rem;
      margin-top: 7rem;
    }
  }
`;

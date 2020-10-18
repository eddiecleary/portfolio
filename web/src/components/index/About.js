import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

export default function About() {
  const data = useStaticQuery(query);
  return(
    <AboutStyles>
      <div className="container">
        <h2>About Me</h2>
        <div className="flexWrap">
          <Img fluid={data.me.childImageSharp.fluid} alt="Portrait shot of Eddie Cleary smiling" />
          <div className="textWrap">
            <h4 className="h3">Front-End Web Developer</h4>
            <p>I never knew web development could be so fun. Initially, it was frustrating but once I got the hang of it and “saw the matrix” I was so glad I took it on as my profession. I love making my projects as minimilastic and user friendly as possible, while also fine tuning them under the hood so they perform at <em>breakneck</em> speeds.</p>
          </div>
        </div>
      </div>
    </AboutStyles>
  )
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
    }
  }
`

export const query = graphql`
  query {
    me: file(relativePath: {eq: "assets/images/me.jpg"}){
      childImageSharp{
        fluid(quality:70,maxWidth:166){
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

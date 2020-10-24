import React from 'react';
import styled from 'styled-components';
import Hero from '../components/index/Hero';
import About from '../components/index/About';
import Resume from '../components/index/Resume';
import Experience from '../components/index/Experience';
import Projects from '../components/index/Projects';
import Contact from '../components/index/Contact';
import SEO from '../components/SEO';

export default function Index() {
  return (
    <>
      <SEO title="Home" />
      <IndexStyles>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </IndexStyles>
    </>
  );
}

const IndexStyles = styled.main``;

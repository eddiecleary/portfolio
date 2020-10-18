import React from 'react';
import styled from 'styled-components';
import Hero from '../components/index/Hero';
import About from '../components/index/About';
import Resume from '../components/index/Resume';
import Experience from '../components/index/Experience';

export default function Index() {
  return (
    <IndexStyles>
      <Hero />
      <About />
      <Resume />
      <Experience />
    </IndexStyles>
  )
}

const IndexStyles = styled.main`

`
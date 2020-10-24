import React from 'react';
import styled from 'styled-components';
import Hero from '../components/resume/Hero';
import Experience from '../components/resume/Experience';
import SEO from '../components/SEO';

export default function Resume() {
  return (
    <>
      <SEO title="Resumé" />
      <ResumeStyles>
        <Hero />
        <Experience />
      </ResumeStyles>
    </>
  );
}

const ResumeStyles = styled.main``;

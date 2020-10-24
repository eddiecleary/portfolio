import React from 'react';
import styled from 'styled-components';
import { FiDownload as Download } from 'react-icons/fi';

export default function Experience() {
  return (
    <ExperienceStyles>
      <div className="container">
        <article className="experience">
          <header className="title">
            <h2 className="special">Experience</h2>
            <h6 className="h2">Personal Study</h6>
            <h5 className="h2 regular">Cebu City, Philippines -</h5>
            <h3 className="h2 light">Digital Nomad</h3>
          </header>
          <time className="date">
            <span>September 2018 - Now</span>
          </time>
          <p className="description">
            Completed 4 website projects to showcase my skills in web
            development. Became confident in my abilities through hard work and
            self determination.
          </p>
        </article>
        <article className="experience">
          <header className="title">
            <h6 className="h2">Verizon Wireless</h6>
            <h5 className="h2 regular">Atlanta, GA USA -</h5>
            <h3 className="h2 light">Retail Wireless Sales</h3>
          </header>
          <time className="date">
            <span>December 2012 - September 2018</span>
          </time>
          <p className="description">
            Achieved Annual Winner’s Circle 4 times (Top 15% of sales reps).
            Offered management position after 1 year but declined because sales
            paid more and I didn’t see Verizon Wireless as a long term career.
          </p>
        </article>
        <article className="experience">
          <header className="title">
            <h2 className="special">Education</h2>
            <h3 className="h2">Self-Taught Web Dev.</h3>
            <h5 className="h2 regular">Cebu City, Philippines</h5>
          </header>
          <time className="date">January 2019 - Now</time>
          <p className="description">
            Completed numerous online courses covering topics including ReactJS,
            ES6 Javascript, CSS3, Headless CMS, Gatsby and much more...
          </p>
        </article>
        <article className="experience">
          <header className="title">
            <h3 className="h2">Georgia Gwinnett College</h3>
            <h5 className="h2 regular">Lawrenceville, GA -</h5>
            <h4 className="h2 light">4.0 GPA</h4>
          </header>
          <time className="date">2009</time>
          <p className="description">
            Completed 1 semester of college with a 4.0. Left college because I
            didn’t see how learning biology was going to help me in pursuing my
            freelance dreams.
          </p>
        </article>
        <article className="experience">
          <header className="title">
            <h3 className="h2">Grayson High School</h3>
            <h5 className="h2 regular">Grayson, GA -</h5>
            <h4 className="h2 light">High School Diploma</h4>
          </header>
          <time className="date">Graduated 2007</time>
          <p className="description">
            Made good grades in school; graduated with a 3.0. Completed a 540
            hour IT/Networking course and passed the COMPTIA A+ certification.
          </p>
        </article>
        <a
          href="https://cdn.sanity.io/files/61v79u0t/production/0e3bc65cae0fdd1d7d22f82c047cc86885ca7f3a.pdf?dl="
          className="btn filled"
        >
          Download PDF <Download className="ml" size="20px" />
        </a>
      </div>
    </ExperienceStyles>
  );
}

const ExperienceStyles = styled.section`
  margin-top: 8rem;

  .special {
    text-align: left;
    margin: 5rem 0;
  }

  .experience {
    margin-top: 5rem;

    .title {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 1.5rem;
    }

    .date {
      font-style: italic;
    }

    .description {
      margin-top: 1.5rem;
    }
  }

  a.btn.filled {
    margin: 0 auto;
    margin-top: 7rem;
  }

  @media (min-width: 480px) {
  }

  @media (min-width: 768px) {
    .experience {
      margin-top: 8rem;
    }

    .description {
      max-width: 55rem;
    }

    a.btn.filled {
      margin-top: 9rem;
    }
  }

  @media (min-width: 992px) {
    .description {
      width: 100%;
      max-width: 90rem;
    }

    a.btn.filled {
      margin-top: 12rem;
    }
  }
`;

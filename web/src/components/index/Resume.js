import React from 'react';
import styled from 'styled-components';
import {
  FiDownload as Download,
  FiChevronRight as Chevron,
} from 'react-icons/fi';
import { Link } from 'gatsby';
import SvgResume from '../SvgResume';

export default function Resume() {
  return (
    <ResumeStyles>
      <div className="container">
        <h2>Resumé</h2>
        <SvgResume />
        <p>
          Download or view my résumé. Review the details{' '}
          <br className="tab desktop wide" />
          of my work history and education.
        </p>
        <div className="btnWrap">
          <a
            href="https://cdn.sanity.io/files/61v79u0t/production/0e3bc65cae0fdd1d7d22f82c047cc86885ca7f3a.pdf?dl="
            className="btn filled"
          >
            Download <Download className="ml" size="20px" />
          </a>
          <Link className="btn" to="/resume">
            View now <Chevron className="ml" size="26px" />
          </Link>
        </div>
      </div>
    </ResumeStyles>
  );
}

const ResumeStyles = styled.section`
  margin-top: calc(var(--section-divider) + 9rem);
  text-align: center;

  p {
    margin-top: 3.2rem;
    text-align: center;
    max-width: var(--text-width);
    margin-left: auto;
    margin-right: auto;
  }

  .btnWrap {
    margin-top: 3.2rem;

    .ml {
      margin-left: 0.5rem;
      margin-top: -0.1rem;
    }
  }

  @media (min-width: 480px) {
    p {
      margin-top: 4.5rem;
    }

    .btnWrap {
      margin-top: 4.5rem;
    }
  }

  @media (min-width: 768px) {
    .resume {
      max-width: 38rem;
      margin-top: 6.5rem;
    }

    .btnWrap {
      .ml {
        margin-left: 1rem;
      }
    }
  }

  @media (min-width: 992px) {
    p {
      margin-top: 6.5rem;
    }

    .btnWrap {
      margin-top: 6.5rem;
    }
  }

  @media (min-width: 1200px) {
    p {
      margin-top: 6.5rem;
    }

    .btnWrap {
      margin-top: 6.5rem;
    }
  }
`;

import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { FiChevronRight as Chevron } from 'react-icons/fi';

const query = graphql`
  query {
    projects: allSanityProject(sort: { fields: publishedAt, order: DESC }) {
      nodes {
        projecturl
        id
        title
        date: publishedAt(formatString: "MMM YYYY")
        datetime: publishedAt(formatString: "YYYY-MM")
        mainImage {
          asset {
            id
            fluid(maxWidth: 350) {
              ...GatsbySanityImageFluid
            }
          }
          alt
        }
        icons {
          asset {
            fixed(width: 32) {
              ...GatsbySanityImageFixed
            }
            id
          }
        }
      }
    }
  }
`;

export default function Projects() {
  const data = useStaticQuery(query);
  const projects = data.projects.nodes;
  return (
    <ProjectsStyles id="portfolio">
      <div className="container">
        <h2>Eddie's Recent Projects</h2>
        <div className="projectslist">
          {projects.map((project) => (
            <article key={project.id} className="project">
              <div className="title">
                <h5 className="h3 light">{project.title}</h5>
                <time dateTime={project.datetime}>{project.date}</time>
              </div>
              <Img
                fluid={project.mainImage.asset.fluid}
                alt={project.mainImage.alt}
                className="mainImage"
              />
              <div className="icons">
                {project.icons.map((icon) => (
                  <div className="icon" key={icon.asset.id}>
                    <Img fixed={icon.asset.fixed} />
                  </div>
                ))}
              </div>
              <a href={project.projecturl} className="btn filled">
                View Site{' '}
                <Chevron aria-label="right arrow" className="ml" size="26px" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </ProjectsStyles>
  );
}

const ProjectsStyles = styled.section`
  margin-top: var(--section-divider);
  .projectslist {
    .project {
      max-width: 250px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      padding: 1.6rem;
      position: relative;
      > *:not(:first-child) {
        margin-top: 2rem;
      }
      &:not(:first-of-type) {
        margin-top: 13rem;
      }
      &:first-of-type {
        margin-top: 6rem;
      }
      .title {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
      }
      .icons {
        display: inline-block;
        margin-left: auto;
        margin-right: auto;

        .icon {
          display: inline-block;
          &:not(:last-of-type) {
            margin-right: 3.2rem;
          }
        }
      }
      a.btn {
        position: absolute;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        margin-top: 3.2rem;
      }
    }
  }

  @media (min-width: 375px) {
    .projectslist {
      .project {
        border: solid 1px var(--color-light);
        border-radius: 2.5rem;
        padding: 2.5rem;

        &:first-of-type {
          margin-top: 8rem;
        }

        &:not(:first-of-type) {
          margin-top: 16rem;
        }

        a.btn {
          margin-top: 5.5rem;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .projectslist {
      .project {
        padding: 4rem;
        max-width: 29rem;
        &:first-of-type {
          margin-top: 12rem;
        }
        &:not(:first-of-type) {
          margin-top: 20rem;
        }
        h5 {
          font-size: 2.25rem;
        }
        .mainImage {
        }
        a.btn {
          margin-top: 7.5rem;
        }
        > *:not(:first-child) {
          margin-top: 3.2rem;
        }
        .ml {
          margin-left: 0.8rem;
        }
      }
    }
  }

  @media (min-width: 992px) {
    .projectslist {
      display: flex;
      flex-wrap: wrap;
      margin-top: 10rem;
      justify-content: space-between;
      max-width: 75rem;
      margin-left: auto;
      margin-right: auto;

      .project {
        margin-left: 0;
        margin-right: 0;
        width: 25rem;

        &:first-of-type {
          margin-top: 0;
        }

        &:not(:first-of-type) {
          margin-top: 0;
        }

        :nth-of-type(3),
        :nth-of-type(4) {
          margin-top: 18rem;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .projectslist {
      max-width: 85rem;

      .project {
        margin-left: 0;
        margin-right: 0;
        width: 25rem;

        &:first-of-type {
          margin-top: 0;
        }

        &:not(:first-of-type) {
          margin-top: 0;
        }

        :nth-of-type(3),
        :nth-of-type(4) {
          margin-top: 22rem;
        }
      }
    }
  }
`;

import React, { useEffect, useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

export default function Experience() {
  // register animation references for gsap in the dom
  let theline = useRef();
  let thesvg = useRef();
  let circle1 = useRef();
  let circle2 = useRef();
  let circle3 = useRef();
  let circle4 = useRef();
  let circle5 = useRef();
  let scrubcircle = useRef();
  let linecontainer = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin)
    gsap.core.globals("ScrollTrigger", ScrollTrigger)
    gsap.core.globals("MotionPathPlugin", MotionPathPlugin)

    // this timeline, makes the blue circles POP!
    let tl = gsap.timeline(
      {
        defaults: {
          duration: 0.1,
          autoAlpha: 1,
          scale: 1.2,
          transformOrigin: "center",
          ease: "elastic.out(10, 1)",
        }
      }
    )
    .to(scrubcircle, {scale: 0.25, ease: "none", duration: 0.001}, 0.001)
    .to(circle1, {scale: 0.95}, 0.08)
    .to(circle2, {scale: 0.95}, 0.25)
    .to(circle3, {scale: 0.95}, 0.43)
    .to(circle4, {scale: 0.95}, 0.60)
    .to(circle5, {scale: 0.95}, 0.76)
    .to(scrubcircle, {autoAlpha: 0, ease: "none", duration: 0.001}, 0.98)
    ;

    // this timeline "scrubs" the circle across the line while the user scrolls
    let scrub = gsap.timeline({defaults: {duration: 1, ease: "none"},
      scrollTrigger: {
        trigger: thesvg,
        scrub: 0.3,
        start: "top center",
        end: "bottom center",
      }})
      .to(scrubcircle, {
        ease: "none",
        motionPath: {
          path: theline,
          align: theline,
          alignOrigin: [0.5, 0.5],
        },
      })
      .add(tl, 0);
  }, []);

  return (
    <ExperienceStyles>
      <div className="container">
        <h2>My Experience</h2>
        <div className="linecontainer">
          <svg className="thesvg" ref={el => {thesvg = el}} viewBox="0 0 521 2399" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinecap="round" strokeMiterlimit="1">
            <path fill="none" d="M.002 0H520.98v2398.997H.002z"/>
            <path className="endcap" d="M192.68 2381.005a6.75 6.75 0 01-1.806 6.297 6.75 6.75 0 01-6.297 1.806c-17.25-3.985-51.423-11.866-69.513-16.041a6.761 6.761 0 01-4.976-4.72 6.771 6.771 0 011.719-6.64l53.471-53.472a6.771 6.771 0 016.64-1.718 6.761 6.761 0 014.72 4.975c4.176 18.09 12.064 52.255 16.042 69.513z" fill="#18a0fb"/>
            <path className="theline" ref={el => {theline = el}} d="M1595.31 100s200 0 200 200-400 200-400 400 400 200 400 400-400 200-400 400 400 200 400 400-400 200-400 400c0 49.87 31.09 93.53 76.99 132.51" fill="none" stroke="#ccc" strokeWidth="5" transform="matrix(1 0 0 1 -1337.312 -94)"/>
            <circle className="scrubcircle" ref={el => {scrubcircle = el}} cx="1543.93" cy="248.62" r="50" fill="#cccccc" transform="translate(-1129.746 1550.326) scale(1.02838)"/>
            <circle className="circle" ref={el => {circle1 = el}} cx="1543.93" cy="248.62" r="48.62" fill="#18a0fb" transform="translate(-1129.746 -49.676) scale(1.02838)"/>
            <circle className="circle" ref={el => {circle2 = el}} cx="1543.93" cy="248.62" r="48.62" fill="#18a0fb" transform="translate(-1529.748 350.323) scale(1.02838)"/>
            <circle className="circle" ref={el => {circle3 = el}} cx="1543.93" cy="248.62" r="48.62" fill="#18a0fb" transform="translate(-1129.746 750.323) scale(1.02838)"/>
            <circle className="circle" ref={el => {circle4 = el}} cx="1543.93" cy="248.62" r="48.62" fill="#18a0fb" transform="translate(-1529.748 1150.323) scale(1.02838)"/>
            <circle className="circle" ref={el => {circle5 = el}} cx="1543.93" cy="248.62" r="48.62" fill="#18a0fb" transform="translate(-1129.746 1550.326) scale(1.02838)"/>
          </svg>
        </div>
        <div className="experiencelist">
          <div className="experience">
            <h4 className="h3">Fundamentals</h4>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>ES6 Javascript</li>
            </ul>
          </div>
          <div className="experience">
            <h4 className="h3">Front-End</h4>
            <ul>
              <li>React</li>
              <li>Gatsby</li>
              <li>GSAP</li>
            </ul>
          </div>
          <div className="experience">
            <h4 className="h3">Back-End</h4>
            <ul>
              <li>Headless CMS</li>
              <li>Node.js</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className="experience">
            <h4 className="h3">Deployment</h4>
            <ul>
              <li>Netlify</li>
              <li>Nginx/Linux</li>
              <li>Git</li>
            </ul>
          </div>
          <div className="experience">
            <h4 className="h3">Design</h4>
            <ul>
              <li>Figma/Sketch</li>
              <li>TailwindCSS/SCSS/BEM</li>
              <li>Affinity Photo/Designer</li>
            </ul>
          </div>
        </div>
      </div>
    </ExperienceStyles>
  )
}

const ExperienceStyles = styled.section`
  margin-top: var(--section-divider);
  margin-bottom: 50rem;
  position: relative;

  .linecontainer {
    margin-top: 6.4rem;
  }

  .thesvg {
    overflow: visible;
  }

  .circle {
    opacity: 0;
    transform: scale(0);
  } 
  
  .scrubcircle {
    opacity: 0;
  }

  .experiencelist {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 19.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .experience {
      text-align: center;
      opacity: 1;
      
      &:nth-child(odd) {
        margin-right: 6rem;
      }
      
      &:nth-child(even) {
        margin-left: 6rem;
      }

      &:not(:first-of-type) {
        margin-top: 14.5rem;
      }

      h4 {
        text-decoration: underline;
        text-decoration-color: var(--color-accent);
        letter-spacing: 2px;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          padding: 0.2rem 0;
          
          &:first-of-type {
            padding-top: 1rem;
          }
        }
      }
    }
  }

`
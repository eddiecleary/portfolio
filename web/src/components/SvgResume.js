import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SvgResume() {
  let resume = useRef();
  let top = useRef();
  let title = useRef();
  let heading1 = useRef();
  let p1 = useRef();
  let p2 = useRef();
  let heading2 = useRef();
  let p3 = useRef();
  let p4 = useRef();
  let btnLeft = useRef();
  let btnRight = useRef();
  let bottom = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.core.globals('ScrollTrigger', ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: resume,
        start: 'top 80%',
        toggleActions: 'restart none none none',
      },
    });

    tl.from(title, { scaleX: 0, duration: 0.8 });
    tl.from(heading1, {
      scale: 0,
      transformOrigin: 'center',
      ease: 'elastic.out(1, 0.7)',
      duration: 0.7,
    });
    tl.from(p1, { scaleX: 0, duration: 0.7 }, '-=0.2');
    tl.from(p2, { scaleX: 0, duration: 0.7 }, '-=0.35');
    tl.from(heading2, {
      scale: 0,
      transformOrigin: 'center',
      ease: 'elastic.out(1, 0.6)',
      duration: 0.7,
    });
    tl.from(p3, { scaleX: 0, duration: 0.7 }, '-=0.2');
    tl.from(p4, { scaleX: 0, duration: 0.7 }, '-=0.35');
    tl.from(
      btnLeft,
      { scaleX: 0, transformOrigin: 'center', duration: 0.25 },
      '+=0.2'
    );
    tl.from(
      btnRight,
      {
        scale: 0,
        transformOrigin: 'center',
        ease: 'elastic.out(1, 0.5)',
        duration: 0.55,
      },
      '+=0.35'
    );
    tl.to(resume, {
      y: -10,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      duration: 2,
    });
  }, []);

  return (
    <SvgResumeStyles
      className="resume"
      ref={(el) => {
        resume = el;
      }}
      viewBox="0 0 460 285"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className="bottom"
        ref={(el) => {
          bottom = el;
        }}
        x="0.556376"
        y="2.4923"
        width="264.753"
        height="265.188"
        transform="matrix(0.96331 0.301464 -0.740759 0.695454 202.011 8.59227)"
        fill="#525152"
        stroke="#525152"
        strokeWidth="5"
      />
      <rect
        className="btn left"
        ref={(el) => {
          btnLeft = el;
        }}
        width="56.7901"
        height="14.9215"
        rx="7.46077"
        transform="matrix(0.963094 0.301666 -0.740263 0.69561 136.768 214.031)"
        fill="#6D6C6D"
      />
      <rect
        className="btn right"
        ref={(el) => {
          btnRight = el;
        }}
        width="56.79"
        height="14.9214"
        rx="7.46072"
        transform="matrix(0.963096 0.301664 -0.740268 0.695608 207.187 236.087)"
        fill="#CCCCCC"
      />
      <rect
        className="heading 2"
        ref={(el) => {
          heading2 = el;
        }}
        width="73.1175"
        height="9.05959"
        rx="4.5298"
        transform="matrix(0.963093 0.301668 -0.74026 0.695611 92.9181 124.178)"
        fill="#18A0FB"
      />
      <rect
        className="p 3"
        ref={(el) => {
          p3 = el;
        }}
        width="193.796"
        height="11.7241"
        rx="5.86205"
        transform="matrix(0.963094 0.301667 -0.740263 0.69561 75.5603 140.489)"
        fill="#6D6C6D"
      />
      <rect
        className="p 4"
        ref={(el) => {
          p4 = el;
        }}
        width="141.266"
        height="11.7241"
        rx="5.86205"
        transform="matrix(0.963095 0.301666 -0.740265 0.695609 60.5695 154.576)"
        fill="#6D6C6D"
      />
      <rect
        className="heading 1"
        ref={(el) => {
          heading1 = el;
        }}
        width="73.1175"
        height="9.05959"
        rx="4.52979"
        transform="matrix(0.963093 0.301668 -0.74026 0.695611 152.881 67.8317)"
        fill="#18A0FB"
      />
      <rect
        className="p 1"
        ref={(el) => {
          p1 = el;
        }}
        width="193.796"
        height="11.7241"
        rx="5.86205"
        transform="matrix(0.963093 0.301667 -0.740261 0.69561 135.524 84.1421)"
        fill="#6D6C6D"
      />
      <rect
        className="p 2"
        ref={(el) => {
          p2 = el;
        }}
        width="141.266"
        height="11.7241"
        rx="5.86204"
        transform="matrix(0.963094 0.301667 -0.740262 0.69561 120.533 98.2286)"
        fill="#6D6C6D"
      />
      <rect
        className="top"
        ref={(el) => {
          top = el;
        }}
        x="0.556375"
        y="2.49229"
        width="264.753"
        height="58.0118"
        transform="matrix(0.96331 0.301464 -0.74076 0.695454 202.011 8.59227)"
        fill="#6D6C6D"
        stroke="#6D6C6D"
        strokeWidth="5"
      />
      <rect
        className="title"
        ref={(el) => {
          title = el;
        }}
        width="141.263"
        height="16.0195"
        rx="8.00974"
        transform="matrix(0.96311 0.301672 -0.740283 0.69563 199.159 29.4846)"
        fill="#525152"
      />
    </SvgResumeStyles>
  );
}

const SvgResumeStyles = styled.svg`
  max-width: 29rem;
  margin-top: 4.2rem;

  @media (min-width: 480px) {
    max-width: 32rem;
    margin-top: 6.5rem;
  }

  @media (min-width: 768px) {
    max-width: 38rem;
    margin-top: 6.5rem;
  }

  @media (min-width: 992px) {
    max-width: 45rem;
    margin-top: 8.5rem;
  }

  @media (min-width: 1200px) {
    max-width: 48rem;
    margin-top: 8.5rem;
  }
`;

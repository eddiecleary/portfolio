import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import Socialicons from '../Socialicons';

export default function Contact() {
  const [formInfo, setFormInfo] = useState();
  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);

  const nameLabelRef = useRef();
  const emailLabelRef = useRef();
  const messageLabelRef = useRef();

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&');
  }

  const handleChange = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  const nameFocusToggle = () => {
    setNameFocus(!nameFocus);
  };

  const emailFocusToggle = () => {
    setEmailFocus(!emailFocus);
  };

  const messageFocusToggle = () => {
    setMessageFocus(!messageFocus);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formInfo,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  return (
    <ContactStyles id="contact">
      <div className="container">
        <h3 className="h2">Let's Get In Touch!</h3>
        <p>
          For inquiries, feel free to send an email or write a short message
          below, and I will get back to you as soon as possible!
        </p>
        <div className="contactinfo">
          <a href="mailto: eddie@eddiecleary.com">eddie@eddiecleary.com</a>
          <Socialicons />
        </div>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          action="/resume/"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label hidden htmlFor="bot-field">
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <div className="flexWrap">
            <label
              className={`half ${nameFocus ? 'focused' : ''}`}
              ref={nameLabelRef}
              htmlFor="name"
            >
              Name:
              <input
                type="text"
                name="name"
                onFocus={nameFocusToggle}
                onBlur={nameFocusToggle}
                onChange={handleChange}
              />
            </label>
            <label
              className={`half ${emailFocus ? 'focused' : ''}`}
              ref={emailLabelRef}
              htmlFor="email"
            >
              Email:
              <input
                onFocus={emailFocusToggle}
                onBlur={emailFocusToggle}
                type="email"
                name="email"
                onChange={handleChange}
              />
            </label>
          </div>
          <label
            className={`full ${messageFocus ? 'focused' : ''}`}
            ref={messageLabelRef}
            htmlFor="message"
          >
            Message:
            <textarea
              onFocus={messageFocusToggle}
              onBlur={messageFocusToggle}
              name="message"
              cols="30"
              rows="12"
              onChange={handleChange}
            />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </ContactStyles>
  );
}

const ContactStyles = styled.section`
  margin-top: var(--section-divider);

  .container {
    text-align: center;
    p {
      margin-top: 4.8rem;
      text-align: center;
      max-width: var(--text-width);
      margin-left: auto;
      margin-right: auto;
    }
    .contactinfo {
      display: flex;
      flex-direction: column-reverse;
      margin-top: 4rem;

      > a {
        color: var(--color-accent);
        margin-top: 2rem;
      }
    }
    form {
      margin-top: 3rem;
      position: relative;
      max-width: var(--text-width);
      margin-left: auto;
      margin-right: auto;

      .focused {
        color: var(--color-accent);
      }

      label {
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        > * {
          margin-top: 0.8rem;
        }

        &:not(:first-of-type) {
          margin-top: 1.8rem;
        }

        &.full {
          margin-top: 1.8rem;
        }

        input,
        textarea {
          background-color: var(--color-dark);
          border: 2px solid var(--color-light);
          border-radius: 0.6rem;
          padding: 0.8rem;
          color: var(--color-light);

          &:focus {
            border-color: var(--color-accent);
            outline: none;
          }
        }
      }
      button {
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
        padding: 1.3rem;
        border-radius: 0.6rem;
        background-color: var(--color-accent);
        border: 3px solid var(--color-accent);
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        cursor: pointer;
      }
      @media (min-width: 375px) {
        textarea {
          height: 22rem;
        }
      }
      @media (min-width: 768px) {
        textarea {
          height: 28rem;
        }
      }
    }
  }

  @media (min-width: 992px) {
    .container {
      p {
        margin-top: 6rem;
      }
      .contactinfo {
        margin-top: 6rem;

        > a {
          color: var(--color-accent);
          margin-top: 2rem;
        }
      }
      form {
        .flexWrap {
          display: flex;
          justify-content: space-between;

          .half {
            width: 47%;
          }

          label.half {
            margin-top: 1.8rem;
          }
        }
        label.full {
          margin-top: 3rem;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .container {
      form {
        textarea {
          height: 33rem;
        }
      }
    }
  }
`;

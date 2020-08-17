import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FooterCourse from "./footer-course";
import Wrapper from "../wrapper";
import LinkRedSocial from "./link-red-social";

const FooterStyled = styled.div`
  background: #140f34;
  padding-top: 2em;
  .footer {
    &-content {
      display: grid;
      grid-template-columns: 1fr;
      width: 100%;
      align-items: center;
      justify-content: center;
      .contactos {
        display: block;
        margin: auto;
      }
      .logo {
        display: block;
        margin: auto;
        margin-bottom: 1em;
      }
    }
  }
  .copyright {
    background: black;
    width: 100%;
    padding: 1em 0;
    p {
      color: #2e2929;
      text-align: center;
      padding: 0;
      margin: 0;
      font-size: 24px;
    }
  }
  @media screen and (min-width: 1080px) {
    .footer {
      &-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        .logo {
          margin-bottom: 3em;
        }
      }
    }
  }
`;

function Footer() {
  return (
    <FooterStyled>
      <Wrapper>
        <div className="footer-content">
          <div className="contactos">
            <img className="logo" src="./img/icon-logo.svg" alt="" />
            <LinkRedSocial />
          </div>
          <FooterCourse />
        </div>
      </Wrapper>
      <div className="copyright">
        <p>copyright ©exebio</p>
      </div>
    </FooterStyled>
  );
}

export default Footer;

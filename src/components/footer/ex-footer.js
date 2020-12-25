import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ExFooterCourse from "./ex-footer-course";
import ExWrapper from "../ex-wrapper";
import ExLinkRedSocial from "./ex-link-red-social";

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
          margin-bottom: 1.5em;
        }
      }
    }
  }
`;

function ExFooter() {
  return (
    <FooterStyled>
      <ExWrapper>
        <div className="footer-content">
          <div className="contactos">
            <Link to="/">
              <img
                className="logo"
                src="https://firebasestorage.googleapis.com/v0/b/exebio-educacion.appspot.com/o/web-exebio%2Flogo1-146x32.png?alt=media&token=a86a66ac-dbdb-4aa0-96eb-0c2a5ca86c29"
                alt=""
              />
            </Link>
            <ExLinkRedSocial />
          </div>
          <ExFooterCourse />
        </div>
      </ExWrapper>
      <div className="copyright">
        <p>copyright ©exebio</p>
      </div>
    </FooterStyled>
  );
}

export default ExFooter;

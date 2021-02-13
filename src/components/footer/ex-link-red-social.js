import React from "react";
import { ReactComponent as Facebook } from "../../static/img/red-social/icon-facebook.svg";
import { ReactComponent as Twitter } from "../../static/img/red-social/icon-twitter.svg";
import { ReactComponent as Instagram } from "../../static/img/red-social/icon-instagram.svg";
import { ReactComponent as Youtube } from "../../static/img/red-social/icon-youtube.svg";
import styled from "styled-components";
const FacebookStyled = styled(Facebook)`
  &:hover {
    transition: all 0.5s;
    path {
      fill: #395185;
    }
  }
`;
const TwitterStyled = styled(Twitter)`
  &:hover {
    transition: all 0.5s;
    path {
      fill: #1ca0f2;
    }
  }
`;
const InstagramStyled = styled(Instagram)`
  &:hover {
    transition: all 0.5s;
    path {
      fill: url(#paint0_linear);
    }
  }
`;
const YoutubeStyled = styled(Youtube)`
  &:hover {
    transition: all 0.5s;
    path {
      fill: #c4032a;
    }
  }
`;
const LinkRedSocialStyled = styled.div`
  display: block;
  padding: 10px 7px;
  color: #fff;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  align-items: center;
  letter-spacing: 0.1em;
  justify-content:center;
  .social {
    width: 85vw;
    padding: 7px 0px 7px 15px;
    background: #a60cc2;
    border-radius: 20px;
    margin-top: 10px;
  }
  a {
    margin: 0 0.2em;
    color: #fff;
    font-size: 32px;
  }
  @media screen and (min-width: 500px) {
    display:flex;
    .social{
      width: 40vw;
      margin:0 10px;
    }
  }
  @media screen and (min-width: 768px) {
    .social{
      width: 30vw;
    }
  }
  @media screen and (min-width: 1080px) {
    display:inline-flex;
    .social{
      width: 18vw;
      margin:10px 0.5em;
      padding: 0.2em 0.2em;
    }
  }
`;
function ExLinkRedSocial() {
  return (
    <LinkRedSocialStyled>
      <div className="social">
        Comparte:
        <a
          rel="noopener noreferrer"
          href="http://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fjesusexebio.com"
          target="_blank"
        >
          <FacebookStyled />
        </a>
        <a
          rel="noopener noreferrer"
          href="http://twitter.com/share?url=http%3A%2F%2Fjesusexebio.com"
          target="_blank"
        >
          <TwitterStyled />
        </a>
      </div>
      <div className="social">
        Sigueme:
        <a
          rel="noopener noreferrer"
          href="https://www.instagram.com/?hl=es-la/@jmexebioc"
          target="_blank"
        >
          <InstagramStyled />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCzPkCY1p6_TdET1tWuUvVwA?view_as=subscriber"
          target="_blank"
        >
          <YoutubeStyled />
        </a>
      </div>
    </LinkRedSocialStyled>
  );
}

export default ExLinkRedSocial;

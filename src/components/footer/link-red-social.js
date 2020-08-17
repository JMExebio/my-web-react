import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from "../../static/img/red-social/icon-facebook.svg";
import { ReactComponent as Twitter } from "../../static/img/red-social/icon-twitter.svg";
import { ReactComponent as Instagram } from "../../static/img/red-social/icon-instagram.svg";
import { ReactComponent as Youtube } from "../../static/img/red-social/icon-youtube.svg";
import styled from "styled-components";
const FacebookStyled = styled(Facebook)`
  &:hover {
    
    transform: translateY(-70%);
    transition: all 0.5s;
    path{
        fill: #3b5998;
    }
  }
`;
const TwitterStyled = styled(Twitter)`
  &:hover {
    transform: translateY(-70%);
    transition: all 0.5s;
    path{
        fill: #1ca0f2;
    }
  }
`;
const InstagramStyled = styled(Instagram)`
  &:hover {
    transform: translateY(-70%);
    transition: all 0.5s;
    path{
        fill: url(#paint0_linear);
    }
  }
`;
const YoutubeStyled = styled(Youtube)`
  &:hover {
    transform: translateY(-70%);
    transition: all 0.5s;
    path{
        fill: #c4032a;
    }
  }
`;
const LinkRedSocialStyled = styled.div`
  display: flex;
  padding: 1em;
  a {
    margin: 0.5em;
    color: #fff;
    font-size: 36px;
  }
`;
function LinkRedSocial({ href, name }) {
  return (
    <LinkRedSocialStyled>
      <Link to="/">
        <FacebookStyled />
      </Link>
      <Link to="/">
        <TwitterStyled />
      </Link>
      <Link to="/">
        <InstagramStyled />
      </Link>
      <Link to="/">
        <YoutubeStyled />
      </Link>
    </LinkRedSocialStyled>
  );
}

export default LinkRedSocial;

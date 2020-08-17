import React from "react";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as IconHamburge } from "../../static/img/hambur-close/icon-hamburge.svg";
import { ReactComponent as IconLine } from "../../static/img/hambur-close/icon-line.svg";
import styled from "styled-components";
import LinkNavbar from "./link-navbar";
import MenuIcon from "./menu-icon";

const MenuStyled = styled.div`
  .menu {
    display: none;
    list-style: none;
    margin: 0;
    padding: 0;
    font-weight: 700;
    z-index: 3;
    &-checkbox {
      display: none;
      &:checked {
        & ~ .menu {
          display: block;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          height: 252px;
          background: rgba(0, 0, 0, 0.8);
          border-radius: 20px;
          a {
            display: block;
            text-align: center;
            flex: 1;
          }
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    .menu {
      display: inline-flex;
      &-button {
        display: none;
      }
    }
  }
`;

function Menu() {
  return (
    <MenuStyled>
      <input type="checkbox" id="menu" className="menu-checkbox" />
      <ul className="menu">
        <LinkNavbar>Inicio</LinkNavbar>
        <LinkNavbar>Aritmética</LinkNavbar>
        <LinkNavbar>Física</LinkNavbar>
      </ul>
      <label htmlFor="menu" className="menu-button">
        <MenuIcon />
      </label>
    </MenuStyled>
  );
}

export default withRouter(Menu);

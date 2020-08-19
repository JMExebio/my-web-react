import React from "react";
import { withRouter } from "react-router-dom";
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
    &-item {
      display: flex;
      align-items: center;
    }
    &-checkbox {
      display: none;
      &:checked {
        & ~ .menu {
          display: block;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          height: 100vh;
          /* border-radius: 20px; */
          li {
            &:first-of-type a {
              border-radius: 0.5em 0.5em 0 0;
            }
            &:last-of-type a {
              border-radius: 0 0 0.5em 0.5em;
            }
          }
          a {
            background: rgba(0, 0, 0, 0.8);
            display: block;
            text-align: center;
            flex: 1;
          }
        }
      }
    }
  }
`;

function Menu() {
  return (
    <MenuStyled>
      <input type="checkbox" id="menu" className="menu-checkbox" />
      <ul className="menu">
        <LinkNavbar href="#1">Álgebra</LinkNavbar>
        <LinkNavbar href="#2">Aritmética</LinkNavbar>
        <LinkNavbar href="#3">Física</LinkNavbar>
        <LinkNavbar href="#4">Química</LinkNavbar>
        <LinkNavbar href="#5">Geométria</LinkNavbar>
        <LinkNavbar href="#6">Trigonométria</LinkNavbar>
      </ul>
      <label htmlFor="menu" className="menu-button">
        <MenuIcon />
      </label>
    </MenuStyled>
  );
}

export default withRouter(Menu);

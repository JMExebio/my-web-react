import React, { useState, useEffect, useCallback } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ExLinkNavbar from "./ex-link-navbar";
import ExMenuIcon from "./ex-icon-menu";
import getCourses from "../../redux/actions/course-action";
const MenuStyled = styled.div`
  .menu {
    max-width: 400px;
    width: 100%;
    display: ${({ toggle }) => (toggle === "default" ? "none" : "block")};
    list-style: none;
    margin: 0;
    padding: 0;
    font-weight: 700;
    position: absolute;
    top: 100%;
    /* left: 0; */
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
    z-index: 3;
    &-button {
      width: 24px;
      padding:10px
    }
    &-item {
      display: flex;
      align-items: center;
    }
  }
  @media screen and (min-width: 768px) {
    margin-right: 40px;
  }
`;
function ExMenu() {
  const [iconStatus, setIconStatus] = useState("default");

  const dispatch = useDispatch();
  const courses = useSelector((state) => state.Courses);
  const stableDispatch = useCallback(dispatch, []);
  const toggle = () => {
    iconStatus === "default" ? setIconStatus("open") : setIconStatus("default");
  };
  useEffect(() => {
    stableDispatch(getCourses());
  }, [stableDispatch]);
  return (
    <MenuStyled toggle={iconStatus}>
      <ul className="menu" onClick={toggle}>
        {courses.Courses.map((item, index) => (
          <ExLinkNavbar href={item.id} key={index}>
            {item.title}
          </ExLinkNavbar>
        ))}
      </ul>
      <div  className="menu-button">
        <ExMenuIcon toggle={toggle} iconStatus={iconStatus} />
      </div>
    </MenuStyled>
  );
}

export default withRouter(ExMenu);

import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import ExWrapper from "../ex-wrapper";
import ExCardThemes from "./ex-card-themes";
import { useDispatch, useSelector } from "react-redux";
import getCourses from "../../redux/actions/course-action";
import getThemes from "../../redux/actions/themes-action";
const CourseStyled = styled.section`
  position: relative;
  width: 100%;
  background: linear-gradient(90deg, #140f34 0%, #30193f 100%);
  .title-h2 {
    text-align: center;
    font-size: 28px;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: ${({ color1 }) => color1};
    margin: 0;
    padding: 0.5em 0;
  }
  .course {
    &-grid {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(auto-fit, minmax(320px,1fr));
      grid-row-gap: 1em;
      align-items: center;
      padding-bottom: 1em;
      margin: auto;
    }
  }
  @media screen and (min-width: 768px) {
    .title-h2 {
      font-size: 36px;
    }
  }
  @media screen and (min-width: 1024px) {
    .title-h2 {
      font-size: 48px;
    }
  }
`;

function ExCourse() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.Courses);
  const themes = useSelector((state) => state.Themes);
  const stableDispatch = useCallback(dispatch, []);
  useEffect(() => {
    stableDispatch(getCourses());
    stableDispatch(getThemes());
  }, [stableDispatch]);

  return courses.Courses.map((course, index) => (
    <CourseStyled id={`#${course.id}`} color1={course.color1} key={index}>
      <ExWrapper>
        <h2 className="title-h2">{course.title}</h2>
        <div className="course-grid">
          {themes.Themes.filter((them) => them.courseID === course.id).map(
            (theme, index) => (
              <ExCardThemes
                color1={course.color1}
                color2={course.color2}
                color3={course.color3}
                key={index}
                themeID={theme.id}
                titleTheme={theme.title}
                imgTheme={theme.imgCardURL}
              />
            )
          )}
        </div>
      </ExWrapper>
    </CourseStyled>
  ));
}
export default ExCourse;

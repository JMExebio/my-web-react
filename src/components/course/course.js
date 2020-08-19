import React from "react";
import styled from "styled-components";
import Wrapper from "../wrapper";
import CardThemes from "./card-themes";
const CourseStyled = styled.section`
  position: relative;
  width: 100%;
  background: linear-gradient(90deg, #140f34 0%, #30193f 100%);
  padding-bottom: 0em;
  margin:auto;
  .title-h2 {
    text-align: center;
    font-size: 36px;
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
      grid-template-columns: 1fr;
      grid-row-gap: 2em;
      align-items: center;
      padding-bottom: 5em;
      margin:auto;
    }
  }
  @media screen and (min-width: 768px) {
    .course {
      &-grid {
        grid-template-columns: 1fr 1fr;
      }
    }
  }
  @media screen and (min-width: 1080px) {
    .course {
      &-grid {
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  }
`;

const listCourse = [
  {
    id: 1,
    title: "Aritmética",
    color1: "#F3C72C",
    color2: "#2CF3C7",
    color3: "#BBF32C",
    imgCourse: "./img/card-arit.svg",
    themes: [
      {
        id: 1,
        title: "Razones y Proporciones",
        imgTheme: "./img/card-raz-prop.svg",
      },
      {
        id: 2,
        title: "Reparto Proporcional",
        imgTheme: "./img/card-raz-prop.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Álgebra",
    color1: "#FA0A0A",
    color2: "#82FA0A",
    color3: "#FA820A",
    imgCourse: "./img/card-arit.svg",
    themes: [
      {
        id: 1,
        title: "Razones y Proporciones",
        imgTheme: "./img/card-raz-prop.svg",
      },
      {
        id: 2,
        title: "Reparto Proporcional",
        imgTheme: "./img/card-raz-prop.svg",
      },
    ],
  },
  {
    id: 3,
    title: "R.Matemático",
    color1: "#E720D4",
    color2: "#E79720",
    color3: "#E72070",
    imgCourse: "./img/card-arit.svg",
    themes: [
      {
        id: 1,
        title: "Razones y Proporciones",
        imgTheme: "./img/card-raz-prop.svg",
      },
      {
        id: 2,
        title: "Reparto Proporcional",
        imgTheme: "./img/card-raz-prop.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Física",
    color1: "#0A1CFA",
    color2: "#FA0A94",
    color3: "#700AFA",
    imgCourse: "./img/card-arit.svg",
    themes: [
      {
        id: 1,
        title: "Razones y Proporciones",
        imgTheme: "./img/card-raz-prop.svg",
      },
      {
        id: 2,
        title: "Reparto Proporcional",
        imgTheme: "./img/card-raz-prop.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Química",
    color1: "#28DA10",
    color2: "#5D10DA",
    color3: "#10DA5D",
    imgCourse: "./img/card-arit.svg",
    themes: [
      {
        id: 1,
        title: "Razones y Proporciones",
        imgTheme: "./img/card-raz-prop.svg",
      },
      {
        id: 2,
        title: "Reparto Proporcional",
        imgTheme: "./img/card-raz-prop.svg",
      },
    ],
  },
];
function Course() {
  return listCourse.map((course) => {
    const idSal = `#${course.id}`;
    return (
      <CourseStyled id={idSal} color1={course.color1} key={course.id}>
        <Wrapper>
          <h2 className="title-h2">{course.title}</h2>
          <div className="course-grid">
            {course.themes.map((theme) => (
              <CardThemes
                color1={course.color1}
                color2={course.color2}
                color3={course.color3}
                key={theme.id}
                titleTheme={theme.title}
                imgTheme={theme.imgTheme}
              />
            ))}
          </div>
        </Wrapper>
      </CourseStyled>
    );
  });
}
export default Course;

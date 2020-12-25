import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExHeader from "../components/navbar/ex-header";
import ExHero from "../components/baner/ex-hero";
import ExCourse from "../components/courses/ex-course";
import ExScrollHandle from "../components/ex-scroll-handle";
import ExFooter from "../components/footer/ex-footer";
import getCourses from "../redux/actions/course-action";
import getThemes from "../redux/actions/themes-action";
import ExLoader from "../components/ex-loader";
import ExWhatsapp from "../components/whatsapp/ex-whatsapp";

function ExHome() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.Courses);
  const themes = useSelector((state) => state.Themes);
  const stableDispatch = useCallback(dispatch, []);
  useEffect(() => {
    stableDispatch(getCourses());
    stableDispatch(getThemes());
  }, [stableDispatch]);

  return (
    <>
      {courses.loading && themes.loading && <ExLoader />}
      {courses.Courses.length>=1 && <><ExScrollHandle />
      <ExWhatsapp />
      <ExHeader />
      <ExHero />
      <ExCourse />
      <ExFooter />
      </>
      } 
    </>
  );
}

export default ExHome;

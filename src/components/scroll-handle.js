import { useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";

const ScrollHandler = () => {
  const location = useLocation();
  useEffect(() => {
    const element = document.getElementById(location.hash);
    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? element.offsetTop - 100 : 0,
      });
    }, 200);
  }, [location.hash]);

  return null;
};

export default withRouter(ScrollHandler);

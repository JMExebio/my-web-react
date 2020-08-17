import React from "react";
import Header from "../components/navbar/header";
import HeroThemes from "../components/themes/hero-theme";
import ThemeTeoria from "../components/themes/theme-teoria";
import ThemeProb from "../components/themes/theme-prob";
import Footer from "../components/footer/footer";

function ThemesView() {
  return (
    <div>
      <Header />
      <HeroThemes />
      <ThemeTeoria />
      <ThemeProb />
      <Footer />
    </div>
  );
}

export default ThemesView;

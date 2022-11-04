import { Fragment, useEffect, useState } from "react";
import { Container } from "@mui/material";
import About from "../components/About";
import Content from "../components/Content";
import Header from "../components/Header";
import Line from "../components/Line";
import Work from "../components/Work";
import Skill from "../components/Skill";
import Member from "../components/Member";
import Footer from "../components/Footer";
import ProjectOrder from "../components/ProjectOrder";
import Fixed from "../components/Fixed";

const App = () => {
  return (
    <Fragment>
      <Fixed />
      <Header />
      <Container maxWidth="lg" className="container-1300">
        <Content />
        <About />
        <Work />
        <Skill />
        <Member />
        <ProjectOrder />
        <Footer />
      </Container>
      <Line zIndex="-1" height="100%" />
    </Fragment>
  );
};
export default App;

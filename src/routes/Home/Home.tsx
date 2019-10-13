import React, { FC, RefObject, useRef } from 'react';
import { Classes } from "jss";
import { FiGithub, FiLinkedin, FiChevronDown } from "react-icons/fi";

import globalStyles from "../../styles";
import Text from "../../components/Text";
import Link from "../../components/Link";
import Button from "../../components/Button";
import Projects from "../Projects";

interface IHomeProps {
  classes: Classes
}

const Home: FC<IHomeProps> = ({ classes = {} }) => {
  const scrollToRef = (ref: RefObject<HTMLElement>) => (ref && ref.current)
    && ref.current.scrollIntoView({ behavior: "smooth", block: "end" })
  const projectsRef = useRef(null)

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <Link className={classes.external} to="https://github.com/jakeswork" icon={<FiGithub />} />
        <Link className={classes.external} to="https://www.linkedin.com/in/jakepflynn/" icon={<FiLinkedin />} />
      </header>
      <main className={globalStyles().fullScreen}>
        <Text h1>Hi, I'm Jake <span role="img" aria-label="waving-hand">👋</span></Text>
        <Text h2>I'm a full stack JavaScript developer.</Text>
        <Button
          flat
          icon={<FiChevronDown />}
          onClick={() => scrollToRef(projectsRef)}
          className={classes.anchorBottom}
        >
          View Projects
        </Button>
      </main>
      <div ref={projectsRef}>
        <Projects />
      </div>
    </div>
  );
}

export default Home;

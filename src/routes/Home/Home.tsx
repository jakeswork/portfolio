import React, { FC, RefObject, useRef, useState } from "react";
import { Classes } from "jss";
import { FiGithub, FiLinkedin, FiChevronDown } from "react-icons/fi";

import globalStyles from "../../styles";
import Text from "../../components/Text";
import Link from "../../components/Link";
import Button from "../../components/Button";
import Projects from "../Projects";
import avatar from '../../images/avatar.png';
import LiveCodeBlock from './components/LiveCodeBlock';

interface IHomeProps {
  classes: Classes
}

const Home: FC<IHomeProps> = ({ classes = {} }) => {
  const [introImported, setIntroImported] = useState(false)
  const [projectsImported, setProjectsImported] = useState(false);
  const [skipIntroClicked, setSkipIntroClicked] = useState(false);
  const [introFinished, setIntroFinished] = useState(false);

  const scrollToRef = (ref: RefObject<HTMLElement>) => (ref && ref.current)
    && ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const projectsRef = useRef(null)

  const skipIntro = () => {
    setSkipIntroClicked(true)
    setIntroImported(true)
    setProjectsImported(true);
    setIntroFinished(true);
  }

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <Link className={classes.external} to="https://github.com/jakeswork" icon={<FiGithub />} />
        <Link className={classes.external} to="https://www.linkedin.com/in/jakepflynn/" icon={<FiLinkedin />} />
      </header>
      <main className={globalStyles().fullScreen}>
        {
          introImported && (
            <>
              <img src={avatar} alt="Avatar" className={classes.image} />
              <Text h1>Jake Flynn</Text>
              <Text caption>Software Engineer</Text>
            </>
          )
        }
        { !skipIntroClicked && (
          <LiveCodeBlock
            onLineTyped={(line) => {
              if (line === '    <Intro />') {
                setIntroImported(true)
              }

              if (line === '    <Projects />') {
                setProjectsImported(true)
                setIntroFinished(true)
              }
            }}
          />
        )}
        { (!introFinished) && (
          <Button flat onClick={skipIntro}>Skip Intro</Button>
        )}
        {
          projectsImported && (
            <Button
              icon={<FiChevronDown />}
              onClick={() => scrollToRef(projectsRef)}
              className={classes.anchorBottom}
            >
              Projects
            </Button>
          )
        }
      </main>
      <div ref={projectsRef}>
        { projectsImported && <Projects /> } 
      </div>
    </div>
  );
}

export default Home;

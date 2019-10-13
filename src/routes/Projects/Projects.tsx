import React, { FC } from 'react';
import { Classes } from "jss";
import classNames from "classnames";

import globalStyles from "../../styles";
import Text from "../../components/Text";
import RebrewCard from './components/RebrewCard';

interface IProjectsProps {
  classes: Classes<"root" | "cardsContainer">
}

const Projects: FC<IProjectsProps> = ({ classes = {} }) => (
  <main className={classNames(globalStyles().fullScreen, classes.root)}>
    <Text light h1>Projects</Text>
    <div className={classes.cardsContainer}>
      <RebrewCard />
    </div>
  </main>
);

export default Projects;

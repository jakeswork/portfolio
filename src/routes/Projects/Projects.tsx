import React, { FC } from 'react';
import { Classes } from "jss";
import classNames from "classnames";

import globalStyles from "../../styles";
import Text from "../../components/Text";
import RebrewCard from './components/RebrewCard';
import KuedCard from "./components/KuedCard";
import PlaylisterCard from "./components/PlaylisterCard";
import TheSignLifeCard from "./components/TheSignLifeCard";

interface IProjectsProps {
  classes: Classes<"root" | "cardsContainer">
}

const Projects: FC<IProjectsProps> = ({ classes = {} }) => (
  <main className={classNames(globalStyles().fullScreen, classes.root)}>
    <Text light h1>Projects</Text>
    <div className={classes.cardsContainer}>
      <RebrewCard />
      <KuedCard />
      <PlaylisterCard />
      <TheSignLifeCard />
    </div>
  </main>
);

export default Projects;

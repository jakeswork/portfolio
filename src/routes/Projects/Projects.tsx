import React, { FC } from 'react';
import { Classes } from "jss";

import Text from "../../components/Text";
import RebrewCard from './components/RebrewCard';
import KuedCard from "./components/KuedCard";
import PlaylisterCard from "./components/PlaylisterCard";
import TheSignLifeCard from "./components/TheSignLifeCard";

interface IProjectsProps {
  classes: Classes<"root" | "cardsContainer">
}

const Projects: FC<IProjectsProps> = ({ classes = {} }) => (
  <main className={classes.root}>
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

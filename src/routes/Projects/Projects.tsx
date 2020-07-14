import React, { FC } from 'react';
import { Classes } from "jss";
import Tooltip from 'react-tooltip';

import { Text, Link } from '../../components';
import ProjectCard from './components/ProjectCard';

import appetiteImg from '../../images/appetite.jpg';
import rankerImg from '../../images/ranker.jpg';
import kuedImg from '../../images/kued.jpg';
import rebrewImg from '../../images/rebrew.jpg';
import playlisterImg from '../../images/playlister.jpg';
import tslImg from '../../images/tsl.jpg';

interface IProjectsProps {
  classes: Classes<"root" | "cardsContainer" | "tooltip">
}

const Projects: FC<IProjectsProps> = ({ classes = {} }) => (
  <>
    <Tooltip effect="solid" className={classes.tooltip} place="bottom" />
    <main className={classes.root}>
      <Text light h1>Projects</Text>
      <div className={classes.cardsContainer}>
        <ProjectCard
          title="Appetite"
          url="https://appetite.vercel.app/"
          sourceUrl="https://github.com/jakeswork/appetite"
          tags={["react", "typescript", "node"]}
          imageSrc={appetiteImg}
        >
          <Text>Appetite is an app I built after countless arguments about where to eat.</Text>
          <Text>The benefit of the app can be apparent when a large group is deciding on a place to go out to eat. Each participant will select up to three of their favourite restaurants and the most appropriate selection will be presented.</Text>
          <Text>
            On the back-end there is a proxy API to get the local restaurant data from&nbsp;
            <Link to="https://developers.zomato.com/api">this API</Link> and heavy usage of <Link to="https://socket.io/">socket.io</Link> for all things P2P.
          </Text>
          <Text caption>N.b. This server is hosted using Heroku, so it may be sleeping!</Text>
        </ProjectCard>
        <ProjectCard
          title="Ranker"
          url="https://jakeswork.github.io/ranker/"
          sourceUrl="https://github.com/jakeswork/ranker"
          tags={["react", "typescript"]}
          imageSrc={rankerImg}
        >
          <Text>The motivation behind Ranker is to provide insight to players on how long it will take to achieve a certain goal.</Text>
          <Text>These calculations were previously being done by players via spreadsheets, however these required some additional knowledge which a large proportion of the player base didn't have.</Text>
          <Text>Packaging the calculations under this UI made the tool extremely user friendly.</Text>
        </ProjectCard>
        <ProjectCard
          title="Rebrew"
          url="https://rebrew.jakepflynn.now.sh/"
          sourceUrl="https://github.com/jakeswork/rebrew-server"
          tags={["react", "node", "typescript", "graphql"]}
          imageSrc={rebrewImg}
        >
          <Text>Rebrew is an application I created to explore using TypeScript full stack.</Text>
          <Text>
            On the back-end there is a GraphQL API built with Prisma 2. To get the beer data, I consumed&nbsp;
            <Link to="https://punkapi.com/documentation/v2">this API</Link> and extended it to support accounts.
          </Text>
          <Text>The main purpose of the app is to lookup/leave a review for a beer.</Text>
          <Text caption>Please note that the public version of this app is using a sandbox plan for data storage, as such only 1 pool may be open at a time!</Text>
        </ProjectCard>
        <ProjectCard
          title="Kued"
          url="https://kued.netlify.app/"
          sourceUrl="https://github.com/jakeswork/kued-api"
          tags={["react", "node"]}
          imageSrc={kuedImg}
        >
          <Text>Kued was an application I built for an online gaming community.</Text>
          <Text>The goal was to be able to get real-time information of which teams were currently playing in the game.</Text>
          <Text>Since there was no open API for this sort of data, and I had no control over it, I decided to make a web scraper that would amalgamate the data I could get my hands on so that it could be fit for purpose.</Text>
        </ProjectCard>
        <ProjectCard
          title="Playlister"
          url="https://authentication-api.herokuapp.com/"
          sourceUrl="https://github.com/jakeswork/auth-api"
          tags={["react"]}
          imageSrc={playlisterImg}
        >
          <Text>Playlister was the first application I wrote to explore React.</Text>
          <Text>It's a simple client that consumes Spotify's OAuth2 API and renders the logged in user's playlists (including the top 5 songs in those playlists).</Text>
          <Text>The main outcome of this project was to help me learn more about React.</Text>
        </ProjectCard>
        <ProjectCard
          title="The Sign Life"
          url="http://www.thesignlife.co.uk/"
          tags={["html", "css"]}
          imageSrc={tslImg}
        >
          <Text>The Sign Life is a local company that provides services to Deaf people.</Text>
          <Text>They approached me to help them extend their reach to the wider community via a website.</Text>
          <Text>This was my first ever coommercial freelance project (2016), so I like to keep it here as something to look back on.</Text>
      </ProjectCard>
      </div>
    </main>
  </>
);

export default Projects;

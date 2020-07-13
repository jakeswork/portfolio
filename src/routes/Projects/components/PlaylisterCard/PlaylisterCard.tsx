import React, { FC, HTMLAttributes } from "react";
import { FiCode, FiExternalLink } from "react-icons/fi";
import { Classes } from 'jss';

import Card from "../../../../components/Card";
import Text from "../../../../components/Text";
import Link from "../../../../components/Link";
import ReactIcon from "../ReactIcon";

interface IPlaylisterCardProps extends HTMLAttributes<HTMLDivElement> {
  classes: Classes<"root" | "linksWrapper">;
}

const PlaylisterCard: FC<IPlaylisterCardProps> = ({ classes }) => (
  <Card className={classes.root}>
    <Text h2>Playlister <span role="img" aria-label="headphones">🎧</span></Text>
    <Text>Playlister was one of the first applications I wrote to explore React.</Text>
    <Text>It's a simple client that consumes Spotify's OAuth2 API and renders the logged in user's playlists (including the top 5 songs in those playlists).</Text>
    <Text>The main outcome of this project was to help me learn more about React as well as OAuth2.</Text>
    <div>
      <ReactIcon />
    </div>
    <div className={classes.linksWrapper}>
      <Link to ="https://authentication-api.herokuapp.com/" icon={<FiExternalLink />}>
        Open
      </Link>
      <Link to="https://github.com/jakeswork/auth-api" icon={<FiCode />}>
        Source
      </Link>
    </div>
  </Card>
);

export default PlaylisterCard;

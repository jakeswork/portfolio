import React, { FC, HTMLAttributes } from "react";
import { FiCode, FiExternalLink } from "react-icons/fi";
import { Classes } from "jss";

import Card from "../../../../components/Card";
import Link from "../../../../components/Link";
import Text from "../../../../components/Text";
import ReactIcon from "../ReactIcon";
import NodeIcon from "../NodeIcon";

interface IKuedCardProps extends HTMLAttributes<HTMLDivElement> {
  classes: Classes<"root" | "linksWrapper">;
}

const KuedCard: FC<IKuedCardProps> = ({ classes }) => (
  <Card className={classes.root}>
    <Text h2>Kued <span role="img" aria-label="swords">⚔️</span></Text>
    <Text>Kued was an application I built for an online gaming community.</Text>
    <Text>The goal was to be able to get real-time information of which teams were currently playing in the game.</Text>
    <Text>Since there was no open API for this sort of data, and I had no control over it, I decided to make a web scraper that would amalgamate the data I could get my hands on so that it could be fit for purpose.</Text>
    <div>
      <ReactIcon />
      <NodeIcon />
    </div>
    <div className={classes.linksWrapper}>
      <Link to="https://kued.ml/" icon={<FiExternalLink />}>
        Open
      </Link>
      <Link to="https://github.com/jakeswork/kued-api" icon={<FiCode />}>
        Source
      </Link>
    </div>
  </Card>
);

export default KuedCard;

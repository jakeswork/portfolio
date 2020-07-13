import React, { FC, HTMLAttributes } from "react";
import { FiCode, FiExternalLink } from "react-icons/fi";
import { Classes } from 'jss';

import Card from "../../../../components/Card";
import Text from "../../../../components/Text";
import Link from "../../../../components/Link";
import ReactIcon from "../ReactIcon";
import TypeScriptIcon from "../TypeScriptIcon";

interface IRankerCardProps extends HTMLAttributes<HTMLDivElement> {
  classes: Classes<"root" | "linksWrapper">;
}

const RankerCard: FC<IRankerCardProps> = ({ classes }) => (
  <Card className={classes.root}>
    <Text h2>Ranker <span role="img" aria-label="calendar">🗓️</span></Text>
    <Text>
      The motivation behind Ranker is to provide insight to players on how long it will take
      to achieve a certain goal.
    </Text>
    <Text>
      These calculations were previously being done by players via spreadsheets, however these required some 
      additional knowledge which a large proportion of the player base didn't have.
    </Text>
    <Text>
      Packaging the calculations under this UI made the tool extremely user friendly.
    </Text>
    <div>
      <ReactIcon />
      <TypeScriptIcon />
    </div>
    <div className={classes.linksWrapper}>
      <Link to ="https://jakeswork.github.io/ranker/" icon={<FiExternalLink />}>
        Open
      </Link>
      <Link to="https://github.com/jakeswork/ranker" icon={<FiCode />}>
        Source
      </Link>
    </div>
  </Card>
);

export default RankerCard;

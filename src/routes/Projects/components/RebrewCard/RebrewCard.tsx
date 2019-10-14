import React, { FC, HTMLAttributes } from "react";
import { FiCode, FiExternalLink } from "react-icons/fi";
import { Classes } from 'jss';

import Card from "../../../../components/Card";
import Text from "../../../../components/Text";
import Link from "../../../../components/Link";
import ReactIcon from "../ReactIcon";
import TypeScriptIcon from "../TypeScriptIcon";
import GraphQLIcon from "../GraphQLIcon";
import NodeIcon from "../NodeIcon";

interface IRebrewCardProps extends HTMLAttributes<HTMLDivElement> {
  classes: Classes<"root" | "linksWrapper">;
}

const RebrewCard: FC<IRebrewCardProps> = ({ classes }) => (
  <Card className={classes.root}>
    <Text h2>Rebrew <span role="img" aria-label="beers">🍻</span></Text>
    <Text>Rebrew is an application I created to explore using TypeScript full stack.</Text>
    <Text>
      On the back-end there is a GraphQL API built with Prisma 2. To get the beer data, I consumed&nbsp;
      <Link to="https://punkapi.com/documentation/v2">this API</Link> and extended it to support accounts.
    </Text>
    <Text>
      The main purpose of the app is to lookup/leave a review for a beer.
    </Text>
    <Text caption>Please note that the public version of this app is using a sandbox plan for data storage, as such only 1 pool may be open at a time!</Text>
    <div>
      <ReactIcon />
      <TypeScriptIcon />
      <GraphQLIcon />
      <NodeIcon />
    </div>
    <div className={classes.linksWrapper}>
      <Link to ="https://rebrew.jakepflynn.now.sh/" icon={<FiExternalLink />}>
        Open App
      </Link>
      <Link to="https://github.com/jakeswork/rebrew-server" icon={<FiCode />}>
        View Source
      </Link>
    </div>
  </Card>
);

export default RebrewCard;

import React, { FC, HTMLAttributes } from "react";
import { FiCode, FiExternalLink } from "react-icons/fi";
import { Classes } from 'jss';

import Card from "../../../../components/Card";
import Text from "../../../../components/Text";
import Link from "../../../../components/Link";
import ReactIcon from "../ReactIcon";
import TypeScriptIcon from "../TypeScriptIcon";
import NodeIcon from "../NodeIcon";

interface IAppetiteCardProps extends HTMLAttributes<HTMLDivElement> {
  classes: Classes<"root" | "linksWrapper">;
}

const AppetiteCard: FC<IAppetiteCardProps> = ({ classes }) => (
  <Card className={classes.root}>
    <Text h2>Appetite <span role="img" aria-label="face savouring food">😋</span></Text>
    <Text>Appetite is an app I built after countless arguments about where to eat.</Text>
    <Text>
      The benefit of the app can be apparent when a large group is deciding on a place to go out to eat.
      Each participant will select up to three of their favourite restaurants and the most appropriate selection will be presented.
    </Text>
    <Text>
      On the back-end there is a proxy API to get the local restaurant data from&nbsp;
      <Link to="https://developers.zomato.com/api">this API</Link> and heavy usage of <Link to="https://socket.io/">socket.io</Link> for all things P2P.
    </Text>
    <Text caption>N.b. This server is hosted using Heroku, so it may be sleeping!</Text>
    <div>
      <ReactIcon />
      <TypeScriptIcon />
      <NodeIcon />
    </div>
    <div className={classes.linksWrapper}>
      <Link to ="https://appetite.vercel.app/" icon={<FiExternalLink />}>
        Open
      </Link>
      <Link to="https://github.com/jakeswork/appetite" icon={<FiCode />}>
        Source
      </Link>
    </div>
  </Card>
);

export default AppetiteCard;

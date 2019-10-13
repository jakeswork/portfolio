import React, { FC, HTMLAttributes } from "react";
import { FiExternalLink } from "react-icons/fi";
import { Classes } from 'jss';

import Card from "../../../../components/Card";
import Text from "../../../../components/Text";
import Link from "../../../../components/Link";
import HTMLIcon from "../HTMLIcon";
import CSSIcon from "../CSSIcon";

interface ITheSignLifeCardProps extends HTMLAttributes<HTMLDivElement> {
  classes: Classes<"root" | "linksWrapper">;
}

const TheSignLifeCard: FC<ITheSignLifeCardProps> = ({ classes }) => (
  <Card className={classes.root}>
    <Text h2>The Sign Life <span role="img" aria-label="hands">🤲</span></Text>
    <Text>TheSignLife is a local company that provides services to Deaf people.</Text>
    <Text>They approached me to help them extend their reach to the wider community.</Text>
    <Text>This was my first freelance project (2016), so I like to keep it here as something to look back on.</Text>
    <div>
      <HTMLIcon />
      <CSSIcon />
    </div>
    <div className={classes.linksWrapper}>
      <Link to ="http://www.thesignlife.co.uk/" icon={<FiExternalLink />}>
        Visit Website
      </Link>
    </div>
  </Card>
);

export default TheSignLifeCard;

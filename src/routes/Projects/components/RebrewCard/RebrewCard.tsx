import React, { FC } from "react";
import { FiCode, FiChrome } from "react-icons/fi";

import Card from "../../../../components/Card";
import Button from "../../../../components/Button";
import Text from "../../../../components/Text";
import Link from "../../../../components/Link";
import ReactIcon from "../ReactIcon";
import TypeScriptIcon from "../TypeScriptIcon";
import GraphQLIcon from "../GraphQLIcon";
import NodeIcon from "../NodeIcon";

const RebrewCard: FC = () => (
  <Card>
    <Text h2>Rebrew</Text>
    <Text>Rebrew is an application I created to explore using TypeScript full stack.</Text>
    <Text>
      On the back-end there is a GraphQL API built with Nexus & Prisma 2. To get the data, I consumed&nbsp;
      <Link to="https://punkapi.com/documentation/v2">a third party API</Link> and extended it to support user accounts.
    </Text>
    <Text>
      The purpose of the app is to search for a beer and leave a rating/review. Simples!
    </Text>
    <div>
      <ReactIcon />
      <TypeScriptIcon />
      <GraphQLIcon />
      <NodeIcon />
    </div>
    <Button icon={<FiChrome />}>
      Open Rebrew
    </Button>
    <Button secondary icon={<FiCode />}>
      View Source
    </Button>
  </Card>
);

export default RebrewCard;

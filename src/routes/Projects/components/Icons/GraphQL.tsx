import React from 'react';

import Pill from "../../../../components/Pill";
import Text from "../../../../components/Text";
import graphQLIcon from "../../../../images/graphQLIcon.png";

export default () => (
  <Pill background="#ffc3eb" icon={<img alt="GraphQL Logo" src={graphQLIcon} style={{ width: 22.5 }} />} >
    <Text style={{ verticalAlign: 'middle' }} caption>GraphQL</Text>
  </Pill>
);

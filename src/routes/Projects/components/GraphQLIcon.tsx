import React from 'react';

import Pill from "../../../components/Pill";
import Text from "../../../components/Text";
import graphQLIcon from "../../../images/graphQLIcon.png";

export default () => (
  <Pill background="#202020" icon={<img alt="GraphQL Logo" src={graphQLIcon} style={{ width: 22.5 }} />} >
    <Text style={{ verticalAlign: 'middle' }} light caption>GraphQL</Text>
  </Pill>
);

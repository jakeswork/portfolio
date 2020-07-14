import React from 'react';

import Pill from "../../../../components/Pill";
import Text from "../../../../components/Text";
import htmlIcon from "../../../../images/htmlIcon.png";

export default () => (
  <Pill background="#ffd2c1" icon={<img alt="GraphQL Logo" src={htmlIcon} style={{ width: 22.5 }} />} >
    <Text style={{ verticalAlign: 'middle' }} caption>HTML5</Text>
  </Pill>
);

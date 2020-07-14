import React from 'react';

import Pill from "../../../../components/Pill";
import Text from "../../../../components/Text";
import reactIcon from "../../../../images/reactIcon.png";

export default () => (
  <Pill background="#20232a" icon={<img alt="React Logo" src={reactIcon} style={{ width: 32 }} />} >
    <Text style={{ verticalAlign: 'middle' }} light caption>React</Text>
  </Pill>
);

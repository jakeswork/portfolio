import React from 'react';

import Pill from "../../../components/Pill";
import Text from "../../../components/Text";
import nodeIcon from "../../../images/nodeIcon.png";

export default () => (
  <Pill background="#eaf5de" icon={<img alt="NodeJS Logo" src={nodeIcon} style={{ width: 22.5 }} />} >
    <Text style={{ verticalAlign: 'middle' }} caption>Node</Text>
  </Pill>
);

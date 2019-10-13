import React from 'react';

import Pill from "../../../components/Pill";
import Text from "../../../components/Text";
import nodeIcon from "../../../images/nodeIcon.png";

export default () => (
  <Pill background="#333" icon={<img alt="NodeJS Logo" src={nodeIcon} style={{ width: 22.5 }} />} >
    <Text style={{ verticalAlign: 'middle' }} light caption>Node</Text>
  </Pill>
);

import React from 'react';

import Pill from "../../../components/Pill";
import Text from "../../../components/Text";
import typescriptIcon from "../../../images/typescriptIcon.png";

export default () => (
  <Pill background="#00000008" icon={<img alt="TypeScript Logo" src={typescriptIcon} style={{ width: 22.5 }} />} >
    <Text style={{ verticalAlign: 'middle' }} caption>TypeScript</Text>
  </Pill>
);

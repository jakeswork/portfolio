import React from 'react';

import Pill from "../../../components/Pill";
import Text from "../../../components/Text";
import cssIcon from "../../../images/cssIcon.png";

export default () => (
  <Pill background="#92c0f7" icon={<img alt="GraphQL Logo" src={cssIcon} style={{ width: 22.5 }} />} >
    <Text style={{ verticalAlign: 'middle' }} caption>CSS3</Text>
  </Pill>
);

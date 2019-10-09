import React, { FC } from 'react';
import { Classes } from "jss";

interface IHomeProps {
  classes: Classes
}

const Home: FC<IHomeProps> = () => (
  <div>
    Hello, World
  </div>
);

export default Home;

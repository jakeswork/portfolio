import React, { FC, HTMLAttributes, useState } from "react";
import { FiCode, FiExternalLink } from "react-icons/fi";
import { Classes } from 'jss';
import cx from 'classnames';

import { Card, Text, Link, Button } from '../../../../components';

interface IProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  classes: Classes<"root" | "linksWrapper" | "body" | "image" | "descriptionWrapper" | "fadeOut" | "descriptionWrapperOpen" | "readMoreButton">;
  tags: Array<"node" | "react" | "typescript" | "graphql" | "html" | "css">;
  imageSrc: string;
  url: string;
  sourceUrl?: string;
  title: string;
}

const ProjectCard: FC<IProjectCardProps> = ({
  classes,
  title = '',
  children,
  tags = [],
  imageSrc,
  url = '',
  sourceUrl = '',
}) => {
  const [descriptionOpen, setDescriptionOpen] = useState(false);

  return (
    <Card className={classes.root}>
      <div className={classes.image} style={{ backgroundImage: `url(${imageSrc})` }} />
      <div className={classes.body}>
        <Text h2>{title}</Text>
        { tags.map(tag => <Text caption primaryColor>#{tag} </Text>) }
        <div className={cx(classes.descriptionWrapper, {
          [classes.descriptionWrapperOpen]: descriptionOpen
        })}>
          { children }
          { !descriptionOpen && <div className={classes.fadeOut} /> }
        </div>
        {
          !descriptionOpen && (
            <Button
              flat
              onClick={() => setDescriptionOpen(true)}
              className={classes.readMoreButton}
            >
              Read More
            </Button>
          )
        }
        <div className={classes.linksWrapper}>
          { sourceUrl && (
            <Link to={sourceUrl}>
              <Button circle icon={<FiCode />} tooltip="View Source" />
            </Link>
          )}
          <Link to={url}>
            <Button circle icon={<FiExternalLink />} tooltip="Open App" />
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;

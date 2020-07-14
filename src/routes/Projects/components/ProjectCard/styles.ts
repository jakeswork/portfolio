import { Theme } from "../../../../utils/theme";

export default (theme: Theme) => ({
  root: {
    width: 360,
    padding: 0,
    textAlign: 'left',
  },
  image: {
    width: '100%',
    backgroundSize: 'cover',
    height: 240,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  body: {
    padding: 24,
  },
  linksWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: 8
  },
  descriptionWrapper: {
    margin: '16px 0',
    overflow: 'hidden',
    height: 64,
    position: 'relative',
  },
  fadeOut: {
    background: 'linear-gradient(to top, white, rgba(255, 0, 0, 0));',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  descriptionWrapperOpen: {
    height: 'auto',
    overflow: 'auto',
  },
  readMoreButton: {
    width: '100%',
    padding: 0,
    margin: '8px 0'
  },
  [theme.media.mobile as string]: {
    root: {
      width: '72%'
    }
  },
});

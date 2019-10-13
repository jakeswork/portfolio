import { Theme } from '../../../../utils/theme';

export default (theme: Theme) => ({
  root: {
    width: 540,
    textAlign: 'left'
  },
  linksWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: 8
  },
  [theme.media.mobile as any]: {
    root: {
      width: '72%'
    }
  },
});

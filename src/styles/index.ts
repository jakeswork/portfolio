import { createUseStyles } from 'react-jss';

export default createUseStyles({
  fullScreen: {
    height: 'calc(100vh - 32px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 0,
    padding: 16
  }
})

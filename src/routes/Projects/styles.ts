import { Theme } from "../../utils/theme";

export default (theme: Theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 32,
    flexDirection: 'column',
    backgroundColor: theme.colorPrimary,
  },
  cardsContainer: {
    maxWidth: 1280,
    marginTop: 32,
    textAlign: 'center'
  }
});

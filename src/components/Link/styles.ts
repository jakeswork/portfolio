import { defaultButtonStyle } from "../Button/styles";
import { Theme } from "../../utils/theme";

export default (theme: Theme) => ({
  root: {
    ...defaultButtonStyle,
    color: theme.colorPrimary,
    border: 0,
    WebkitBoxShadow: 0,
    boxShadow: 0,
    background: "transparent",
    minWidth: 0,
    padding: 0,
    margin: 0,
    '&:active': {
      color: theme.colorPrimary,
    },
    '&:focus': {
      color: theme.colorPrimary
    },
    '&:hover': {
      color: theme.colorPrimary
    }
  },
  icon: {
    fontSize: 24,
    marginLeft: 8,
    marginBottom: -4
  }
});

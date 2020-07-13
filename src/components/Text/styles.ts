import { CSSProperties } from "jss/css";

import { Theme } from "../../utils/theme";
import { ITextProps } from './Text';

const defaultStyles = (theme: Theme, light?: Boolean): CSSProperties => ({
  color: light ? theme.textWhite : theme.textPrimary,
  fontFamily: theme.fontFamily,
  fontWeight: 700,
  margin: 0,
  marginBottom: 4
});

const styles = (theme: Theme): object => ({
  h1: ({ light }: ITextProps) => ({
    ...defaultStyles(theme, light),
    fontSize: 30,
    marginBottom: 8
  }),
  h2: ({ light }: ITextProps) => ({
    ...defaultStyles(theme, light),
    fontSize: 24,
    marginBottom: 8
  }),
  h3: ({ light }: ITextProps) => ({
    ...defaultStyles(theme, light),
    fontSize: 16
  }),
  caption: ({ light }: ITextProps) => ({
    ...defaultStyles(theme, light),
    wordWrap: "break-word",
    fontSize: 12,
    letterSpacing: "0.08333333333333333em",
    marginBottom: 0,
    textTransform: "uppercase"
  }),
  p: ({ bold, light }: ITextProps) => ({
    ...defaultStyles(theme, light),
    fontSize: 16,
    fontWeight: bold ? 700 : 400,
    marginBottom: 6
  }),
  [theme.media.mobile as any]: {
    h1: {
      fontSize: 48
    },
    h2: {
      fontSize: 40
    },
  }
});

export default styles;

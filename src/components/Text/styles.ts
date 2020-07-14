import { CSSProperties } from "jss/css";

import { Theme } from "../../utils/theme";
import { ITextProps } from './Text';

const defaultStyles = (theme: Theme, props: ITextProps): CSSProperties => ({
  color: (
    props.light ? theme.textWhite :
      props.primaryColor ? theme.colorPrimary :
        theme.textPrimary
  ),
  fontFamily: theme.fontFamily,
  fontWeight: 700,
  margin: 0,
  marginBottom: 4
});

const styles = (theme: Theme): object => ({
  h1: (props: ITextProps) => ({
    ...defaultStyles(theme, props),
    fontSize: 30,
    marginBottom: 8
  }),
  h2: (props: ITextProps) => ({
    ...defaultStyles(theme, props),
    fontSize: 24,
    marginBottom: 8
  }),
  h3: (props: ITextProps) => ({
    ...defaultStyles(theme, props),
    fontSize: 16
  }),
  caption: (props: ITextProps) => ({
    ...defaultStyles(theme, props),
    wordWrap: "break-word",
    fontSize: 12,
    letterSpacing: "0.08333333333333333em",
    marginBottom: 0,
    textTransform: "uppercase"
  }),
  p: (props: ITextProps) => ({
    ...defaultStyles(theme, props),
    fontSize: 16,
    fontWeight: props.bold ? 700 : 400,
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

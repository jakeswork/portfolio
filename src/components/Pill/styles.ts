import { IPillProps } from './Pill';

export default {
  root: ({ background }: IPillProps) => ({
    backgroundColor: background,
    borderRadius: 32,
    padding: '4px 16px',
    margin: 8,
    display: 'inline-block',
    userSelect: 'none'
  }),
  icon: {
    marginLeft: 4,
    userSelect: 'none'
  }
};

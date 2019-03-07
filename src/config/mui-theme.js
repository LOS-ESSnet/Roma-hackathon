import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#e80a4d' },
  },
  typography: {
    useNextVariants: true,
  },
});

export default theme;

import { AppNavigation } from './src/core/navigation/AppRouting';
import {Provider as ThemeProvider} from 'react-native-paper';
import {  PRODUCT_LIST_PAPER_THEME } from './src/styles/themes';
import { StatusBar } from 'react-native';

function App() {
  return (
    <ThemeProvider theme={PRODUCT_LIST_PAPER_THEME}>
      <StatusBar
        barStyle='dark-content'
      />
      <AppNavigation />
    </ThemeProvider>

  );
}

export default App;

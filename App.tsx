import { registerRootComponent } from 'expo';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
// import styles from './App.style';
import theme from './src/theme/theme';
import Main from './src/Main/Main';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Main/>
    </PaperProvider>
  );
}

registerRootComponent(App);
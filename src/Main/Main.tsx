import React from 'react';
import { Text, View } from 'react-native';
import {Button} from 'react-native-paper';
import styles from './Main.style';

export default function Main() {
  return (
    <View style={styles.container}>
      <Button icon="arrow-right-drop-circle" mode="contained" onPress={() => console.log('Pressed')}>
        Start Walking.
      </Button>
    </View>
  );
}
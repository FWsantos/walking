import React from 'react';
import { Image, ScrollView, Text, TextInput, View } from 'react-native';
import styles from './App.style';

export default function App() {
  return (
    <ScrollView>
      <Text>Text.</Text>
      <View>
        <Text>More text.</Text>
        <Image 
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png'
          }}
          style={styles.catImage}
        />
      </View>
      <TextInput
        style={styles.textInput}
        defaultValue="I need text."      
      />
    </ScrollView>
  );
}
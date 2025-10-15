import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [text, setText] = useState('');

  const handleChangeText = (newText: string) => {
    setText(newText);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Hello World</Text>
        <TextInput
          value={text}
          onChangeText={handleChangeText}
          style={styles.input}
        />
        <Button title="버튼이름" onPress={() => console.log('2222')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flex: 1,
  },
  box: { backgroundColor: '' },
  text: {
    color: 'red',
    fontSize: 30,
  },
  input: {
    fontSize: 30,
  },
});

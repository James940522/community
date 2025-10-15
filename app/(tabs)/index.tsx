import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.parent}>
        <View style={styles.box}>
          <Text style={styles.text}>Hello World</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>Hello World</Text>
          <Text style={styles.text}>Hello World</Text>
          <Text style={styles.text}>Hello World</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  parent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: { backgroundColor: 'yellow' },
  box2: {
    backgroundColor: 'green',
  },
  text: {
    color: 'red',
    fontSize: 30,
  },
  input: {
    fontSize: 30,
  },
});

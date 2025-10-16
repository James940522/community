import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Mission() {
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <Box />
        <Box />
        <Box />
      </View>
      <View style={styles.container2}>
        <Box />
        <Box />
        <Box />
      </View>
      <View style={styles.container3}>
        <Box />
        <Box />
        <Box />
      </View>
    </SafeAreaView>
  );
}

function Box() {
  return <View style={styles.box} />;
}

const styles = StyleSheet.create({
  // 여기에 스타일을 추가하고, 컴포넌트에 연결해주세요.
  parent: {
    justifyContent: 'space-between',
    flex: 1,
  },
  container: { flexDirection: 'row', justifyContent: 'flex-end', gap: 5 },
  container2: { flexDirection: 'row', justifyContent: 'space-evenly' },
  container3: { flexDirection: 'row', gap: 5 },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
});

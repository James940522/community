import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

function Mission() {
  return (
    <SafeAreaView>
      <View>
        <Box />
        <Box />
        <Box />
      </View>
      <View>
        <Box />
        <Box />
        <Box />
      </View>
      <View>
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
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
});

export default Mission;

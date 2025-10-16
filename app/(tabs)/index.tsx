import { router } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <Pressable
        onPress={() => {
          router.push('/explore');
        }}
      >
        <Text>Home</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

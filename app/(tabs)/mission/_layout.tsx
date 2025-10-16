import { Stack } from 'expo-router';

export default function MissionLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: '미션', headerShown: false }}
      />
    </Stack>
  );
}

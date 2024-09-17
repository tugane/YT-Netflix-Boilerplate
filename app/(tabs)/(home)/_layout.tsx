import {Stack} from 'expo-router';

export default function TabLayout() {
    return (
        <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="details"/>
        </Stack>
    );
}

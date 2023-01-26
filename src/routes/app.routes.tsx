import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { NewHabit } from "../screens/NewHbait";
import { Habit } from "../screens/Habit";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoute() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home}></Screen>
      <Screen name="newhabit" component={NewHabit}></Screen>
      <Screen name="habit" component={Habit}></Screen>
    </Navigator>
  );
}

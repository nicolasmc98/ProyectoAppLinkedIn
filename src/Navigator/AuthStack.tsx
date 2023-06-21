import { createStackNavigator } from '@react-navigation/stack';
import MyTabs from './MyTabs';
import { Login } from '../screens/Login';
import { Signup } from '../screens/Signup';

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
    </Stack.Navigator>
  );
}
export default AuthStack;
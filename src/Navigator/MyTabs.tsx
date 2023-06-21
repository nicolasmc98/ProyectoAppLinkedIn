import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{title:"Buscar", tabBarIcon: ({ color }) => (
            <Icon name="search-circle-outline" color={color} size={26}  />
          )}}   />  
      <Tab.Screen name="Profile" component={Profile} options={{title:"Perfil", tabBarIcon: ({ color }) => (
            <Icon name="person-circle-outline" color={color} size={26} />
          )}}   />
    </Tab.Navigator>
  );
}
export default MyTabs;
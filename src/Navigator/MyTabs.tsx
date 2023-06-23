import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import RutApi from '../screens/RutApi';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    activeColor='#f4f8e6'
    inactiveColor='#f4f8e6'
    barStyle={{ backgroundColor: '#272d4d' }}
    >
      <Tab.Screen name="RutApi" component={RutApi} options={{title:"Buscar", tabBarIcon: ({ color }) => (
            <Icon name="search-circle-outline" color={color} size={26}  />
          )}}   />  
      <Tab.Screen name="Profile" component={Profile} options={{title:"Perfil", tabBarIcon: ({ color }) => (
            <Icon name="person-circle-outline" color={color} size={26} />
          )}}   />
    </Tab.Navigator>
  );
}
export default MyTabs;
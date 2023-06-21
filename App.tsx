import 'react-native-gesture-handler';
import  React,{useEffect} from 'react';
import { NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/Navigator/AuthStack';
import { firebaseConfig } from './firebase-config';
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";

firebase.initializeApp(firebaseConfig);

export const App = () => {
 
 useEffect(() => {
  if (!firebase.apps.length) {
    const app = firebase.initializeApp(firebaseConfig)
    const auth = getAuth(app); 
  }
 })

  return (
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>

      
  )
}
export default App;
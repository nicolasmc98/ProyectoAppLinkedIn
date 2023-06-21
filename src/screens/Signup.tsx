import React, { useState } from 'react'
import { Text, View,Image,Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButtom';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

export const Signup = () => {
  
  const navigation = useNavigation();
  const auth = getAuth();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleSignUp = () => { 
    
    if (email === "") {
      Alert.alert("Ingresa un email por favor")
    } else if (password === "") {
      Alert.alert("Ingresa una contraseña por favor")
    } else if (confirmPass.length == 0) {
      Alert.alert("Ingresa la contraseña de confirmación por favor");
    } else if (password != confirmPass) {
      Alert.alert("La contraseña de confirmación no coincide con la contraseña anterior ingresada");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          navigation.goBack();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }



  }
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../images/launch_screen.png')}
            height={300}
            width={300}
          />
        </View>

        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Register
        </Text>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{ marginRight: 5 }}
          />
          <TextInput
            style={{
              flexDirection: 'row',
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 25,
              flex: 1,
            }}  
            placeholder="Email"
            keyboardType='email-address'
            onChangeText={(val) => setEmail(val)}
            
          />
          
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          <TextInput
            style={{
              flexDirection: 'row',
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 25,
              flex: 1,
            }} 
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(val) => setPassword(val)}
            
          />
          
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          <TextInput
            style={{
              flexDirection: 'row',
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 25,
              flex: 1,
            }} 
            placeholder="ConfirmPass"
            secureTextEntry={true}
            onChangeText={(val) => setConfirmPass(val)}
            
          />
          
        </View>

        <CustomButton value={"Register"} onPress={handleSignUp}  />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Signup;

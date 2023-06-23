import React, { useState } from 'react'
import { Text, View,Image, Alert } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButtom';

  

export const RutApi = () => {
  
  const [rut, setRut] = useState('');
  const [activities, setActivities] = useState(new Map());
  const [name, setName] = useState('');
  

  const SearchData = () => {

    if (rut === "") {
      Alert.alert ("Ingresa un rut por favor")
    } else {

    const url = `https://api.libreapi.cl/rut/activities?rut=${encodeURIComponent(rut)}`;
    
    fetch(url)
    .then(response => response.json())
    .then(obj => {
      // Almacenar los datos en el estado
      setActivities( new Map(Object.entries(obj.data.activities)));
      
      if (obj.data.name !== "" && obj.data.name !== undefined && obj.data.name !== null ) {
        let newName = JSON.stringify(obj.data.name)
        setName(newName.replaceAll('"',""))
      }
    })
    .catch(error => {
      // Manejar el error en caso de que ocurra
      console.error(error);
    });
  }
  };

  const getActivities = () => {

    const Test = Object.fromEntries(activities);

    for (let i in Test) {
    
      return (
        <View>
          <Text>{Test[i].name}</Text>
          <Text>{Test[i].code}</Text>
          <Text>{Test[i].category}</Text>
          <Text>{Test[i].date}</Text>
          
        </View>
      );
    };
  
  };

  
  return (
    
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ paddingHorizontal: 25 }}>
       <View style={{ alignItems: 'center', paddingBottom:50 }}>
       <Image
            source={require('../images/descarga.png')}
            height={300}
            width={300}
            
          />
       </View>

       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons
            name="search-outline"
            size={20}
            color="#272d4d"
            style={{marginRight: 5, marginBottom:20}}
          />
          <TextInput
            style={{
              flexDirection: 'row',
              borderBottomColor: '#272d4d',
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 25,
              flex: 1,
            }} 
            placeholder="Buscar por rut"
            placeholderTextColor={'#272d4d'}
            onChangeText={(val) => setRut(val)}
            
          />
          
        </View>

        <CustomButton value={"Buscar"} onPress={SearchData}  />

        <View> 
               
        </View>
 
        {activities && (
          <View>
            
            <Text>Información</Text>
            <Text>Nombre: {name}</Text>
            <Text>Rut: {rut}</Text>
            <Text>{getActivities()} </Text>
             
            {/* Otros campos de datos */}
          </View>
        
          
        )}

      

      </View>

    </SafeAreaView>

    

  )
}




export default RutApi;
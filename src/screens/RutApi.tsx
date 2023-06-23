import React, { useState } from 'react'
import { Text, View,Image, Alert, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/CustomButtom';
import styles from '../AppTheme/AppTheme';


  

export const RutApi = () => {
  
  const [rut, setRut] = useState('');
  const [activities, setActivities] = useState(new Map());
  const [name, setName] = useState('');

  

  const SearchData = () => {

    if (rut === "") {
      Alert.alert ("Ingresa un rut por favor")
    } else if (rut.length >= 10 ) {
      Alert.alert ("Ingresa un rut valido por favor")
    } else {
    const url = `https://api.libreapi.cl/rut/activities?rut=${encodeURIComponent(rut)}`;
    
    fetch(url)
    .then(response => response.json())
    
    .then(obj => {
      if (obj.status === "fail") {
        Alert.alert("No valido, ingresa otro rut")
      } else {
      setActivities( new Map(Object.entries(obj.data.activities)));
    
      
      if (obj.data.name !== "" && obj.data.name !== undefined && obj.data.name !== null ) {
        let newName = JSON.stringify(obj.data.name)
        setName(newName.replaceAll('"',""))
      } 
      
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
      
      let newDate = Test[i].date; // La cadena de fecha en formato ISO 8601
      let newDateFormat = new Date(newDate).toDateString();
  
      return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
        <View style={styles.container}>
          <Text style={{fontSize: 25,color: '#272d4d'}}>Información</Text>
          <Text style={{marginTop: 18}}>Nombre de la sociedad: {Test[i].name}</Text>
          <Text>Codigo: {Test[i].code}</Text>
          <Text>Categoria: {Test[i].category}</Text>
          <Text>Fecha: {newDateFormat}</Text>
          <Text>Nombre: {name}</Text>
          <Text>Rut: {rut}</Text>
           
          
        </View>
        </SafeAreaView>
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
            placeholder="Ingresa un rut (sin puntos ni guiones)"
            placeholderTextColor={'#272d4d'}
            onChangeText={(val) => setRut(val)}
            
          />
          
        </View>

        <CustomButton value={"Buscar"} onPress={SearchData}  />

        <View> 
               
        </View>
         
        {activities && (
          <View style={{alignItems:'center'}}>
            
            <Text>{getActivities()} </Text>
             
            {/* Otros campos de datos */}
          </View>
        
          
        )}

      

      </View>

    </SafeAreaView>

    

  )
}




export default RutApi;
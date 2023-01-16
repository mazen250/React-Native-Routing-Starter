import { View, Text,ImageBackground, Image } from 'react-native'
import React from 'react'
import axios from 'axios'
import background from '../assets/anthony-reungere-s6xt1mwF_iU-unsplash.jpg'
import { AntDesign } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
const Details = ({route,navigation}) => {
    const {city} = route.params
    const [weather, setWeather] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [errorMessage, setErrorMessage] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const API_key = '29793a695253066981df4f80d5b3293c'
    const getWeather = async () => {
        
            setLoading(true)
            axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_key}`)
            .then((res)=>{
              if(res.data.cod==404){
                 console.log('respond is ',res.data.cod);
                    setError(true)
                    setErrorMessage(res.data.message)
                    setLoading(false)
               }
                else{
                    setWeather(res.data)
                    setLoading(false)
                }
            })
            .catch((err)=>{
                setError(err)
                setLoading(false)
            })
          }

          React.useEffect(() => {
            getWeather()
          }, [])

  return (
    <ImageBackground
    source={background}
    style={{

        width: '100%',
        height: '100%',
        
    }}
    >
      <View style={{
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingTop: 20,
      }}>
       <AntDesign name="arrowleft" size={30} color="white" onPress={()=>navigation.goBack()}
        style={{
            marginLeft: 20,
        }}
       />
        <Image source={require('../assets/person.jpg')} style={{ width: 50, height: 50,borderRadius:50,marginRight:40 }} />
      </View>
    
      {loading ? <Text
      style={{
          color: 'black',
          fontSize: 30,
      }}

      >Loading...</Text> : null}
      {error ? <Text
      style={{
          color: 'black',
          fontSize: 30,
      }}

      >No city found</Text> : null}
      {weather ?
      <View style={{
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
      }} >

        <View >
            <Text
            style={{
                color: 'white',
                fontSize: 40,
                fontWeight: 'bold',
            }}
            >{city}</Text>
            <Text style={{ color: '#bab6b6',
    fontSize: 17,
    fontWeight: 'bold',}}>{weather.sys.country}</Text>
            <Text style={{ color: '#bab6b6',
    fontSize: 80,
    marginTop: 10,}}>{weather.main.temp}c</Text>
        </View>
      </View>
      : null}
      
      </ImageBackground>

  )
}

export default Details
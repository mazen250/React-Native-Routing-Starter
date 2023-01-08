import { View, Text } from 'react-native'
import React from 'react'
import axios from 'axios'
const Details = ({route,navigation}) => {
    const {city} = route.params
    const [weather, setWeather] = React.useState(null)
    const [error, setError] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const API_key = '29793a695253066981df4f80d5b3293c'
    const getWeather = async () => {
        
            setLoading(true)
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`)
            .then((res)=>{
                setWeather(res.data)
                setLoading(false)
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
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    }}>
      {loading ? <Text>Loading...</Text> : null}
      {error ? <Text>{error}</Text> : null}
      {weather ? <Text
      style={{
          color: 'white',
          fontSize: 30,
      }}
      
      >{weather.main.temp}</Text> : null}
    </View>
  )
}

export default Details
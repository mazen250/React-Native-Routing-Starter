import { View, Text, SafeAreaView,StyleSheet,ImageBackground, Image,Platform ,TextInput, Pressable} from 'react-native'
import React from 'react'
import {AntDesign} from '@expo/vector-icons'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
const Home = () => {
    const [city, setCity] = useState('')
    const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../assets/screenone.jpg')} style={{width: '100%', height: '100%'
        
}}>
            <View style={styles.child}>
               <View style={styles.header}>
                     <Text style={styles.headerText}>Weather App</Text>
                     <Image source={require('../assets/person.jpg')} style={styles.headerImage}/>
               </View>
               <View style={styles.body}>
                    <View style={styles.search}>
                        <Text style={styles.text}>Hello, Mazen!</Text>
                        <Text style={styles.textPara}>Where are you going?</Text>
                            <View style={styles.searchField}>
                            <TextInput style={styles.input} placeholder="Search your destination" placeholderTextColor={"#bab6b6"}
                            onChangeText={(text)=>setCity(text)}
                            />
                         <Pressable onPress={()=>{
                            navigation.navigate('Details', {city: city})
                         }}>
                         <AntDesign name="search1" size={24} color="#bab6b6" style={{marginTop: 10, marginLeft: 10}}/>
                            </Pressable>
                            </View>

                    </View>
                    <View style={styles.cards}>
                         <View style={styles.fav}>
                                <Text style={styles.favText}>Favourite Places</Text>
                                <AntDesign name="heart" size={24} color="#bab6b6"/>
                         </View>
                    <View style={styles.favCards}>
                    <View style={styles.favCard}>
                         <ImageBackground source={require('../assets/cairo.jpg')} style={{width: '100%', height: '100%', borderRadius: 20, overflow: 'hidden'}}>
                            <View style={styles.favCardChild}>
                                <Text style={styles.favCardText}>Cairo</Text>
                                <Text style={{
                                    color: '#bab6b6',
                                    fontSize: 17,
                                    fontWeight: 'bold',

                                }}>Egypt</Text>
                                <Text 
                                style={{
                                    color: '#bab6b6',
                                    fontSize: 27,
                                    fontWeight: 'bold',
                                    marginTop: 10,
                                }}
                                >21c</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',


                                }}>
                                <Text style={{
                                    color: '#bab6b6',
                                    fontSize: 17,
                                    fontWeight: 'bold',
                                    marginRight: 10,
                                }} >Cloudy</Text>
                            
                                <AntDesign name="cloud" size={24} color="#bab6b6"/>
                                </View>
                            </View>
                            </ImageBackground>
                        </View>    

                        <View style={styles.favCard}>
                         <ImageBackground source={require('../assets/weather.jpg')} style={{width: '100%', height: '100%', borderRadius: 20, overflow: 'hidden'}}>
                            <View style={styles.favCardChild}>
                                <Text style={styles.favCardText}>Dahab</Text>
                                <Text style={{
                                    color: '#bab6b6',
                                    fontSize: 17,
                                    fontWeight: 'bold',

                                }}>Egypt</Text>
                                <Text 
                                style={{
                                    color: '#bab6b6',
                                    fontSize: 27,
                                    fontWeight: 'bold',
                                    marginTop: 10,
                                }}
                                >16c</Text>
                                <View style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',


                                }}>
                                <Text style={{
                                    color: '#bab6b6',
                                    fontSize: 17,
                                    fontWeight: 'bold',
                                    marginRight: 10,
                                }} >Rainy</Text>
                            
                                <AntDesign name="cloud" size={24} color="#bab6b6"/>
                                </View>
                            </View>
                            </ImageBackground>
                        </View>    
                    </View>
                    </View>
               </View>
            </View>
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',

    }
    ,
    child: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
    }
    ,
    header: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'android' ? 30 : 10,
        marginBottom: 70,
    },
    headerText: {
        color: '#bab6b6',
        fontSize: 17,
        fontWeight: 'bold',
    },
    headerImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    body: {
        flex: 0.8,
        flexDirection: 'column', 
        justifyContent: 'space-around',

    }
    , search:{
        flex: 0.5,
        paddingHorizontal: 20,
      
    },
    searchField:{
        backgroundColor: 'transparent',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
    },
    text:{
        color: '#e5e5e5',
        fontSize: 35,
        fontWeight: 'bold',
    },
    textPara:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 50,
    },  
    input:{
        backgroundColor: 'transparent',
        width: '80%',
        height: 40,
        borderRadius: 30,
        marginTop: 10,
        marginLeft: 10,
        paddingLeft: 10,
        color: 'white',
        borderColor: '#bab6b6',
        borderWidth: 2,


    },
    cards:{
        flex: 0.5,
       
    },
    fav:{
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    favText:{
        color: '#bab6b6',
        fontSize: 17,
        fontWeight: 'bold',
    },
    favCards:{
       flex: 0.9,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    favCard:{
        width: '45%',
        height: '100%',
        borderRadius: 20,
        overflow: 'hidden',
    
    },
    favCardChild:{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    favCardText:{
        color: '#e5e5e5',
        fontSize: 25,
        fontWeight: 'bold',
    },


})

export default Home
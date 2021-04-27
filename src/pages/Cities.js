import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, 
    Image, TextInput, TouchableOpacity } from 'react-native';
import Citylist from '../citylist.json';
import Logo from '../assets/images/logo2.png'


const Cities = (props) => {

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => props.navigation.navigate('Restaurants', {selected: item})}>
            <Text style={styles.text}>{item.value}</Text>
        </TouchableOpacity>
      ); 

    const [myInput, setMyInput] = useState("");
    const [myCities, setMyCities] = useState([]);

    useEffect(() => {
       setMyCities(Citylist)
    }, [])

    useEffect(() => {
        const filteredValue = Citylist.filter((item) => {
            const searchedText = myInput.toUpperCase();
            const myTitles = item.value.toUpperCase();
            return myTitles.indexOf(searchedText) > -1
        })
        setMyCities(filteredValue)
    }, [myInput])

    return (
        <SafeAreaView>
            <Image 
                style={styles.image} 
                source={Logo}
            />
            <TextInput 
                style={styles.input}
                placeholder='Search city...'
                onChangeText={(value) => setMyInput(value) }
            />
            <FlatList
                data={myCities}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
            />

        </SafeAreaView>
    )
}

export {Cities} 

const styles = StyleSheet.create({
    text: {
        backgroundColor: '#5DC7CB',
        margin: 5,
        padding: 10,
        borderRadius: 8,
        fontSize: 18,
        color: '#0A3966',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    image:{
        alignSelf: 'center',
        marginBottom: 15
    },
    input: {
        backgroundColor: 'lightgray',
        margin: 5,
        padding: 10,
        borderRadius: 8,
        marginBottom: 15
    }
})
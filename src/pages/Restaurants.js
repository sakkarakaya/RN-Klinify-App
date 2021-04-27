import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, Image, StyleSheet, Dimensions, View, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Cliniclist from '../main.json';
import {ClinicCard} from '../components'

const Restaurants = (props) => {

    const [myClinics, setMyClinics] = useState([]);

    const selectedCity = props.route.params.selected;

    const renderItem = ({ item }) => {
        return <TouchableOpacity onPress={() => props.navigation.navigate('Detail', {selected: item})}>
            <ClinicCard data={item} />
        </TouchableOpacity>
    }

    useEffect(() => {
        const filteredValue = Cliniclist.filter((item) => {
            return selectedCity.value == item.stadt
        })
        setMyClinics(filteredValue)
    }, [])

    return (
        <SafeAreaView>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>{selectedCity.value}</Text>
                <Text style={styles.textResult}>{myClinics.length} result 
                {myClinics.length==1 ? <Text> </Text> : <Text>s </Text>} 
                 found
                </Text>
            </View>
            
            <FlatList
                data={myClinics}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                
            />

        </SafeAreaView>
    )
}

export {Restaurants}

const styles = StyleSheet.create({
    textContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        padding: 5
    },
    textHeader: {
        
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textResult: {
       textAlign: 'right',
       
    }
  
        
})
import React, {useState} from 'react';
import { SafeAreaView, Text, Image, StyleSheet, Dimensions, View } from 'react-native';


const ClinicCard = (props) => {

    return (
        <SafeAreaView>
            <Image 
                style={styles.image} 
                source={{ uri: props.data.image }} 
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{props.data.Name}</Text>
                <Text>{props.data.Adresse}</Text>
                <Text style={styles.textScore}>Klinify Score: {props.data.Klinify}</Text>
            </View>
       
        </SafeAreaView>
    )
}

export {ClinicCard}

const styles = StyleSheet.create({
    image: {
        height: Dimensions.get('window').height * 0.25,
    },
    textContainer: {
        padding: 10,
    },
    text:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    textScore:{
        fontStyle: 'italic'
    }
})
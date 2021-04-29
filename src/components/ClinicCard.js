import React, { useState } from 'react';
import { SafeAreaView, Text, Image, StyleSheet, Dimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const ClinicCard = (props) => {
    let stars = []
    for (let i = 0; i < props.data.Klinify + 1; i++) {
        stars.push(<Icon key={i} name="star" color="#F7BC33" size={16} />)
    }

    return (
        <SafeAreaView>
            <View style={styles.textContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 7 }}>
                    <Text style={styles.text}>{props.data.Name}</Text>
                    <Text style={styles.textScore}>{stars}</Text>
                </View>
                <Image
                    style={styles.image}
                    source={{ uri: props.data.image }}
                />

                <Text>{props.data.Adresse}</Text>
            </View>

        </SafeAreaView>
    )
}

export { ClinicCard }

const styles = StyleSheet.create({
    image: {
        height: Dimensions.get('window').height * 0.25,
        marginBottom: 7
    },
    textContainer: {
        padding: 10,
        marginBottom: 10
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    textScore: {
        fontStyle: 'italic'
    }
})
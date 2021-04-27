import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import {DetailCard, ClinicCard} from '../components'
import Reviews from '../reviews.json'
import Cliniclist from '../main.json';

const Detail = (props) => {

    const [review, setReviews] = useState([]);

    const renderItem = ({ item }) => {
        return <DetailCard data={item} />
    }
    const selectedClinic = props.route.params.selected;

    const MyClinic = () => {
        return (
            <View>


                <ClinicCard data={Cliniclist[selectedClinic.id]} />
                
                <Text style={styles.reviews}> Reviews </Text>

            </View>
        )
    }

    const FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    }

    useEffect(() => {
        const myReviews = Reviews[selectedClinic.id]
        setReviews(myReviews)
    }, [])


    return (
        <SafeAreaView>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>Details</Text>
                <Text>{review.length} reviews found</Text>
            </View>

            <FlatList
                data={review}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                ListHeaderComponent={MyClinic}
                ItemSeparatorComponent={FlatListItemSeparator}
            />

        </SafeAreaView>

    )
}

export {Detail}

const styles = StyleSheet.create({
    textContainer: {
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
    reviews:{
        fontSize: 17,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }

})
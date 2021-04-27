import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import { FlatList, SafeAreaView, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps';

import citylist from '../citylist.json'
import cliniclist from '../main.json'
import { City, RestaurantDetail, SearchBar } from '../components'



let originalList = [...citylist]
let originalclinicList = [...cliniclist]

const Map = () => {
    const [mycities, setMycities] = useState([])
    const [myclinics, setMyclinics] = useState([])
    const mapRef = useRef(null)
    const [isModalVisible, setModalVisible] = useState(false);
    const [mymarker, setMymarker] = useState([])
    // const fetchData = () => {
    //     axios.post(
    //         'https://worldwide-restaurants.p.rapidapi.com/typeahead',
    //         {
    //             q: 'band', 
    //             language: 'en_US'
    //         },
    //         {
    //             headers: {
    //                 'content-type': 'application/json',
    //                 'x-rapidapi-key': '3f88fe84f8msh8114e2eb87d24afp197c91jsn33feed70db94',
    //                 'x-rapidapi-host': 'worldwide-restaurants.p.rapidapi.com'
    //             }
    //         }
    //         ).then(res => setMydata(res.data.results.data))
    //         .catch(err => console.log(err))   
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])

    useEffect(() => {
        setMycities(citylist)
        //setMyclinics(cliniclist)
    }, [])

    const searchCity = (text) => {
        const filteredList = originalList.filter(item => {
            const usertext = text.toUpperCase()
            const citynames = item.value.toUpperCase()
            return citynames.indexOf(usertext) > -1
        })
        setMycities(filteredList)
    }

    const selectCity = (city) => {
        const clinicsofcity = originalclinicList.filter(item => {
            return city.value == item.stadt
        })
        setMyclinics(clinicsofcity)

        const coordinates = clinicsofcity.map(i => ({ latitude: i.lat, longitude: i.long }))

        mapRef.current.fitToCoordinates(coordinates, {
            edgePadding: {
                top: 40,
                right: 20,
                bottom: 20,
                left: 20
            }
        })
    }

    const toggleModal = (m) => {
        setModalVisible(!isModalVisible);
        setMymarker(m)
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <MapView
                    ref={mapRef}
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: 52.371402188587425,
                        longitude: 9.724198497953754,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    {myclinics.map((marker, index) => (
                        <Marker
                            key={index}
                            onPress={() => toggleModal(marker)}
                            coordinate={{
                                latitude: marker.lat,
                                longitude: marker.long,
                            }}
                            title={marker.title}
                            description={marker.description}
                        />
                    ))}
                </MapView>
                <View style={{ position: 'absolute' }}>
                    <SearchBar onSearch={searchCity} />

                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={mycities}
                        renderItem={({ item }) => <City data={item} onSelect={() => selectCity(item)} />}
                        keyExtractor={(_, index) => index.toString()}
                    />
                    <RestaurantDetail isVisible={isModalVisible} data={mymarker} onClose={toggleModal} onSwipeClose={() => setModalVisible(false)}/>

                </View>
            </View>
        </SafeAreaView>
    )
}

export {Map}

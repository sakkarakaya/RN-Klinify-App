import React from 'react'
import { View, Text, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome' 

import {searchbar} from '../styles'

const SearchBar = (props) => {
    return (
        <View style={searchbar.container}>
            <Icon name="map-marker" size={20} color="lightblue" />
            <TextInput 
                style={searchbar.text}
                placeholder="Search here..."
                onChangeText={(value) => props.onSearch(value)}
            />
        </View>
    )
}

export {SearchBar} 

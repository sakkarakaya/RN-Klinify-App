import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'

import {city} from '../styles'


const City = (props) => {
    return (
        <TouchableOpacity 
            style={city.container}
            onPress={props.onSelect}    
        >
            <Icon name="building" size={20} color="gray"/>
            <Text style={city.text}>{props.data.value}</Text>
        </TouchableOpacity>
    )
}

export {City} 

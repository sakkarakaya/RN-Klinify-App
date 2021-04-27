import React from 'react'
import { View, Text, Image } from 'react-native'
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome'

import { restaurant } from '../styles'

const RestaurantDetail = (props) => {
    var stars = [];
    for (var i = 0; i < props.data.Klinify+1; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        stars.push(<Icon key={i} name='star' color='#F7BC33' size={18}/>);
    }
    return (

        <Modal
            isVisible={props.isVisible}
            onBackdropPress={props.onClose}
            swipeDirection="down"
            onSwipeComplete={props.onSwipeClose}
            style={{ justifyContent: 'flex-end', margin: 0, marginHorizontal: 10 }}
        >

            <View style={restaurant.container}>
                <View style={restaurant.line}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5 }}>
                    <Text style={{fontSize: 16}}>{props.data.Name}</Text>
                    <Text>{stars}</Text>
                </View>
                <Image
                    source={{ uri: props.data.image }}
                    style={restaurant.image}
                />
                
                <Text style={{ margin: 5 }}>{props.data.Adresse}</Text>

            </View>
        </Modal>
    )
}

export { RestaurantDetail }

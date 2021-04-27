import {StyleSheet, Dimensions} from 'react-native'

export const city = StyleSheet.create({
    container: {
        margin: 9,
        padding: 7,
        borderRadius: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        marginLeft: 5,
        
    }
})

export const restaurant = StyleSheet.create({
    container: {
        margin: 6,
        padding: 7,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: '#bdbdbd'
    },
    text: {
        fontWeight: 'bold'
    }
})

export const searchbar = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 6,
        padding: 7,
        borderRadius: 20,
        width: Dimensions.get('window').width * 0.8,
        marginLeft: '10%',
        flexDirection: 'row',
        alignItems: 'center'

    },
    text: {
        
        fontSize: 15,
        marginLeft: 7
    }
})
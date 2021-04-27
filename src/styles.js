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
        backgroundColor: 'white',
        margin: 6,
        padding: 7,
        borderRadius: 8,
    },
    text: {
        fontWeight: 'bold'
    },
    line: {
        borderWidth: 1,
        width: Dimensions.get("window").width / 4,
        alignSelf: 'center',
        marginBottom: 5
    },
    image: {
        height: Dimensions.get("window").height * 0.25,
        margin: 5
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
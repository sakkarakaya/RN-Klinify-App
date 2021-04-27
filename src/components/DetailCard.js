import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

// {"review_id":1189,
// "Name":"AMEOS Hospital Alfeld",
// "Sterne":5,
// "Datum":"2 weeks ago",
// "Deutsch":" Wurde heute von Dr. O. Tebbi und einer sehr netten Krankenpflegerin nach einem kleineren Unfall wieder \"zusammengeflickt\".  Oft sind Ärzte in Krankenhäusern unfreundlich und man fühlt sich wie ein  Störfaktor. Das war heute nicht der Fall, ich habe mich gut aufgehoben gefühlt. Würde ja schreiben \"komme gern wieder!\" aber wer will das schon? ;)",
// "Von":"Google"}

const DetailCard = (props) => {
    return (
        <SafeAreaView style={styles.container}>

            {/* <Text>{props.data.review_id}</Text> */}
            {/* <Text>{props.data.Name}</Text> */}
            <Text>{props.data.Sterne} Star</Text>
            <View style={styles.header}>
                <Text>from {props.data.Von}</Text>
                <Text>{props.data.Datum}</Text>
            </View>
            <Text>{props.data.Deutsch}</Text>



        </SafeAreaView>
    )
}

export {DetailCard} 

const styles = StyleSheet.create({
    container: {
     
        margin: 10
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    }
})
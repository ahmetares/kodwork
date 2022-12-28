import { StyleSheet, Text, useWindowDimensions, ScrollView, View } from 'react-native';
import HTML from "react-native-render-html";


const JobDetail = ({ route }) => {


    content = route.params.contents
    jobName = route.params.name
    location = route.params.location
    level = route.params.level


    const { width } = useWindowDimensions();

    return (
        <ScrollView>

            <View style={styles.headerContainer} >

                <Text style={styles.jobName} > {jobName} </Text>

                <View style={styles.jobName_container}>
                    <Text style={styles.jobName_header}> Locations: </Text>
                    <Text style={styles.location} > {location}</Text>
                </View>

                <View style={styles.location_container}>
                    <Text style={styles.jobName_header}> Job Level: </Text>
                    <Text style={styles.level} > {level}</Text>
                </View>

                <Text style={styles.detail} >Job Detail</Text>
            </View>

            <HTML contentWidth={width} source={{ html: content }} />

        </ScrollView>
    )
}

export default JobDetail


const styles = StyleSheet.create({
    headerContainer: {
        borderWidth: 0.5,
        backgroundColor: 'lightgrey',
        flex:1,
    },

    jobName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom:5,
    },

    jobName_container:{
        marginBottom:5,
        flexDirection:'row',

    },

    location_container:{
        marginBottom:5,
        flexDirection:'row',


    },

    jobName_header:{
        color:'red',
        
    },

    location_header:{
        color:'red'
    },

    location: {
        fontWeight: 'bold',
    },
    level: {
        fontWeight: 'bold'
    },

    detail:{
        marginBottom:5,
        fontWeight: 'bold',
        fontSize:20,
        textAlign:'center'
    }
})
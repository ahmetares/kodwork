import { StyleSheet, Text, useWindowDimensions, ScrollView, View,Button } from 'react-native';
import HTML from "react-native-render-html";
import { useSelector, useDispatch } from 'react-redux'

import JobsCard from '../components/JobsCard'

const JobDetail = ({ route }) => {

    content = route.params[0].contents
    jobName = route.params[0].name
    location = route.params[0].location
    level = route.params[0].level

    const favList = useSelector((state) => state.counter.favList)
    const dispatch = useDispatch()


    const handleFavourites = () => {
      
    //    bu butona basıldığında  alert çıkart (Favorilere eklendi) 
   
    //    slice'daki favList'e dispatch ile olduğumuz job'un bilgilerini param olarak gönder ve state'i güncelle
    //    dispatch(addFavouriteJobs(content,jobName,location,level)) 
    //    favouritesde selector ile favjobs'u al ve flatlist ile listele
    }


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

            <Button title='Add to Favourite' onPress={handleFavourites} />

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
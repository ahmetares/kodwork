import { useEffect } from 'react';
import { StyleSheet, Text, useWindowDimensions, ScrollView, View, Button, Alert } from 'react-native';
import HTML from "react-native-render-html";
import { useDispatch, useSelector } from 'react-redux'
import { addFavouriteJobs } from '../store/counterSlice'


const JobDetail = ({ route }) => {

    content = route.params.contents
    jobName = route.params.name
    location = route.params.location
    level = route.params.level
    id = route.params.id

    const dispatch = useDispatch()

    const favJobs = useSelector(state => state.counter.favList)
    
    const isAddedtoFavs = () => {
        let flag = false
        for (let i = 0; i < favJobs.length; i++) {
            if(favJobs[i].content.includes(content))
            flag = true
        }
        if(flag) return true
        else return false
        }

        
    const handleFavourites = () => {

        dispatch(addFavouriteJobs({ jobName, location, level, content, id }))
        Alert.alert('kodworkk', 'Job Added to Favourites')

        //    slice'daki favList'e (global state) dispatch ile olduğumuz job'un bilgilerini param olarak gönder ve state'i güncelle
        //    bu butona basıldığında  alert çıkart (Favorilere eklendi) 
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

            {!isAddedtoFavs() && <Button title='Add to Favourite' onPress={handleFavourites} />}

            <HTML contentWidth={width} source={{ html: content }} />

        </ScrollView>
    )
}

export default JobDetail


const styles = StyleSheet.create({
    headerContainer: {
        borderWidth: 0.5,
        backgroundColor: 'lightgrey',
        flex: 1,
    },

    jobName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },

    jobName_container: {
        marginBottom: 5,
        flexDirection: 'row',

    },

    location_container: {
        marginBottom: 5,
        flexDirection: 'row',


    },

    jobName_header: {
        color: 'red',

    },

    location_header: {
        color: 'red'
    },

    location: {
        fontWeight: 'bold',
    },
    level: {
        fontWeight: 'bold'
    },

    detail: {
        marginBottom: 5,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    }
})
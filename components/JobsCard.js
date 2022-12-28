import { StyleSheet, Text, View,TouchableWithoutFeedback } from 'react-native';


const JobsCard = ({job, handlePress}) => {


    return(
        <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
            <Text style={styles.name}>{job.name}</Text>
           
            <View style={styles.locationContainer}>
            <Text style={styles.location}>{job.locations[0].name}</Text>
            </View>
           
            <Text style={styles.level} >{job.levels[0].name}</Text>


        </View>
        </TouchableWithoutFeedback>
        )
}

export default JobsCard


const styles = StyleSheet.create({
    container: {
        flex:1,
        borderWidth:1,
        borderColor:'grey',
        marginBottom:20,
        marginHorizontal:10,
        justifyContent:'space-evenly',
        borderRadius:10
    },
    name:{
        margin:5,
        fontWeight:'bold',
        fontSize:15
    },

    locationContainer:{
        backgroundColor:'red',
        alignSelf: 'flex-start',
        borderRadius:15,
        marginVertical:15,
        marginLeft:5,

    },

    location:{
        color:'white',
        padding:5,


    },

    level:{
        margin:5,
        textAlign:'right',
        color:'red'
    },
})
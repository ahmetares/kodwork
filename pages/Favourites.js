import { FlatList, StyleSheet, Text, View ,Button, TextInput} from 'react-native';
import { useSelector,useDispatch } from 'react-redux'
import JobCardForFavs from '../components/JobCardForFavs';
import { removeFavouriteJobs } from '../store/counterSlice';
import { useEffect } from 'react';


const Favourites = ({navigation}) => {

    useEffect(()=>{

    },[])


    const dispatch = useDispatch()

    const favJobs = useSelector((state) => state.counter.favList)

    const NavigateToDetail = (contents, name, location, level, id) => navigation.navigate('JobDetail' , {contents,name,location,level, id})

    return(
        <View>
            <FlatList 
            keyExtractor={(_, index)=> index.toString()} 
            data={favJobs} 
            renderItem={({item}) => <JobCardForFavs job={item} handlePress={() => NavigateToDetail(item.content, item.jobName, item.location, item.level, item.id)} handleRemove={(id) => dispatch(removeFavouriteJobs(item.id))} /> }  />
        </View>
        )
}

export default Favourites
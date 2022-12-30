import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';

import JobsCard from '../components/JobsCard'
import Loading from  '../components/Loading'
const Jobs = ({navigation}) => {

    const [jobs,SetJobs] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchJobs = async () => {
        const {data: jobsList} = await axios.get('https://www.themuse.com/api/public/jobs?page=1')
        SetJobs(jobsList.results)
        setLoading(false)

    }

    const NavigateToDetail = (contents, name, location, level,id) => navigation.navigate('JobDetail' , {contents,name,location,level,id})

    

    useEffect(() => {
            fetchJobs()
        },[])

    if(loading){
        return  <Loading/>
    }

    return(
        <View>
           <FlatList data={jobs}  renderItem={({item}) => <JobsCard job={item} handlePress={() => NavigateToDetail(item.contents, item.name, item.locations[0].name, item.levels[0].name,item.id)} /> } />
        </View>  
        )
    
}

export default Jobs
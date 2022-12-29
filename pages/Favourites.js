import { FlatList, StyleSheet, Text, View ,Button, TextInput} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, addFavtoList } from '../store/counterSlice'
import { useEffect, useState } from 'react';

const Favourites = () => {

    const [text,setText] = useState('')

    const count = useSelector((state) => state.counter.value)
    const list = useSelector((state) => state.counter.favListTest)

    const dispatch = useDispatch()

    useEffect(()=>{console.log(list),[]})

    return(
        <View>
            <Text>Favourites</Text>

            <Button title='inc' onPress={() => dispatch(increment())} />
            <Button title='decr' onPress={() => dispatch(decrement())} />

            <Text>{count}</Text>

            <TextInput style={{padding:10, borderWidth:2}} onChangeText={setText} />
            <Button title='add' onPress={() => dispatch(addFavtoList(text))} />


            <FlatList keyExtractor={(_, index)=> index.toString()} data={list} renderItem={({item}) => <Text> {item} </Text>} />
 
        </View>
        )
}

export default Favourites
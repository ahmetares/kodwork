import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Jobs from './pages/Jobs'
import JobDetail from './pages/JobDetail'
import Favourites from './pages/Favourites'

import store from './store/store'
import { Provider } from 'react-redux'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const JobStack= () => {
  return(

    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name='Jobstack' component={Jobs} />
      <Stack.Screen name='JobDetail' component={JobDetail} />
    </Stack.Navigator>

  )
}

export default function App() {

  return (
    <Provider store={store} >
      <NavigationContainer>
        <Tab.Navigator  >
          <Tab.Screen name='Jobs' component={JobStack}  />
          <Tab.Screen name='Favourites' component={Favourites}  />
        </Tab.Navigator>
      </NavigationContainer>
      </Provider> 
  );
}



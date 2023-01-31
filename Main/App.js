import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {Welcome,Login,Register,Find} from '../screens'
import TabBar from './TabBar'
const Stack=createNativeStackNavigator()
export default function App(props){
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown:false
            }}>
                <Stack.Screen name={"Welcome"} component={Welcome}/>
                <Stack.Screen name={"Login"} component={Login}/>
                <Stack.Screen name={"Register"} component={Register}/>
                <Stack.Screen name={"TabBar"} component={TabBar}/>
                <Stack.Screen name={"Find"} component={Find}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
} 
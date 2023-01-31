import * as React from 'react'
import {Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Home,
    Mornitor,
    Estimate,
    Notify,
    Find,
} from '../screens'
import { colors } from '../constant'
import {icons} from '../constant'

const Tab=createBottomTabNavigator()
const screenOptions=({route})=>({
    headerShown:false,
    tabBarActiveTintColor: colors.main,
    tabBarIcon: ({focused,color,size})=>{
        let screenName=route.name
        let iconName=""
        if(screenName=="Home")
            iconName=icons.home
        else if(screenName=="Mornitor")
            iconName=icons.mornitor
        else if(screenName=="Estimate")
            iconName=icons.estimate
        else if(screenName=="Notify")
            iconName=icons.notify
        else if(screenName=="Find")
            iconName=icons.find
        return <Image 
        source={iconName}
        style={{width:25,
            height:25,
            tintColor:focused?colors.main:'black',
        }}
        />
    }
})
function TabBar(props){
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name={"Home"} component={Home}/>
            <Tab.Screen name={"Mornitor"} component={Mornitor} initialParams={{name:"None"}}/>
            <Tab.Screen name={"Estimate"} component={Estimate} initialParams={{name:"None"}}/>
            <Tab.Screen name={"Notify"} component={Notify}/> 
            <Tab.Screen name={"Find"} component={Find}/>
        </Tab.Navigator>
    )
}
export default TabBar
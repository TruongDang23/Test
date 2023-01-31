import {
    View,
    Text,
    ImageBackground,
    ScrollView,
} from 'react-native'
import {icons, images} from '../../constant'
import {UIIcon} from '../../components'
import { useState } from 'react'
import EstimateItem from './EstimateItem'

function Estimate({navigation,route})
{
    let name=route.params.name
    const [estimates,setEstimate]=useState([
        {
            time:'7:00 AM 4/1/23',
            avg:24,
            timMach:17,
            dotQuy:9,
            nhoiMau:7,
        },
        {
            time:'6:45 AM 5/1/23',
            avg:25,
            timMach:0,
            dotQuy:0,
            nhoiMau:0,
        },
        {
            time:'8:00 AM 6/1/23',
            avg:23,
            timMach:17,
            dotQuy:9,
            nhoiMau:7,
        },
        {
            time:'6:20 AM 7/1/23',
            avg:24,
            timMach:17,
            dotQuy:9,
            nhoiMau:7,
        },
        {
            time:'7:15 AM 8/1/23',
            avg:26,
            timMach:0,
            dotQuy:0,
            nhoiMau:0,
        },
    ])
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={images.background}
                resizeMode='cover'
                style={{ flex: 1 }}>
                <View style={{
                    flex: 10,
                    marginHorizontal: 30,
                    marginTop: 50,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <UIIcon 
                        thisIcon={icons.home} 
                        onPress={()=>{
                            navigation.navigate('Home')
                        }}/>
                        <View style={{
                            alignItems: 'center',
                            flex: 1,
                        }}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                            }}>{name}</Text>
                        </View>
                        <UIIcon 
                        thisIcon={icons.estimate}
                        onPress={()=>{
                            navigation.navigate('Estimate',{name:name})
                        }} />
                    </View>
                </View>

                <View style={{
                    flex: 90,
                }}>
                    <ScrollView>
                        {estimates.map(eachEstimate => <EstimateItem estimate={eachEstimate} key={eachEstimate.time}/>)}
                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    )
}
export default Estimate
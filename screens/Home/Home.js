import {
    View,
    ImageBackground,
    ScrollView,
} from 'react-native'
import {icons, images} from '../../constant'
import {
    UIIcon,
    TextBox,
} from '../../components'
import { useState } from 'react'
import HumanItem from './HumanItem'
import DataHuman from '../../Main/DataHuman'

function Home(props)
{
    const [humans,setHumans]=useState(DataHuman)
    //navigation
    const { navigation, route } = props
    //function of navigate to/back
    const { navigate, goBack } = navigation

    return (
        <View style={{flex:1}}>
            <ImageBackground
                source={images.background}
                resizeMode='cover'
                style={{flex:1}}>
                    <View style={{
                        flex:15,
                        flexDirection:'row',
                        justifyContent:'space-around',
                        marginTop:50,
                    }}>
                        <UIIcon thisIcon={icons.home}/>
                        <TextBox/>
                        <UIIcon 
                        thisIcon={icons.logout}
                        onPress={()=>{
                            navigate('Welcome')
                        }}
                        />
                    </View>

                    <View style={{
                        flex:90,
                    }}>
                        <ScrollView>
                            {humans.map(eachHuman => <HumanItem 
                                                        human={eachHuman}
                                                        key={eachHuman.id}
                                                        onPress={()=>{
                                                            navigate('Estimate',{name:eachHuman.name}),
                                                            navigate('Mornitor',{name:eachHuman.name})
                                                        }}
                                                      />)}
                        </ScrollView>
                    </View>
            </ImageBackground>
        </View>
    )
}
export default Home
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
import FindItem from './FindItem'
import { useState } from 'react'
import DataHuman from '../../Main/DataHuman'

function Find(props)
{
    const [humans,setHumans]=useState(DataHuman)
    //navigation
    const { navigation, route } = props
    //function of navigate to/back
    const { navigate, goBack } = navigation
    const [text,setText] = useState('')
    const [suitableHumans,setSuitableHumans]=useState([
        {
            name:'',
            age:0,
            address:'',
            id:0,
        }
    ])
    return (
        <View style={{flex:1}}>
            <ImageBackground
                source={images.background}
                resizeMode='cover'
                style={{flex:1}}>
                    <View style={{
                        flex:10,
                        flexDirection:'row',
                        justifyContent:'space-around',
                        marginTop:50,
                    }}>
                        <UIIcon 
                        thisIcon={icons.home}
                        onPress={()=>{
                            navigate('Home')
                        }}
                        />

                        <TextBox 
                        onChangeText={(text) => setText(text)}
                        value={text}
                        placeholder="Name: Nguyen Van A"/>

                        <UIIcon 
                        thisIcon={icons.find}
                        onPress={() => {
                            if(text=='')
                                alert('Please type the name')
                            else
                            {
                                let human=humans.map(eachHuman => {
                                    if(eachHuman.name==text)
                                        return{...eachHuman}
                                    else
                                        return {eachHuman,id:0}
                                })
                                setSuitableHumans(human)
                            }
                        }}
                        />
                    </View>

                    <View style={{
                        flex:90,
                    }}>
                        <ScrollView>
                            {
                                suitableHumans.map(eachSuitable => {
                                    if (eachSuitable.id != 0)
                                        return <FindItem human={eachSuitable} key={eachSuitable.id} />
                                })
                            }
                        </ScrollView>
                    </View>
            </ImageBackground>
        </View>
    )
}
export default Find
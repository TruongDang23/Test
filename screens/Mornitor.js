import {
    View,
    Text,
    ImageBackground,
} from 'react-native'
import {icons, images} from '../constant'
import {UIIcon} from '../components'

function Mornitor({navigation,route})
{   
    let name=route.params.name

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
                        thisIcon={icons.mornitor} 
                        onPress={()=>{
                            navigation.navigate('Mornitor',{name:name})
                        }}/>
                    </View>
                </View>

                <View style={{flex: 30}}>
                    <View style={{
                        flex:4,
                        marginHorizontal:10,
                        flexDirection: 'row',
                        alignItems:'center',
                    }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                        <Text style={{paddingHorizontal:10,}}>Heart Rate</Text>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    </View>
                    <View style={{flex:26}}>

                    </View>
                </View>

                <View style={{flex: 30}}>
                    <View style={{
                        flex:4,
                        marginHorizontal:10,
                        flexDirection: 'row',
                        alignItems:'center',
                    }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                        <Text style={{paddingHorizontal:10,}}>Oxigen</Text>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    </View>
                    <View style={{flex:26}}>

                    </View>
                </View>

                <View style={{flex: 30}}>
                    <View style={{
                        flex:4,
                        marginHorizontal:10,
                        flexDirection: 'row',
                        alignItems:'center',
                    }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                        <Text style={{paddingHorizontal:10,}}>Grip Strength</Text>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    </View>
                    <View style={{flex:26}}>

                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}
export default Mornitor
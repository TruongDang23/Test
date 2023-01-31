import {
    View,
    ImageBackground,
    Image,
    Text,
} from 'react-native'
import {UIButton,TextBox} from '../components'
import {images,colors} from '../constant'
function Register(props)
{
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
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center',
                    marginTop:50,
                }}>
                    <Image 
                        source={images.logo}
                        style={{
                            width:150,//width/height ~= 31/40
                            height:194
                        }}
                    />
                </View>
                <View style={{
                    flex:1,
                }}>
                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                    }}>
                        <Text>Name:      </Text>
                        <TextBox/>
                    </View>

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                    }}>
                        <Text>Email:       </Text>
                        <TextBox/>
                    </View>

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                    }}>
                        <Text>Password: </Text>
                        <TextBox/>
                    </View>

                    <UIButton
                        onPress={()=>{
                            alert('Create Successfully')
                            navigate('Welcome')
                        }}
                        title='CREATE NEW'
                        letterColor={colors.main}
                        bgColor='white'
                    />
                </View>
            </ImageBackground>
        </View>
    )
}
export default Register
import {
    View,
    ImageBackground,
} from 'react-native'
import {icons, images} from '../../constant'
import {UIIcon} from '../../components'
function Notify()
{
    return (
        <View style={{flex:1}}>
            <ImageBackground
                source={images.background}
                resizeMode='cover'
                style={{flex:1}}>
                    <View style={{
                        flex:15,
                        flexDirection:'row',
                        marginLeft:30,
                        marginTop:50,
                    }}>
                        <UIIcon thisIcon={icons.notify}/>
                    </View>

                    <View style={{
                        flex:90,
                    }}>
                    
                    </View>
                    
                    <View style={{
                        flex:10,
                        marginBottom:10,
                        justifyContent:'flex-end',
                    }}>
                    </View>
            </ImageBackground>
        </View>
    )
}
export default Notify
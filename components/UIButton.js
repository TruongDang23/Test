import {TouchableOpacity,Text} from 'react-native'
function UIButton(props){
    const {title,bgColor,letterColor}=props
    return (
        <TouchableOpacity 
        onPress={props.onPress}
        style={{
            borderWidth:3,
            borderColor:'white',
            borderRadius:5,
            height:70,
            marginHorizontal:90,
            marginVertical:10,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:bgColor,
        }}>
            <Text style={{
                fontSize:30,
                color:letterColor,
                fontWeight:'bold',
            }}>{title}</Text>
        </TouchableOpacity>
    )
}
export default UIButton
import {
    Image,
    TouchableOpacity,
    StyleSheet,
}from 'react-native'
function UIIcon(props)
{
    let {thisIcon}=props
    return(
        <TouchableOpacity onPress={props.onPress}>
            <Image
                source={thisIcon}
                style={style.icon} />
        </TouchableOpacity>
    )
}
export default UIIcon
const style=StyleSheet.create({
    icon:{
        width:30,
        height:30,
    }
})
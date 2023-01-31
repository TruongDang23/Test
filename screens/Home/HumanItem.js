import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
function HumanItem(props)
{    
    let {name,age,address,id}=props.human
    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={{
                height: 150,
                padding: 10,
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                }}>{name}</Text>

                <Text style={{
                    fontSize: 20,
                }}>Age: {age}</Text>

                <Text style={{
                    fontSize: 20,
                }}>Address: {address}</Text>

                <Text style={{
                    fontSize: 20,
                }}>ID: {id}</Text>

                <View style={{
                    backgroundColor: 'black',
                    height: 2,
                }} />
            </View>
        </TouchableOpacity>
    )
}
export default HumanItem
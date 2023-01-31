import {
    View,
    Text,
} from 'react-native'
function EstimateItem(props)
{
    let {time,avg,timMach,dotQuy,nhoiMau}=props.estimate
    return(
        <View style={{
            height: 150,
            padding: 10,
        }}>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                alignSelf:'center',
            }}>{time}</Text>

            <Text style={{
                fontSize: 20,
            }}>Lực nắm tay trung bình: {avg}Kg</Text>

            <Text style={{
                fontSize: 20,
            }}>Tỉ lệ tử vong do tim mạch: {timMach}%</Text>

            <Text style={{
                fontSize: 20,
            }}>Tỉ lệ mắc bệnh đột quỵ: {dotQuy}%</Text>
            
            <Text style={{
                fontSize: 20,
            }}>Tỉ lệ bị nhồi máu cơ tim: {nhoiMau}%</Text>
            <View style={{
                backgroundColor: 'black',
                height: 2,
            }} />
        </View>
    )
}
export default EstimateItem
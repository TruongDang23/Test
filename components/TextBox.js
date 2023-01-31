import {TextInput} from 'react-native'
import {useState} from 'react';
function TextBox(props)
{
    return (
        <TextInput style={{
            borderWidth:2,
            borderColor:'white',
            width:275,
            height:30,
            marginBottom:5,
            paddingHorizontal:5,
        }}
        cursorColor={'black'}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        value={props.value}/>
    )
}
export default TextBox
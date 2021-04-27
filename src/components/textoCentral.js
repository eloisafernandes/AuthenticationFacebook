import React from 'react'
import { View, Text } from 'react-native'


export default props => (
    <View style={{
        
        justifyContent: "center",
        alignItems: "center"


    }}> 
        <Text style={{fontSize: 30}}> {props.texto} </Text>
    </View>
)
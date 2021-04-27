import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput} from 'react-native'
import TextoCentral from '../components/textoCentral'


export default props => {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    return (
        <View style={style.centralizar}>
            <Text style={{fontSize: 19}}> Bem vindo ao Elobook</Text>
            <TextInput value={email} placeholder="e-mail" onChangeText={email=>setEmail(email)}></TextInput>
            <TextInput secureTextEntry={true} value={senha} placeholder="senha" onChangeText={senha=>setSenha(senha)}></TextInput>
        </View>

    )

}

const style=StyleSheet.create({
    centralizar: {
        margin: 25,
        marginTop: 100,
        
    }
})


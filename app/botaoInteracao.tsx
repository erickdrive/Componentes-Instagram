import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';

type Props = {
  like: string
  comentario: string
  compartilhado: string
  curtido: boolean
}

export function BotaoInteracao({like, comentario, compartilhado, curtido}: Props){
    const [curtidoLocal, setCurtido] = useState(curtido);
    return(
        <View style={styles.containerInteracao}>
            <View style={styles.interagir}>
            <View>
              <TouchableOpacity onPress={()=> setCurtido(prev => !prev)}>
                <View style={styles.infoBotao}>
                     {curtidoLocal ? <FontAwesome name="heart" size={24} color="red" /> : <Feather name="heart" size={24} color="black"/>}
                    <Text style={styles.textoInfo}>{like}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <View style={styles.infoBotao}>
                    <Ionicons name="chatbubble-outline" size={24} color="black" />
                    <Text style={styles.textoInfo}>{comentario}</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <View style={styles.infoBotao}>
                  <Feather name="send" size={24} color="black" />
                  <Text style={styles.textoInfo}>{compartilhado}</Text>
                </View>
              </TouchableOpacity>
            </View>
            </View>
            <TouchableOpacity>
              <View style={styles.flag}>
                  <Octicons name="bookmark" size={24} color="black" />
              </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
  interagir:{
    flexDirection:'row',
    gap:20,
    margin:10,
  },
  containerInteracao:{
    flexDirection: 'row',
    justifyContent:'space-between',
  },
  infoBotao:{
    flexDirection:'row',
    alignContent:'center',
    gap:5
  },
  textoInfo:{
    fontSize:16,
    fontWeight: 600,
    marginTop:2
  },
  flag:{
    margin:10,
    justifyContent:'center'
  },
});


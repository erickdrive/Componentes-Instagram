import { StyleSheet, Text, View, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';

type Props = {
  like: string
  comentario: string
  compartilhado: string
}

export function BotaoInteracao({like, comentario, compartilhado}: Props){
    return(
        <View style={styles.containerInteracao}>
            <View style={styles.interagir}>
            <View>
                <View style={styles.infoBotao}>
                    <Feather name="heart" size={24} color="black" />
                    <Text style={styles.textoInfo}>{like}</Text>
                </View>
            </View>
            <View>
                <View style={styles.infoBotao}>
                    <Ionicons name="chatbubble-outline" size={24} color="black" />
                    <Text style={styles.textoInfo}>{comentario}</Text>
                </View>
            </View>
            <View>
                <View style={styles.infoBotao}>
                <Feather name="send" size={24} color="black" />
                <Text style={styles.textoInfo}>{compartilhado}</Text>
                </View>
            </View>
            </View>
            <View style={styles.flag}>
                <Octicons name="bookmark" size={24} color="black" />
            </View>
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


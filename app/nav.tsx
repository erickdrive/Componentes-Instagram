import { StyleSheet, Text, View, Image } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
    nomePerfil: string
    fotoPerfil: string
}

export function Nav({nomePerfil, fotoPerfil}: Props) {
    return(
        <View style= {styles.nav}>
            <View style={styles.containerNomeFoto}>
                <Image style={styles.fotoPerfil} source={
                    {uri: fotoPerfil,}}
                />
                <Text style={styles.nomePerfil}>{nomePerfil}</Text>
            </View>
            <AntDesign name="ellipsis" size={24} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
  nav:{
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  containerNomeFoto:{
    flexDirection: 'row',
    alignItems: 'center',
    gap:10
  },
  nomePerfil:{
    fontSize:15,
    fontWeight: 700
  },
  fotoPerfil:{
    width: 40,
    height: 40,
    borderRadius:200
  },
});

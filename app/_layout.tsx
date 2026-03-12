import { StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BotaoInteracao } from './botaoInteracao'
import { Nav } from './nav'
import { ConteudoFeed } from './conteudoFeed';

const dados = [
  {
    nomePerfil:"chantouflowergirl",
    fotoPerfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrMgmmp1Y7h7EcjZB0fGfP7ywPY-gVGG8Ang&s",
    like: "8.9k", 
    comentario:"900", 
    compartilhado:"758",
    imagemFeed:"https://i.pinimg.com/736x/75/b5/6b/75b56b51ddc1a2bd647e696f2c42e71f.jpg"
  },
  {
    nomePerfil:"Marcelo freitas",
    fotoPerfil: "https://img.freepik.com/vetores-gratis/ilustracao-do-jovem-sorridente_1308-174669.jpg?semt=ais_rp_progressive&w=740&q=80",
    like: "8.9k", 
    comentario:"900", 
    compartilhado:"758",
    imagemFeed:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzs6nqLlhJJuO3u5f6Jzd0rypB2DJ3_kcNA&s"
  },
  {
    nomePerfil:"Marcos",
    fotoPerfil: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm90byUyMGRvJTIwcGVyZmlsfGVufDB8fDB8fHww",
    like: "8.9k", 
    comentario:"900", 
    compartilhado:"758",
    imagemFeed:"https://i.pinimg.com/originals/98/af/8a/98af8a877355f98c8db3eeaee998feef.jpg"
  },
]

export default function RootLayout() {
  return (
   <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView>
        <View>
          {
            dados.map((dados, index) => {
              return(
                <View key={index}>
                    <Nav 
                      nomePerfil = {dados.nomePerfil}
                      fotoPerfil = {dados.fotoPerfil}
                    />
                    <ConteudoFeed
                      imagemFeed= {dados.imagemFeed}
                    />
                    <BotaoInteracao
                      like = {dados.like}
                      comentario = {dados.comentario} 
                      compartilhado = {dados.compartilhado}
                    />
                  </View>
              )
            })
          }
        </View>
      </ScrollView>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView:{
    flex:1
  }
});
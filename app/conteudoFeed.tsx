import { StyleSheet, Image } from 'react-native';

type Props = {
    imagemFeed: string
}

export function ConteudoFeed({imagemFeed}: Props) {
    return(
        <Image style={styles.fotoFeed} source={{uri: imagemFeed,}}/>
    )
}

const styles = StyleSheet.create({
    fotoFeed:{
        width: '100%',
        height: 600,
    },
});

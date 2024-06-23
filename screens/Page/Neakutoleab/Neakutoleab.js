import React from 'react'
import { View,Image } from 'react-native'
function Neakutoleab() {
  return (
    <View>
         <Image style={styles.images}                        
              source={{
                  uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/lalibela%2Fimages.jpg?alt=media&token=8f6dfcc9-d86e-431f-89c1-b731903b5d8c',
              }}
       />
    </View>
    
  )
}

export default Neakutoleab
const styles = StyleSheet.create({
    images: {
      flex:1,
      width:200,
      height:200,
      resizeMode:"cover",
      marginBottom:10
    },
  });
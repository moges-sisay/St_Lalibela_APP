import React from 'react';
import { Button, StyleSheet, Text, View,Image,ImageBackground } from 'react-native';
import { SafeAreaProvider,useSafeAreaInsets } from 'react-native-safe-area-context';
const image = {uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/images%2F347384806_651949193629819_2342310311102097919_n.jpg?alt=media&token=d0af3c67-dfe9-4000-8546-b83177a6852f'};
function HomeScreen(){
  const insets = useSafeAreaInsets();
    return(
   <View style={{ flex: 1, paddingTop: insets.top }}>
    
    <ImageBackground source={image} resizeMode="cover" style={{ display:"flex",flex:1,
    justifyContent: 'center'}}>
    </ImageBackground>
  </View>    )
}
export default HomeScreen;
import { Text,StyleSheet,Image,ScrollView,View, TouchableHighlight } from "react-native"
import { SafeAreaProvider,useSafeAreaInsets } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import G2 from "./Lalibela Page/G2";
import G1 from "./Lalibela Page/G1";
import G3 from "./Lalibela Page/G3";
import G4 from "./Lalibela Page/G4";
import G5 from "./Lalibela Page/G5";
import G6 from "./Lalibela Page/G6";
import G7 from "./Lalibela Page/G7";
import G8 from "./Lalibela Page/G8";
import G9 from "./Lalibela Page/G9";
import G10 from "./Lalibela Page/G10";
import { useNavigation } from "@react-navigation/native";

function LalibelaComponent() {
  const navigation = useNavigation();
  return (
    <View style={{display:"flex"}}>
    <ScrollView >  
    <View style={{display:"flex",flexDirection:"row"}}>
        <View>
            <TouchableHighlight onPress={() => navigation.navigate('g1')}>
                <Image style={styles.images}
                            
                            source={{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/newforall%2FScreenshot%202024-141.png?alt=media&token=a09deae9-c3da-4fbf-a205-033ba9626603',
                            }}
                        />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('g2')}>
               <Image style={styles.images}
                        
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/newforall%2Fd8.jpg?alt=media&token=6dfca9c8-5892-4943-8603-285b24faf397',
                        }}
                    />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('g3')}>
               <Image style={styles.images}
                        
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/lalibela%2Fimages%20(30).jpg?alt=media&token=663c4684-8b7d-4947-ad08-c7ecd9fad9dd',
                        }}
                    />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('g4')}>
                <Image style={styles.images}
                        
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/newforall%2FScreenshot%202024-06-26%20172210.png?alt=media&token=8d9c60ac-08d7-4289-b6c9-051009fb27e8',
                        }}
                    />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('g5')}>
               <Image style={styles.images}
                        
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/lalibela%2Fimages%20(6).jpg?alt=media&token=e1b075a1-d010-497d-84f9-6ce3c3057fbe',
                        }}
                    />
            </TouchableHighlight>
        </View>
            <View style={{marginLeft:10}}>
                <TouchableHighlight onPress={() => navigation.navigate('g6')}>
                <Image style={styles.images}
                            
                            source={{
                                uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/newforall%2FScreenshot%202024-06-26%20646.png?alt=media&token=d9f0ed99-a3bb-4908-9fbc-e2b4d5a3ddde',
                            }}
                        /> 
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigation.navigate('g7')}>
                    <Image style={styles.images}
                        
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/newforall%2FScreenshot%202024-06-26%201723.png?alt=media&token=6c95e938-0096-4658-9131-90799c9c1a5f',
                        }}
                    />
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigation.navigate('g8')}>
                   <Image style={styles.images}
                        
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/newforall%2Fb3.jpg?alt=media&token=a473d943-d5e2-4a4b-bcf7-cf54175a844c',
                        }}
                    />
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigation.navigate('g9')}>
                   <Image style={styles.images}
                        
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/newforall%2FScreenshot%202024-06-26%20173007.png?alt=media&token=d2d4c685-1ce4-40d7-8c53-f77c80e5834d',
                        }}
                    />  
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigation.navigate('g10')}>
                   <Image style={styles.images}
                        
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/lalibela%2Fdownload%20(9).jpg?alt=media&token=5f7eefc7-7afb-49a7-aaff-fec0f2416e0c',
                        }}
                    /> 
                </TouchableHighlight>
            
       </View>
    </View>
    </ScrollView>   
    </View>
  );
}

function Lalibela() {
  const Stack = createNativeStackNavigator();
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 ,gap:10,marginBottom:70}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        
        <Stack.Screen name="menu" component={LalibelaComponent} />
        <Stack.Screen name="g1" component={G1} options={{ title: 'St.Lalibela' }} />
        <Stack.Screen name="g2" component={G2} options={{ title: 'St.Neakutoleab' }} />
        <Stack.Screen name="g3" component={G3} options={{ title: 'St.yimrhane cristos' }} />
        <Stack.Screen name="g4" component={G4} options={{ title: 'St.harbe' }} />
        <Stack.Screen name="g5" component={G5} options={{ title: 'St.harbe' }} />
        <Stack.Screen name="g6" component={G6} options={{ title: 'St.harbe' }} />
        <Stack.Screen name="g7" component={G7} options={{ title: 'St.harbe' }} />
        <Stack.Screen name="g8" component={G8} options={{ title: 'St.harbe' }} />
        <Stack.Screen name="g9" component={G9} options={{ title: 'St.harbe' }} />
        <Stack.Screen name="g10" component={G10} options={{ title: 'St.harbe' }} />

      </Stack.Navigator>
    </View>
  );
}

export default Lalibela;
const styles = StyleSheet.create({
  images: {
    width:200,
    height:200,
    resizeMode:"contain",
    margin:0.5,
    backgroundColor:"black"
  },
});
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
                                uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/lalibela%2Fimages.jpg?alt=media&token=8f6dfcc9-d86e-431f-89c1-b731903b5d8c',
                            }}
                        />
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('g2')}>
               <Image style={styles.images}
                        
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/lalibela%2FBete_Ghiorghis_(Huis_van_de_heilige_George)%2C_de_best_bewaard_gebleven_kerk_(6821637099).jpg?alt=media&token=608cb825-17b1-41d3-821b-440a5ed4f7b8',
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
                            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/lalibela%2Fimages%20(24).jpg?alt=media&token=5d85391b-1dd7-49e4-80af-bc7d6a542daa',
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
                                uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/lalibela%2Fimages%20(19).jpg?alt=media&token=9368a858-2f17-48cc-a34f-8655f34592fb',
                            }}
                        /> 
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigation.navigate('g7')}>
                    <Image style={styles.images}
                        
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/lalibela%2Fimages%20(18).jpg?alt=media&token=7a44c901-2d49-4586-a25d-b7ff9810ecdf',
                        }}
                    />
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigation.navigate('g8')}>
                   <Image style={styles.images}
                        
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/lalibela%2Fimages%20(16).jpg?alt=media&token=87989dc2-f156-4da8-b794-585ab73160ac',
                        }}
                    />
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigation.navigate('g9')}>
                   <Image style={styles.images}
                        
                        source={{
                            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/lalibela%2Fimages%20(12).jpg?alt=media&token=2c9b2ecd-7555-4760-81f3-35c8aaa5d6f0',
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
    <View style={{ flex: 1 ,gap:10}}>
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
    margin:10,
    backgroundColor:"black"
  },
});
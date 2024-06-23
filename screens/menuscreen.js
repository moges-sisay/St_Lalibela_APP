import { Text, View, Image,TouchableHighlight,StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Lalibela from './Page/st.lalibela';
import Neakutoleab from './Page/st.neakutoleab';
import Yimriha from './Page/st.yimrha';
import Harbe from './Page/st.harbe';
function MenuComponent() {
  const navigation = useNavigation();
  return (
    <View style={{display:"flex",flexDirection:"row"}}>
      <View style={{display:"flex",flexDirection:"row"}}>
          <View style={{display:"flex",flexDirection:"column",gap:10}}>
          <TouchableHighlight onPress={() => navigation.navigate('lalibela')}>
            <Image
              style={styles.images}
              source={{
                uri:
                  'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/lalibela%2FBete_Ghiorghis_(Huis_van_de_heilige_George)%2C_de_best_bewaard_gebleven_kerk_(6821637099).jpg?alt=media&token=608cb825-17b1-41d3-821b-440a5ed4f7b8',
              }}
            />
          </TouchableHighlight>
          <Text>  ስለ ቅዱስ ላሊበላ ቤተ ክርስቲያን </Text>
          <TouchableHighlight onPress={() => navigation.navigate('yimrha')}>
            <Image
              style={styles.images}
              source={{
                uri:
                  'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/yimriha%2Feth-yemre-decorated-windows-det-2012.jpg?alt=media&token=864c62ad-7498-46ae-bef7-37f6fc9bc189',
              }}
            />
          </TouchableHighlight>
          <Text>  ስለ ቅዱስ ይምርሃነ ክርስቶስ ቤተ ክርስቲያን </Text>   
          </View>   
          <View style={{display:"flex", flexDirection:"column", gap:10}}>  
        <TouchableHighlight onPress={() => navigation.navigate('harbe')}>
          <Image
            style={styles.images}
            source={{
              uri:
                'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/gebiremariyam%2F358433837_1626564994436545_6956188362352656053_n.jpg?alt=media&token=5ecdd515-d7f9-4579-8027-46c5b62f42d9',
            }}
          />
                    </TouchableHighlight>
          <Text>ስለ ቅዱስ ሃርቤ ቤተ ክርስቲያን </Text>       
        <TouchableHighlight onPress={() => navigation.navigate('neakutoleab')}>
          <Image
            style={styles.images}
            source={{
              uri:
                'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/neakutoleab%2F437146608_436617595688700_8046965790600286092_n.jpg?alt=media&token=0a5d4949-38e5-44d7-ac79-914728a65eac',
            }}
          />
          </TouchableHighlight>
          <Text>ስለ ቅዱስ ነአኩቶለአብ ቤተ ክርስቲያን </Text>
          </View>
        </View>
    </View>
  );
}

function MenuScreen() {
  const Stack = createNativeStackNavigator();
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingTop: insets.top, marginTop: 1 ,gap:10,backgroundColor:"white"}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        
        <Stack.Screen name="Menu" component={MenuComponent} />
        <Stack.Screen name="lalibela" component={Lalibela} options={{ title: 'St.Lalibela' }} />
        <Stack.Screen name="neakutoleab" component={Neakutoleab} options={{ title: 'St.Neakutoleab' }} />
        <Stack.Screen name="yimrha" component={Yimriha} options={{ title: 'St.yimrhane cristos' }} />
        <Stack.Screen name="harbe" component={Harbe} options={{ title: 'St.harbe' }} />
      </Stack.Navigator>
    </View>
  );
}

export default MenuScreen;
const styles = StyleSheet.create({
  images: {
    width:200,
    height:200,
    resizeMode:"contain",
    margin:10,
    backgroundColor:"black"
  },
});
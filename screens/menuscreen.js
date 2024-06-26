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
    <View style={{display:"flex",flexDirection:"row",marginBottom:70}}>
      <View style={{display:"flex",flexDirection:"row"}}>
          <View style={{display:"flex",flexDirection:"column",gap:10}}>
          <TouchableHighlight onPress={() => navigation.navigate('lalibela')}>
            <Image
              style={styles.images}
              source={{
                uri:
                  'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/newforall%2Fd8.jpg?alt=media&token=6dfca9c8-5892-4943-8603-285b24faf397',
              }}
            />
          </TouchableHighlight>
          <Text>  ስለ ቅዱስ ላሊበላ ቤተ ክርስቲያን </Text>
          <TouchableHighlight onPress={() => navigation.navigate('yimrha')}>
            <Image
              style={styles.images}
              source={{
                uri:
                  'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/newforall%2FScreenshot%202054.png?alt=media&token=69d70dd2-fca9-4e99-ae2c-b178b21a5e33',
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
                'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/newforall%2Fchurch-inside-the-cave%20(1).jpg?alt=media&token=f0aa64f0-9aa2-40a8-afa4-45d1dfee119e',
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
    margin:1,
    backgroundColor:"black"
  },
});
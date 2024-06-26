import React, { useState } from 'react';
import { Text, View, FlatList, Button, StyleSheet, Dimensions } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const data = [
  {
    id: 1,
    text: `ቤተ ደናግል።
    ከቤተ ማርያም በስተ ደቡብ ምዕራብ ስንወጣ ቤተ ደናግል ቤተክርስቲያን ይገኛል።
    ይችን ቤተ ደናግል ብሎ ያነጻት ቤተ መቅደስ የሰላሳ ስድስቱ ቅዱሳን አንስት መታሰቢያ ነት።
    ከቤተ መቅደሱና ከቤተ ምቅደሱ ውጭ አራት አምዶች ይገኛሉ። አራት መሆናቸው የአራቱ ወንጌላዉያን ምሳሌ ናቸው።
    ቤተ ደናግል ወጣ ብሎ ወደ ቤተ ማርያም አንገቱን ያዘነበለ ዘውድ ይመስላል። 
    ዘውድ የመሰለበት ምክኒያት እግዚያብሄር ለደናግላኑ የሚሰጣቸውን የንጽህና አክሊል ለማምልከት ነው።
    በቤተ ደናግል ከውጭ አንድ አምድ ለብቻው አለ። 
    ይሀውም ለደናግል መመክያ የሆነች የእመቤታችን የቅድስት ድንግል ማርያም ምሳሌ ነው።  በዚህ ቤተ መቅደስ የሰላሳ ስድስቱ ደናግላን ጽላት አለ። 
     በዚሁ ጊቢ ውስጥ መነኮሳት መገበሪያ የሚፍጩባቸው የኩም ወፍጮውች አሉ።ከቤተ ማርያም በስተ ደቡብ ምዕራብ ስንወጣ ቤተ ደናግል ቤተክርስቲያን ይገኛል።
    ይችን ቤተ ደናግል ብሎ ያነጻት ቤተ መቅደስ የሰላሳ ስድስቱ ቅዱሳን አንስት መታሰቢያ ነት።
    ከቤተ መቅደሱና ከቤተ ምቅደሱ ውጭ አራት አምዶች ይገኛሉ። አራት መሆናቸው የአራቱ ወንጌላዉያን ምሳሌ ናቸው።
    ቤተ ደናግል ወጣ ብሎ ወደ ቤተ ማርያም አንገቱን ያዘነበለ ዘውድ ይመስላል። 
    ዘውድ የመሰለበት ምክኒያት እግዚያብሄር ለደናግላኑ የሚሰጣቸውን የንጽህና አክሊል ለማምልከት ነው።
    በቤተ ደናግል ከውጭ አንድ አምድ ለብቻው አለ። 
    ይሀውም ለደናግል መመክያ የሆነች የእመቤታችን የቅድስት ድንግል ማርያም ምሳሌ ነው።  በዚህ ቤተ መቅደስ የሰላሳ ስድስቱ ደናግላን ጽላት አለ። 
     በዚሁ ጊቢ ውስጥ መነኮሳት መገበሪያ የሚፍጩባቸው የኩም ወፍጮውች አሉ።`,
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/lalibela%2Fimages%20(24).jpg?alt=media&token=5d85391b-1dd7-49e4-80af-bc7d6a542daa',
  },
  
];

const Item = ({ item }) => {
  const [showFullText, setShowFullText] = useState(false);

  const truncatedText = showFullText ? item.text : item.text.substring(0, 150) + '...'; // Adjust truncation length as needed

  return (
    <View style={{ margin: 10,marginBottom:70 }}>
      <ImageViewer
        imageUrls={[{ url: item.imageUrl }]}
        enableSwipeDown
        renderIndicator={() => null} 
        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height / 2 }}
      />
      <Text>{truncatedText}</Text>
      {item.text.length > 150 && ( 
        <Button title={showFullText ? 'በከፊል ይዩ' : 'ሙሉውን ይዩ'} onPress={() => setShowFullText(!showFullText)} />
      )}
    </View>
  );
};

const MyList = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item item={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default MyList;

const styles = StyleSheet.create({

});

import React, { useState } from 'react';
import { Text, View, FlatList, Button, StyleSheet, Dimensions } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const data = [
  {
    id: 1,
    text: `ቤተ አማኑኤል።
  ቅዱስ ላሊበላ ከሃያ ሶስት አመት ስራ ውስጥ አስር አመት የፈጀበት ስራ ይህ ነው።
  የቤተ አማኑኤል የመስኮቶቹ ቅርጽ የአክሱም ሃዉልት ምሳሌዎች ናቸው። 
  ቤተ አማኑኤል በስፋቱ ከቤተ መዳህኒ አለም ቀጥሎ ሁለተኛ ነው።
  ቤተ አማኑኤል በሰማያዊት እየሩሳሌም በጽረ አርያም ይመሰላል፣
  ቤተ አማኒኤል እንደ ቤተ ማርያም ባለፎቅ ህንጻ ነው። ቤተ አማኑኤል በአራት አምዶች የቆመ ነው የአራቱ ወንጌላዉያን ምሳሌ ነው።
  `,
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/lalibela%2Fimages%20(12).jpg?alt=media&token=2c9b2ecd-7555-4760-81f3-35c8aaa5d6f0',
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

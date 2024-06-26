import React, { useState } from 'react';
import { Text, View, FlatList, Button, StyleSheet, Dimensions } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const data = [
  {
    id: 1,
    text: `ቤተ አባ ሊባኖስ።
    ቤተ አባ ሊባኖስ እንደሌሎች ውቅር አብያተ ክርስቲያናት ብቻውን የቆመ አይደለም ከአንድ ቋጥኝ ጋር የተያያዘ ነው።
    ይህን ውቅር ህንጻ ያሰራችው የቅዱስ ላሊበላ ባለቤት እቴጌይቷ መስቀል ክብራ ናት።
    የውስጡ ክፍል በአራት አምዶች የቆመ ነው።
    ጻድቁ አባ ሊባኖስ ከሮም የመጡ ጻድቅ ናቸው አባ ሊባኖስ በደብረ ሮሃ አርባ አመት ሲጸልዩ ቆይተዋል፣ ከአርባ አመት በኋላ ደብረሊባኖስ ሂደው ገድመው ከቆዩ በኋላ ለአባታችን ለአቡነ ተክለሃይማኖት አስረክበው እረፍታቸው በዚሁ በደብረ ሮሃ ያደረጉ ጻድቅ አባት ናቸው።
    ይህ በስማቸው የተሰራው ቤተ ክርስቲያን ለጻድቁ አባታችን እና ለእቴጌይቱ መስቀል ክብራ መታሰቢያ የተሰራ ድንቅ ቤተ መቅደስ ነው።
   
    `,
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/lalibela%2Fimages%20(16).jpg?alt=media&token=87989dc2-f156-4da8-b794-585ab73160ac',
  },
  
];

const Item = ({ item }) => {
  const [showFullText, setShowFullText] = useState(false);

  const truncatedText = showFullText ? item.text : item.text.substring(0, 150) + '...'; // Adjust truncation length as needed

  return (
    <View style={{ margin: 10 ,marginBottom:70}}>
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

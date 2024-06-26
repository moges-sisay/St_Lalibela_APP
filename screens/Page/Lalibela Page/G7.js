import React, { useState } from 'react';
import { Text, View, FlatList, Button, StyleSheet, Dimensions } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const data = [
  {
    id: 1,
    text: `ቤተ ገብርኤል።
    ቤተ ገብርኤል ቤተ መቅደሱ መግቢያና መው ጠባብ በር ይላታል 
    "ውጫ አልስራለትም ጠባብ አንቀፅ ወ መቃን ፍኖታ በሯ ፀባብ መንገዱ ቀጭን ማለት ነው 
    ትርጓሜው የሀጢአት ስራና የዕድቅ መካከል ጠባብ በር ጠባብ መንገድ መኖርሩን ያስረዳል።
     ይህንን መስራት ስጋን ማድከም መስገድ ነው ማጥበብ የፅድቅ ጠባብ በር ተብሎ ይመሰላል ስለሆነ የጽድቅ ጠባብ በር ተብሎ ይመሰላል።
    ከቤተ ምካኤል ወጥተን ወደ ቤተ ግብርኤል ስንሄድ ወደ ቤተ ገብርኤል የሚያስገባ በድንጋይ የተረበረበ ድልድይ እናገኛለን።
    የቤተ ገብርኤል በሮች በእንጨት የተሰሩ ናችው።
    የቤተ ገብርኤል ይታችኛው ክፊል የረጋ ዉሃ አለ።`,
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/lalibela%2Fimages%20(18).jpg?alt=media&token=7a44c901-2d49-4586-a25d-b7ff9810ecdf',
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

import React, { useState } from 'react';
import { Text, View, FlatList, Button, StyleSheet, Dimensions } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const data = [
  {
    id: 1,
    text: `ቤተ መስቀል።
    ከቤተ ማርያም በምስራቅ በኩል ስንወጣ ፊት ለፊት ቤተ መስቅልን እናገኛለን።
    ቤተ መስቀል የቅዱስ ላሊበላ ሌላው ድንቅ የጥበብ ስራ ነው። ቤተ ክርስቲያኑ በአራት አምዶች የቆመና ከሌሎች ፍልፍል ህንጻዎች አነስ ያለ ነው።
    የቤተ መስቀል ቤተ ክርስቲያን ሁለት በሮች ብቻ አሉት። ቤተ መቅደሱ ከዉጭ በኩል ሲታይ 10 አርኮች ወይንም ግማሽ ጨረቃ የሚመስሉ ቅርጾች አሉት።
    ምሳሌ አላቸው አስር መሆናቸው የአስርቱ ቃላተ ዖሪት ምሳሌ እና አንድም አስር መሆናቸው የአስሩ ቤተ መቅደስ ምሳሌ ናቸው።
    የቅርጹ አንድ መሆን አስሩም ቤተ መቅደሶች ከአንድ ቋጥኝ የመገኘታቸው አንድምታ ነው። ቤተ መስቀል ደጃፍ ላይ የሚገኘው ትንሹ አምድ የሙሴ ምሳሌ ነው።
    ሙሴ የቃልኪዳኑን ታቦት ለመቀበን በደብረሲና በጌታ ፊት የቆመበት መሳሌ ነው።
    በዚህ ቤተክርስቲያን ቅዱስ ላሊበላ ከእየሩሳሌም ያመጣው ታቦተ መስቅል የሚገኝ ሲሆን ታሪካዊ የሆኑ ታምረ ማሪያም እና ታምረ እየሱስ እንዲሁም ሌሎች የብራና መጽሃፍት ይገኙበታል።
    ቤተ መስቅል ከቤተ ማሪያም ጋር በአንድ ግቢ ይገኛሉ።ከቤተ ማርያም በምስራቅ በኩል ስንወጣ ፊት ለፊት ቤተ መስቅልን እናገኛለን።
    ቤተ መስቀል የቅዱስ ላሊበላ ሌላው ድንቅ የጥበብ ስራ ነው። ቤተ ክርስቲያኑ በአራት አምዶች የቆመና ከሌሎች ፍልፍል ህንጻዎች አነስ ያለ ነው።
    የቤተ መስቀል ቤተ ክርስቲያን ሁለት በሮች ብቻ አሉት። ቤተ መቅደሱ ከዉጭ በኩል ሲታይ 10 አርኮች ወይንም ግማሽ ጨረቃ የሚመስሉ ቅርጾች አሉት።
    ምሳሌ አላቸው አስር መሆናቸው የአስርቱ ቃላተ ዖሪት ምሳሌ እና አንድም አስር መሆናቸው የአስሩ ቤተ መቅደስ ምሳሌ ናቸው።
    የቅርጹ አንድ መሆን አስሩም ቤተ መቅደሶች ከአንድ ቋጥኝ የመገኘታቸው አንድምታ ነው። ቤተ መስቀል ደጃፍ ላይ የሚገኘው ትንሹ አምድ የሙሴ ምሳሌ ነው።
    ሙሴ የቃልኪዳኑን ታቦት ለመቀበን በደብረሲና በጌታ ፊት የቆመበት መሳሌ ነው።
    በዚህ ቤተክርስቲያን ቅዱስ ላሊበላ ከእየሩሳሌም ያመጣው ታቦተ መስቅል የሚገኝ ሲሆን ታሪካዊ የሆኑ ታምረ ማሪያም እና ታምረ እየሱስ እንዲሁም ሌሎች የብራና መጽሃፍት ይገኙበታል።
    ቤተ መስቅል ከቤተ ማሪያም ጋር በአንድ ግቢ ይገኛሉ።`,
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/lalibela%2Fimages%20(30).jpg?alt=media&token=663c4684-8b7d-4947-ad08-c7ecd9fad9dd',
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

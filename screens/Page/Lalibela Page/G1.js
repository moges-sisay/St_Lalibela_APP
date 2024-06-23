import React, { useState } from 'react';
import { Text, View, FlatList, Button, StyleSheet, Dimensions } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const data = [
  {
    id: 1,
    text: `የቅዱስ ላሊበላ ሌላው ድንቅ የመንፈስ ቅዱስ ስራ ቤተ መዳህኒ አለም።
    የቤተ መዳህኒ አለም ህንጻ በግዙፍነቱ ከሁሉም ህንጻዎች ይበልጣል።
    በሌላ አተራሩ ቤተ አብይ ይባላል ትርጉሙም ትልቅ ማለት ነው።
    ከቤተ ክርስቱያኑ ውጭ ያሉ አምዶች ሰላሳ አራት ሲሆኑ ከቤተ ክርስቲያኑ ውስጥ ያሉ አምዶች ደግሞ 38 ናቸው። የነዚህ ድምር ሰባ ሁለት ይሆናል። 
    የሰባ ሁለቱ አርድአት ምሳሌ ናቸው። ውስጡ ከፍ ያለ ነው ሰላሳ አንድ ሜትር ያህል ከፍ ይላል። ዙሪያውን በአምዶች አጊጧል።
    ከመቅደሱ ጀርባ ግድግዳ ላይ በጌታ ስቅለት ጊዜ ከሰማይ የረገፉትን ከዏክብት ለማሰብ የጨረቃንና የከዏክብት ስራ ይታያሉ።
    ይህ ቤተ መቅደስ ሰፊ በመሆኑ በአብርሃም ድንኳን ተመስሏል። ለምን ቢሉ የአበ ብዙሃን አባት ክርስቲያኖች ተስተናግደውበታልና።
    አንድም በስፋቱ ከሰባቱ ሰማያት በአንዱ ተመስሏል ሰማይ ሁድድ ይባላል።
    ከቤተ መቅደሱ በር ፊት ለፊት የሶስት የመቃብራት ምሳሌ የሆኑ በመጠን የተለያዩ ከላይ ወደታች የተሰሩ መቃብራት ይገኛሉ።
    እነሱም ምሳሌ አላቸው እነሱም ላሊበላ ከእየሩሳሌም ሲመለስ የአባቶችን በረከት ፈልጎ የሶስቱን አበው የመቃብር አፈር አምጥቶ ስለነበር የቅዱሳኑን በረከትና እረዴት ዘወትር ለመዘከር ከመቅደሱ ፊት ለፊት የአባቶች አባት አብርሃም የጌታ ምሳሌ ይስሃቅ እና እስሪኤል የተባለ ያቆብ የመቃብራቸው ምሳሌ ይገኛል።
    በስተ ምዕራብ በትልቁ በር ፊት ለፊት ከቅኔ ማህሌቱ በስተጀርባ ከሚገኘው አንድ አምድ አፍሮ አይገባ መስቀል የተገኘበት የተፈለፈለ ዋሻ አለ። አፍሮ አይገባ መስቁል ቁዱስ ላሊበላ እነዚህን የተወደዱ አብያተ ክርስቱያናት ሲያኒጽ በዉስጡ ያገኘው ታላቅ መስቅል ነው።
           `,
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/lalibela%2Fimages.jpg?alt=media&token=8f6dfcc9-d86e-431f-89c1-b731903b5d8c',
  },
  
];

const Item = ({ item }) => {
  const [showFullText, setShowFullText] = useState(false);

  const truncatedText = showFullText ? item.text : item.text.substring(0, 150) + '...'; // Adjust truncation length as needed

  return (
    <View style={{ margin: 10 }}>
      <ImageViewer
        imageUrls={[{ url: item.imageUrl }]}
        enableSwipeDown
        renderIndicator={() => null} // Optional: Disable indicator
        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height / 2 }}
      />
      <Text>{truncatedText}</Text>
      {item.text.length > 150 && ( // Only show button if text is long
        <Button title={showFullText ? 'See Less' : 'See More'} onPress={() => setShowFullText(!showFullText)} />
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

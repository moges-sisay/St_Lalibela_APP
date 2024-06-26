import React, { useState } from 'react';
import { Text, View, FlatList, Button, StyleSheet, Dimensions } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const data = [
  {
    id: 1,
    text: `ቤተ መርቆሪወስ።
  ቤተ መርቆሪዎስን በገነት አምሳል ከወደ ሰሜን
በኩል ሲገባ የጨለመ መንገድ  አለው የሲኦል ምሳሌ ሲሆን ሲወጣ በቤተ መርቆሬዎስ ይደረሳል 
ስለሆነ በስተምስራቅ በኩል ገነት ስለሆነች ወደ ገነት መልካም የሰሩ እንደሚሻገሩ ምሳሌያቸውን ስራ ወይም ወደ ገነት ተሻገሩ፡፡
 ክፉ ስራ የጨለማ ኑሮ እንዳው መልካም ስራ ጨለማን ተሻግሮ ገነት መግባት እንደሚያስችል
ገነት ምሳሌ አድርጎ መርቆሬዎስን ሰራት፡፡ ጨለማውን አልፎ ስለሚገባ ነው::
    ወደ ቤተ ገብርኤል የሚያስገባውን ድልድይ ተሻግረው ሌላውን ድንቅ ስራ ለማግኘት በአምሳለ ሲዖል ማለፍ ግድ ይላል።
     ከአስር እስከ አስራ አምስት ደቂቃ በሚፈጅ ድቅድቅ ጨለማ መጓዝ።
    ውስጥ ለውስጥ የተቦረቦረ ዋሻ ነው ምንም አይነት ብርሃን የለውም እግር የት እንደሚያርፍ አይታወቅም እጅ የት ምን እንደሚይዝ አይገምትም።
    ከአንድ ሰው በላይ ሰለማያስኬድ በተራና በሰልፍ የሲኦልን መከራ እያሰቡ እግዚአብሄር ከሲኦል መከራ እንዲያድነን እየተማጸኑ ወደሚቀጥለው
     የዋሻ መግቢያ ይጓዛሉ፣ ጭላንጭል ብርሃን እያዩ ወደ ዋሻወ አፍ ሲቃረቡ ፊት ለፊት የቤተ መርቆሪዎስን በር ከዋሻው በላይ ከደረጃው ከፍ ብሎ ይታያል።
    በቤተ መርቆሪዎስ በቤተ መቅደሱ ዙሪያ አስራ አምስት አምዶች ይገኛሉ።
    በቤተ መርቆሪወስ እና ቤተ ገብርኤል አካባቢ ቁጥራቸው የበዛ መነኮሳት ማደሪያና መጸለያዎች ይገኛሉ።
    የቤተ መርቆሪወስ መንበር ከድንጋይ ተጠርቦ ከህንጻው ጋር አብሮ የተሰራ ነው።
    በቤተ መርቆሪወስ ውስጥ የሀያ አራቱ ካህናተ ሰማይ ስዕል ተስሎ ይገኛል።
    የቤተ መርቆሪወስ ጠቅላላ አምዶች ሀያ አራት ናቸው የሀያ አራቱ ካህናተ ሰማይ ምሳሌ ናቸው።
    
    `,
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/lalibela%2Fimages%20(6).jpg?alt=media&token=e1b075a1-d010-497d-84f9-6ce3c3057fbe',
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

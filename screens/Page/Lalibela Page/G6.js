import React, { useState } from 'react';
import { Text, View, FlatList, Button, StyleSheet, Dimensions } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const data = [
  {
    id: 1,
    text: `ቤተ ማርያም የቅዱስ ላሊበላ የመጀመሪያ ስራ ነች፡፡ 
    ጻድቁ ቅዱስ ላሊበላ የስራዉ መጀመሪያ ያደረገው የእመቤታችን ቅድስት ድንግል ማርያም ቤተ መቅደስ በማነጽ ነዉ።
    የእመቤታችን ቅድስት ድንግል ማሪያም ግቢ ቅዱስ ላሊበላ ካነጻቸው ቤተ ክርስቲያኖች በስፋት 2ኛ ነው።
    የስራዉን መጀመሪያ እመቤታችንን ያደረገው ቅዱስ ላሊበላ ቤተ ማርያምን 1156 ዐመተ ምህረት ማነጽ ጀመረ።
    ቤተ ማርያም ባለ ፎቅ ናት ፎቅ ናት ፎቁ 7 ክፍል አለዉ እሱም የሰባቱ ሰማያት ምሳሌ ነው። እነሱም 
    1፣ ጽረ_አርህያም 
    2፣መንበረ መንግስት 
    3፣ሰማይ ሁዱድ
    4፣እየሩሳሌም ሰማያዊት
    5፣እዮር
    6፣ራማ እና
    7 ኤረር ናቸው።
    እንድሁም 3 በሮች፣ 12 አምዶች እና 32 መስኮቶች አሏት።
    ህንጻው በስላሴ ምሳሌነት ከላይ ወደ ታች ለየት ባለ ቅርጽ በ3 የተከፈለ ሲሆን በመካከሉ ላይ የጌታን ስነ ስቅለት የሚያስታውስ የመስቀል ቅርጽ ተቀርጿል። 
    ትንሽ ዝቅ ብሎ ከጌታ ጋር የተሰቀሉ ዳርቅስ እና ጢጦስ ለምዘከር 2 ትንንሽ መስቀሎች ይገኛሉ።
    3ቱ ደጃፎች እያንዳንዳቸው ሁለት ሁለት አምዶች አሏቸው። ሶስቱ ደጃፎች የስላሴ
     የሶስቱ ደጃፎች ሁለት ሁለት አምድ በድምሩ ስድስት የስድስቱ ቅላተ ወንጌል ምሳሌ። የሚተረጎም ህንጻ የሚነበብ መጻሃፍት ናቸዉ የቅዱስ ላሊበላ ስራዎች።
    ወደ ቤተ ማርያም ወደ ውስጥ እንግባ፣ ወደ ውስጥ ስንገባ ወደ ፎቁ የሚያወጣ አንድ በር አለ። በመንበሩ ግራና ቀኝ ሁለት በሮች አሉ። 
    መቅደሱ ዉስጥ ስድስት አምዶች አሉ ሁሉም በእኩል ቅርጽ የተሰሩ ሲሆኑ ከመካከል ያለችው አምድ ከሁሉም ልዩ ናት እንደልዩነቷም ልዩ ስም አላት አምደ ብርሃን ትባላለች። 
    ቅዱስ ላሊበላ ስራውን ሳይጀምር አግዚአብሄር ለመሰረትነት ያሳየው የብርሃን አምድ ነች። በዚች አምድ ላይ ከላይ እስከታች ስዕላት ተቀርጸውባታል።ቤተ ማርያም የቅዱስ ላሊበላ የመጀመሪያ ስራ ነች፡፡ 
    ጻድቁ ቅዱስ ላሊበላ የስራዉ መጀመሪያ ያደረገው የእመቤታችን ቅድስት ድንግል ማርያም ቤተ መቅደስ በማነጽ ነዉ።
    የእመቤታችን ቅድስት ድንግል ማሪያም ግቢ ቅዱስ ላሊበላ ካነጻቸው ቤተ ክርስቲያኖች በስፋት 2ኛ ነው።
    የስራዉን መጀመሪያ እመቤታችንን ያደረገው ቅዱስ ላሊበላ ቤተ ማርያምን 1156 ዐመተ ምህረት ማነጽ ጀመረ።
    ቤተ ማርያም ባለ ፎቅ ናት ፎቅ ናት ፎቁ 7 ክፍል አለዉ እሱም የሰባቱ ሰማያት ምሳሌ ነው። እነሱም 
    1፣ ጽረ_አርህያም 
    2፣መንበረ መንግስት 
    3፣ሰማይ ሁዱድ
    4፣እየሩሳሌም ሰማያዊት
    5፣እዮር
    6፣ራማ እና
    7 ኤረር ናቸው።
    እንድሁም 3 በሮች፣ 12 አምዶች እና 32 መስኮቶች አሏት።
    ህንጻው በስላሴ ምሳሌነት ከላይ ወደ ታች ለየት ባለ ቅርጽ በ3 የተከፈለ ሲሆን በመካከሉ ላይ የጌታን ስነ ስቅለት የሚያስታውስ የመስቀል ቅርጽ ተቀርጿል። 
    ትንሽ ዝቅ ብሎ ከጌታ ጋር የተሰቀሉ ዳርቅስ እና ጢጦስ ለምዘከር 2 ትንንሽ መስቀሎች ይገኛሉ።
    3ቱ ደጃፎች እያንዳንዳቸው ሁለት ሁለት አምዶች አሏቸው። ሶስቱ ደጃፎች የስላሴ
     የሶስቱ ደጃፎች ሁለት ሁለት አምድ በድምሩ ስድስት የስድስቱ ቅላተ ወንጌል ምሳሌ። የሚተረጎም ህንጻ የሚነበብ መጻሃፍት ናቸዉ የቅዱስ ላሊበላ ስራዎች።
    ወደ ቤተ ማርያም ወደ ውስጥ እንግባ፣ ወደ ውስጥ ስንገባ ወደ ፎቁ የሚያወጣ አንድ በር አለ። በመንበሩ ግራና ቀኝ ሁለት በሮች አሉ። 
    መቅደሱ ዉስጥ ስድስት አምዶች አሉ ሁሉም በእኩል ቅርጽ የተሰሩ ሲሆኑ ከመካከል ያለችው አምድ ከሁሉም ልዩ ናት እንደልዩነቷም ልዩ ስም አላት አምደ ብርሃን ትባላለች። 
    ቅዱስ ላሊበላ ስራውን ሳይጀምር አግዚአብሄር ለመሰረትነት ያሳየው የብርሃን አምድ ነች። በዚች አምድ ላይ ከላይ እስከታች ስዕላት ተቀርጸውባታል።`,
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/lalibela%2Fimages%20(19).jpg?alt=media&token=9368a858-2f17-48cc-a34f-8655f34592fb',
  },
  
];

const Item = ({ item }) => {
  const [showFullText, setShowFullText] = useState(false);

  const truncatedText = showFullText ? item.text : item.text.substring(0, 150) + '...'; // Adjust truncation length as needed

  return (
    <View style={{ margin: 10, marginBottom:70}}>
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

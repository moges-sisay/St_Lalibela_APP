import React, { useState } from 'react';
import { Text, View, FlatList, Button, StyleSheet, Dimensions } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const data = [
  {
    id: 1,
    text: `ቤተ ጌዎርጊስ።
    ቤተ ጌወርጊስ ከሌሎች ቤተ ክርስቲያኖች ወጣ ብሎ ብቻውን ይገኛል።
    ቤተ ጌወርጊስ የቅዱስ ላሊበላ የመጨረሻው የዕነጻ ስራ ነው በላስታ ደብረሮሃ።
    ወደ ጌዎርጊስ መንገድ ሲጀመር በስተግራ በምስራቅ በኩል ዮርዳኖስ ወንዝ ተብሎ የተሰየመ ይገኛል።
    እዛው አካባቢ ጌታችን የተጠመቀበትን ቦታ ለመዘከር በመስቀል ቅርጽ የተሰራ ድንጋይ ተተክሎ ይገኛል ከዚህም ጥቂት ተጉዘው የቆሙበተ ስፍራ ሁነው አይን ወደ ምድር ሲዎረውሩ ወደ ታች ተቦርቡቦ ከመሬት ወደ ላይ የወጣ ዙሪያውን በመስቀል ቅርጽ የተዋበ በኪነ ህንጻው ከሁሉም ውቅር አብያተ ክርስቲያናት የላቀና ሰማያዊ ጥበብ የተገለጸበት ቤተ ክርስቲያን በትንግርት ይመለከታሉ እሱም የኖህ መርከብ ምሳሌ ቤተ ጌወርጊስ።
    ከላይ ሁነው የቤተ ጌወርጊስን ጣራ ቢያዩት አስራ ሁለት ድርብርብ መስቀሎች ይታያሉ ምሳሌያቸውም አስራ ሁለት ሃዏሪያት ምሳሌ ነው።
    በአስራ አንዱም ቤተ ክርስቲያናት አኒዳችም ነገር ያለ ምክኒያትና ያለ ምሳሌ አልተቀመጠም እያንዳንዱ የህንጻው ልኬት እና ቅርጽ መንፈሳዊና መጻፍ ቅዱሳዊ ትርጓሜ ይሰጣል።
    ከጣሪያው ጀምሮ እስከ መሰረቱ ከላይ ወደታች የተቀረጸ የመስቀል ቅርጽ ነው ቤተ ጌወርጊስ።
    የማይከፈቱ ነገርግን የመስኮት ቅርጽ ያላቸው በሃረግ ቅርጽ የተቀረጸባቸው እላያቸው ላይ ድንቅ የጥበብ ዉጤት የሚታይባችው መስኮቶች በዙሪያው ይገኛሉ።
    ይህ በኖህ መርከብ ምሳሌ የሆነው ቅዱስ ጌወርጊስ ኖህ የላካት እርግብ እና የምስራች ቄጤማ አምጥታ ያሳየችበትን መስኮት ለመዘከር አንድ የመስኮት ምሳሌ ይገኝበታል።
    ቤተ ጌወርጊስ ሃያ አራት መስኮቶች አሉት የላይኞቹ አስራ ሁለት የተከፈቱ ናቸው የታችኞቹ ዉሃ እንዳያስገቡ የተደፈኑ ናቸው ልክ እንደ ኖህ መርከብ።
    በቤተ ጌወርጊስ ቤተ መቅደስ ዉስጥ በ አስራ አንደኛው ክፊለዘመን በጨርቅ እኒደተሳለ የሚነገርለት የቅዱስ ጌወርጊስ ስዐል ይገገኛል።
    በቤተ ክርስቲያኑ ውስጥ በወይራ እንጭት የተሰራ የእንጨት ሳጥን ይገኛል ይህም ሳጥን ቅዱስ ላሊበላ እነዚህን ድንቅ ዉቅር አብያተ ቤተ ክርስቲያናት እየሰራ ሲመሽ መሳሪያዎችን በዚህ ሳጥን ያስቀምጣቸው ነበር።
    `,
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/lalibela%2FBete_Ghiorghis_(Huis_van_de_heilige_George)%2C_de_best_bewaard_gebleven_kerk_(6821637099).jpg?alt=media&token=608cb825-17b1-41d3-821b-440a5ed4f7b8',
  },
  
];

const Item = ({ item }) => {
  const [showFullText, setShowFullText] = useState(false);

  const truncatedText = showFullText ? item.text : item.text.substring(0, 150) + '...'; // Adjust truncation length as needed

  return (
    <View style={{ margin: 10,marginBottom:70}}>
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

import React, { useState } from 'react';
import { Text, View, FlatList, Button, StyleSheet, Dimensions } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const data = [
  {
    id: 1,
    text: `ደብረ ሲና እና ጎሎጎልታ
    የቅዱስ ላሊበላ ሌላው ድንቅ ስራ ደብረ ሲና እና ጎለጎታ ወይም ቤተ ቅዱስ ምካኤል ይባላል።
    ቤተ ምካኤል እራሱን በቻለ ቅጥር ግቢ ውስጥ ይገኛል። መጠሪያው ቤተ ምካኤል ይሁን እንጅ ምሳሌው የቤተ ጎለግታ እና የቤተ ደብረ ሲና ነው።
    በመጀመሪያው ስፍራ የቅዱስ ላሊበላ ነፍስ የወጣበት የጽሎት ቤት ይገኛል።
    በቤተ ምካኤል የተለያዩ መቅደሶች ይገኛሉ እነሱም የቅዱስ ሚካኤል የቅዱስ ስላሴ የእናታችን ኪዳነ ምህረት እና የቅዱስ ላሊበላ መቅደሶች ናቸው።
    እኒህም ታቦቶች በአንድነት ጎለጎታ ተብለው ተሰይመዏል። እነዚህም ውስጥ ለውስጥ የተገናኙ ሲሆን ከጎለጎታ ጀርባ የቅዱስ ላሊበላ መቃብር ይገኛል።
    የቤተ ጎለጎታ ቤተ ምቅደስ ሶስት መግቢያ በር እና ሁለት ደጃፎች አሉት ከውጭ ከቤተ ማርያም አቅጣጫ በመስቀል ቅርጽ ያጌጡ ስድስት መስኮቶች ይገኛሉ።
    የደብረ ሲና ቤተ ምቅደስ ጣራው በተለያዩ የምስቅል ቅርጾች ያገጠ ነው።
    በዚህ መቅደስ ንጉሱ እራሱ ቅዱስ ላሊበላ ሲጸልይበት የነበረ አንድ መስቅለና አንድ መቋሚያ አለ።
    ከቅዱስ ላሊበላ መቃብር ከፍ ብሎ የእየሱስ ክርስቶስ ግንዘት ስዕል አለ ከስዕሉ ከፍ ብሎ ደግሞ ናዝሪትና ገሊላ ተስለው ይገኛሉ ምሳሌቸውም ጌታችን እየሱስ ክርስቶስ ከናዝሪት ገሊላ ከገሊላ ናዝሪት ተመላልሶ ማስተማሩን ለመዘከር ነው።
    በዚህ ቅጥር ግቢ ውስጥ ዝናብና ጎርፍ ሊያገኘው በማይችል ጉድጓግ ውስጥ የቅዱስ ሚካኤል ጸበል ይገኛል።
    ሞልቶ ወደ በሩ ሲቃረብ ምዕመናን ይዎስዱታል። 
    በዚሁ ቤተ መቅደስ የጻድቁ ቅዱስ ላሊበላ አጽም ይገኛል።
    በአንድ በኩል ጠባብ በር አለች ጎል ትባላለች በውስጧም አራት ሰው ብቻ ታስቆማለች ጌታ በቤተልሄም የተወለደባት የከብቶች በረት ምሳሌ ናት።
    ከመንበሩ ጀርባ ጌተ ሰማኒ የሚባል ቦታ አለ በስላሴ መንበር ላይ ክሩቤል መንበሩን ይዘው የሚያሳይ ድንቅ ቅርጽ ተቀርጾበታል። 
    ከቤተ ሚካኤል ሊወጡ ሲሉ ወደ ቤተ ጌዎርጊስ ከሚወስደው መንገድ ላይ አንዲት ጉብ ያለች ቦታ ያገኛሉ ምሳሌዋም የሰው ልጆች ሁሉ አባት የአዳም ምሳሌ ናት።
    `,
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/lalibela%2Fdownload%20(9).jpg?alt=media&token=5f7eefc7-7afb-49a7-aaff-fec0f2416e0c',
  },
  
];

const Item = ({ item }) => {
  const [showFullText, setShowFullText] = useState(false);

  const truncatedText = showFullText ? item.text : item.text.substring(0, 150) + '...'; 

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

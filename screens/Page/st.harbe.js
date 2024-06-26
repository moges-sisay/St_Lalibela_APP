import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const images = [
  {
    id: 1,
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/gebiremariyam%2F358432191_1625929991166712_942823037158153786_n.jpg?alt=media&token=07536df9-4e32-41ed-976c-3b171fa50cb4',
    description: `ሃርበይ ማለት አርበኛ የጀግና ስም ነው፡፡ ያርብሃዊ ማለት የጀግኖች አምባ ማለት ሲሆን ቅዱስ ገ/ማርያም / ቃርበይ፤ ያርብሃዊ/ የቅዱስ ላሊበላ ታላቅ ወንድም ነው፡፡ አባቱ ዛንሥዩም እናቱ ዑፀፍተ ወርቅ /ሁለተኛ ስሟ ክርስቶስ ዘመዳ/ ይባላሉ፡፡ 
    ይህ ፃድቅና ንጉሥ ቅዱስ ገ/ ማርያም በ1085 ዓ.ም ቅዱስ ኃርቢይ እየተባለ በስሙ ከሚጠራው ቦታ ቡግና ወረዳ ውስጥ ደብረ-ሮሃ ተራራ ላይ ጉርጉር ከተባለው ተወለደ፡፡ 
    ቅዱስ ገ/ማርያም /ኃርቢይ/ አባቱ አጼ  ዛንሥዩም በሥርዓተ ቤተ ክርስቲያን እያስተማረ አሳደገው፡፡ ዲቁና ከግብጽ በመጡ ጳጳስ ተቀብሎ ሲኖር በሥርዓተ ቤተ ክርስትያን አባቱ አፄ ዛን ስዩምና እናቱ ዑፁፍተ ወርቅ መርኬዛ የተባለችውን ሴት በሥርዓተ ተክሊል ዳሩት፡፡ ቅዱስ ገ/ማርያም _ አላወቃትም፡፡ 
    እንደ ዲሜጥሮስ በድንግልና ተቀምጠው ሳሉ አባቱ አጼ ዛን ሥዩም በሸመገሉ ጊዜ መንግሥቱን ከግብጽ በመጡ ጳጳስ የቅስና ክህነት ተቀብሎ ቅብዓ መንግሥት ቀብተው በ1117 የካቲት 16 አነገሡት፡፡ መንግሥቱን ከተቀበለ ከክህነት ጋር ኢትዮጵያን አልፎ በጠቅላላ የአፍሪካን አህጉር ያስተዳድር ነበር፥ ግብፅም በሱ ሥር ነበረች፡፡ 
    ቅዱስ ገ/ማርያም/ኃርቢይ/ መልኩ ከሁሉም በላይ የሚያምርና የተዋበ ቁመቱ ዘለግ ያለ አንገታም ነበረ፡፡ የፋርስና የባቢሎን ነገሥታት መምለኬ ጣኦት ናቸውና ወልድ በመሆናቸው በኦርቶዶክስ ዋህድ ብለው የማያመልኩ ተዋህዶ _ ቤተክርስቲያን የሚያምኑት የእስክንድርያን እና የአርማንያን አልፈው ግብጽ ድረስ በመጣት የፋርስና የባቢሎን 
    ነገሥታት ጨካኝ በሆነ በመቻ ክርስትያኖችን በመጨፍጨፍ ገዳመ አስቴጥስ የእነእንጦንስና መቃርስ ጉዳም በሙሉ እንዲጠፋና እነሱ በሚያመልኩት እምልኦ ጣኦት እንዲያምኑ በከፍተኛ ግፍ አንገላቷቸው በሚል ለኢትዮጵያዊ, ንጉሠ ነገሥት ቅዱስ ገ/ማርያም መልክት እንዲልኩላቸው እስክንድሪያና የግብጽ ክርስትያኖች ከሊፋ አላፊዝ ለተባለው 
    ለግብጽ መሪያቻው ጠየቋቸው። እንደጥያቄያቸው የግብጽ መሪ ክሊፋ አላፊዝ እንደተጠየቀው ጽፎ መልእክተኛ ለኢትዮጵያው ንጉሠ ነገሥት ለቅዱስ ገ/ ማርደም እንዲህ ሲል ላከበት፡፡ የአርማንያንና የእስክንድርያ ግብጽ ቤተ ክርስትያንና ገዳማት ተወረሩ፣ ክርስትያኖች በግፍ አለቁልህ ብሎ በመጽሃፍ ላከበት፡፡ ቅዱስ ገ/ማርያምም ይህን በሰማ ጊዜ ከፍ ያለ ሃዘን ተሰማው፡፡
     ቤተ ክርስቲያንን ተንባላት እስላሞች/ አጠፏት አለ፡፡ በዚህ ጊዜ ተቆጭቶ ቅዱስ ገ/ማርያም እልፍ አግማል፤ እልፍ አፍራስ እልፍ አብቅልት አሰናድቶ እልፍ አእላፍ የሆኑ ወታደሮች አሰልፎ ታቹን ከረንን አድርጎ ሱዳንን ከሁለት ከፍሎ በግብጽ አልፎ መጋቢት 16 አርማንያ ገባ፡፡ በዚህ ጊዜ የፋርስና የባቢሎን ነገሥታት ተንባላት የሚገቡበት ቀዳዳ ጠፋቸው፡፡ በፋርስና በባቢሎን ሽብር ሆነ፡፡
      ወታደራቸው ዝክረ ስሙ ጠፋ፡፡ የፋርስና የባቢሎን ነገሥታት ተንባላት በሙሉ ለቅዱስ ገ/ ማርያም አታጥፋን ዳግመኛ በክርስቲያኖች ላይ መዝመት ቀርቶ ክፉ አናስብም ለዛሬው አታጥፋን ማረን ብለው ከጫማው ወድቀው ለመኑት፡፡ በምታመልከው አምላክህ በእግዚአብሔር ተማፅነንሃል እያሉ ጮሁበት አለቀሱበት፡፡
 ለእስክንድራያው ፓትሪያርክ ለአቡነ ገብርኤል እንዲህ አሏቸው፤ ውሃችን አጥተን ከምናልቅ ጳጳስ በራሳቸው ሹመው ቢተዳደሩ ይሻላል የሚል ሃሣብ አቀረበላቸው፡፡ ብፁዕ አቡነ ገብርኤልም ፓትርያርኩ ኢትዮጵያ ለመጡት ጳጳስ ለአቡነ ሚካኤል ኢትዮጵያውያን የራሳቸውን ምሁራን ጳጳስ ሆነው እንዲያስተዳድሯቸው ኢትዮጵያ መብቷ እንዲጠበቅ የራሷን ምሁራን ሹሙላቸው፡፡
  ኢትዮጵያ መንበረ ጵጵስና እንድታገኝ የሚል መልክት ላኩባቸው፡፡ ከዚህ በኋላ ቅዱስ ገ/ ማርያም /ኃርበይም/ በጣም ተደሰተ፡፡ የኢትዮጵያን ምሁራንን ሰብስቦ ላስታ ደብረ ሮሃ ላይ ከቤተ መንግሥቱ ከግብጽ በመጡት ጳጳስ በአቡነ ሚካኤል ጸሎተ- ቡራኬ አራት ጳጳሳት፤ አራት ኤጲስቆጶሳት በድምር ስምንቱን ሹመው
   1ኛ አባ ዘፈረ ዲዎስቆሮስ፤ 
   2ኛ አባ ዘመደ ፊልጶስ፤ 
   3ኛ አባ ተክለ ብርሃን፤ 
   4ኛ አባ አብርሃም፤ 
   5ኛ አባ ሲኖዳ፤ 
   6ኛ አባ ኤዎስጣቴዎስ፤ 
   7ኛ አባ አርከ ድንግል፤ 
   8ኛ አባ ብንያም እየተባሉ የሚጠሩትን ሹመው አንዱን በጣና ቂርቆስ ለጎንደር፣ 2ኛውን በኤርትራ፣ 3ኛውን በአክሱም፤ 4ኛውን በየመንና ጅቡቲ፣ 5ኛ በኬንያና ወለጋ፤ 6ኛውን በወሎ ተደባበ ማርያም፣ 7ኛው በሀረር ሶማሊያ፣ 8ኛው በመርጡለ ማርያም ጎጃም ሆነው ተሾመው እንዲኖሩ አደረጓቸው፡፡
    የቅዱስ ዝማርያም /ኃርበይ/ ሃሣቡ ተሟላለት፡፡ ከዚህ በኋላ እንደዚህ ሆነው ኢትዮጵያ ለራሷ መንበረ ጵጵስና በማግኘቷ እና እራሷን በመቻሏ ግብፃውያን እንደገና በጣም ተጸጸቱ፡፡
     ኢትዮጵያ የተላኩትን አቡነ ሚካኤልን ቶሎ ብለው እንዲመጡ የሚል የቁጣ መልዕክት ላኩባቸው፡፡ 
    እርሳቸውም Eቡነ ሚካኤል ተነስተው ታቹን በኬንያ ሲጓዙ ኬንያ ከጠረፉ ደርሱ ሞቱ፡፡
     አስክሬናቸውን አየሩሳሌም ወበደረው ቀበሯቸው፡
     `,
  },
  {
    id: 2,
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/gebiremariyam%2F358601839_1626563371103374_2583817568850693808_n.jpg?alt=media&token=688c6d7a-436a-42ca-a8fe-1d08e6ceb7a2',
    description: ` የግብፁንም ፓትርያርክ አቡነ ገብርኤልንም ለኢትዮጵያ መንበረ ጵጵስና እንድታገኝ በመፍቀዳቸው ግብፃውያን በሃይል ተጣሏቸው፡፡ እሳቸውም ተናደው ሞቱ፡፡
     ከዚህ በኋላ ኢትዮጵያ የራሷን ምሁራን በራሷ መብት እየሾመች ስትጠቀም ብዙ ዘመን ቆይታለች፡፡ በነዚህ ጳጳሳት እና ኤጲስ ቆጶሳት በሆኑት በራሷ ምሁራን ስትባረክና ስትመራ ብዙ ዘመን ከቆየች በኋላ ግብፃውያን እንደ ልማዳቸው የኢትዮጵያን መብት የነበረውን በቅዱስ · ገ/ ማርያም /ኃርበይ/ መልካም ትግል የመጣውን የፓትርያርክ ሥልጣን እና መብት መልሰው ወሰዱት፡፡ ኢትዮጵያ - በግብፃውያን ስር ማደሯንና መረገጧን ገንዘብ አደረገች፡፡ የኢትዮጵያ ሊቃውንት መብታቸውን በማጣታቸው ተመናመኑ፡፡ 
    ቤተ ክርስቲያን አገልጋይ ካህናት እያጣች በመሄዷ በቅዱስ ገ/ማርያም /ኃርበይ/ እና በኢትዮጵያ ጳጳሳት እየተባረኩ ተተክለው የነበሩት ቤተ ክርስቲያን ሁሉ አብዛኞቹ በረሃ ውጧቸው እየጠፉ ቀሩ፡፡ በላስታ ዙሪያ ለምሳሌ በእነ ገነተ ማርያም አካባቢ 6 ቤተ ክርስቲያኖች የነበሩበት ፍርስራሹ ዛሬ ድረስ ይታያል፡፡ 
    አብዛሃኞቹ በግራኝ ወረራ ቢሆንም በየአካባቢያችን ይህን መሰል ይገኛሉ፡፡ ከዚህ ቀጥሎ በ1923 አፄ ኃይለ ሥላሴ ነግሠው አምስት አመት ከቆዩ በኋላ ኢጣሊያ ኢትዮጵያ ተሻግሮ በ1928 ዓ/ም ወረራውን በቀጠለ ጊዜ አፄ ኃይለሥላሴ ኢትዮጵያን ለቀው እንግሊዝ ሃገር በመሄዳቸው ኢትዮጵያ ከፍ ያለ ጭቆና አጋጥሟት ሳለ ጠላት ኢጣሊያ ኢትዮጵያን በወረረበት በአመቱ ከግብፅ ለኢትዮጵያ በተላኩት ፓትርያርክ ባርክው እንዲመለሱ በተላኩ በሃምሌ ወር 1929 የግብፃዊው ሊቀ ጳጳስ በሮማ በኩል ወደ ግብፅ ሄደው ቀሩ፡፡ 
    በ1930 ግብፃዊው ሊቀ ጳጳስ ስላልተመለሱ ከመካከላችሁ መርጣችሁ ሊቀ ጳጳስ ሹom. ይህን ካላደረጋችሁ የሮማው ፖፕ ይሾማል እንጅ ከእንግዲህ ወዲህ ከግብጽ ጳጳስ ማምጣት አይቻልም በማለት ኢጣሊያኖች አስታወቁ፡፡ በዚህ ጊዜ የኢትዮጵያ ቤተ ክርስትያን በሮማ ቤተ ክርስትያን ስር እንዳትወድቅ የተረፉት ጳጳሳትም አቡነ አብርሃምና አቡነ ይስሐቅ ብቻ ስለነበሩ የኢትዮጵያን ሊቃውንት በአዲስ አበባ ተሰብስበው አቡነ አብርሃምን ህዳር 21 1930 ዓ.ም ሊቀ ጳጳስ እንዲሆኑ አደረጉ፡፡
     ብፁዕ ሊቀ ጳጳስ አቡነ አብርሃምም ህዳር 21 ቀን 1930 ዓ.ም 1ኛ አቡነ ዮሐንስን ሀዲስ ተክሌ እጨጌና የሸዋ ጳጳስ፣ 2ኛ አቡነ ማርቆስን የኤርትራ ጳጳስ፤ 3ኛ አቡነ ሰላማን የሐረር ጳጳስ፤ 4ኛ አቡነ ገብርኤልን የጎንደር ጳጳስ፤ 5ኛ አቡነ ማቴዎስን የወሎ ጳጳስ፤ 6ኛ አቡነ ሉቃስን የወለጋ ጳጳስ አድርገው ሹመዋል፡፡ እነዚህም በግብፃዊው አቡነ ቄርሎስ ሥር የሚመሩ በመሆን የተሾሙ ናቸው እንጂ
ኢትዮጵያ በሙሉ ነፃነት ጳጳስ ለመሾም አልበቃችም:: በንጉሠ ነገሥት ግርማዊ ቀዳማዊ አፄ ኃይለ ሥላሴ ጥበባዊ ትግል እና በኢትዮጵያ ሊቃውንት ጥረትና ጸሎት በ1940 እና በ1943 ዓ.ም የኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተ ክርስትያን በታሪክ ለመጀመሪያ ጊዜ ከግፃውያን የበላይነት አመራር ነፃ ወጥታ በራሷ ጳጳስትና ሊቃነ ጳጳስት ራሷን ለመስተዳደር የቻለች ለመሆን የበቃችበት ዋና ማስረጃ የሆነው 
በላስታ ከነገሡት ቅዱሳን ነገሥታት 8ኛው የቅዱስ ላሊበላ ታላቅ ወንድም የቅዱስ ገ/ማርያም(ኃርበይ) መጽሐፈ- ገድሉን አፄ ኃይለሥላሴ አስወስደው የቅዱስ ገ/ማርያም (ሀርበይም) ገድል እንዲህ ሲል በመመስከሩ፤ ቅዱስ ገ/ ማርያም (ኃርበይ) የአባይን ውሃ ሊያግድባቸው ሲነሳ ግብፃውያን ፈቅደው አቡነ ገብርኤል የግብፁን ፓትርያርክ አቡነ ሚካኤልን ለኢትዮጵያ ፓትርያርክ ሆነው እንዲመሩ በላኳቸው ጊዜ ኢትዮጵያ ክራሷ ሊቃውንቶች ተመርጠው 4 ሊቃነ ጳጳስት 4 ኤጲስ ጳጳስት ተሹመው ኢትዮጵያ በራሷ እንድትዳደር እና ክግብዕ ጭቆና ስር የወጣች ለመሆኑ ማስረጃ በመሆኑ የቅዱስ ገ/ማርያምን (ህርበይምን) ገድል አስመስክረው ነው:: የእጅ ይዞታዋን ማግኘት አለባት በመባል በዘመኑ አዋጅ የእጅ ይዞታ ለባለ ይዞታው እንደሚሆን እንዲመለስ አዋጅ ስለነበረ አፄ ኃይለ ሥላሴ በላስታ ነገሥታት አንዱ በሆነው የቅዱስ ገ/ማርያም (ሀርበይም) መጽሐፍ ወይም ገድል በመመስከሩ ግብፃውያንን ረትተው ነው፡፡ ከዚህ በኋላ ጎዳናው ቀና እየሆነ ስለሄደ የኢትዮጵያ 几十 ክርስትያን በራሷ ፓትሪያሪክ የበላይ ኃላፊነት እንድትመራ ለማድረግ ጊዜ አልወሰደም፡፡ በመሆኑም ሰኔ 21 ቀን 1951 የመጀመሪያ ኢትዮጵዊው ፓትሪያሪክ ሊቃ ጳጳስ
የነበሩት ብፁዕ ወ ቅዱስ አቡነ ባስልዮስ ሆነ:: የመጀመሪያው ኢትዮጵዊው ፓትርያርክ ሥርዓተ ሢመት በግብፁ ፓትሪያሪክ ብፁዕ አቡነ ቄርሎስ ቡራኬ ሰኔ 21 1951 ዓ.ም ተፈጸመ:: ከሳቸው ቀጥሎ 5 ፓትሪያሪክ ከሳቸው ጋር 6ኛው
ዛሬ አቡነ ማትያስ ሆነዋል:: የኢትዮጵያ ቤተ ክርስቲያን ይህን ታላቅ መብት ለማግኘት እስከ መጨረሻው ያበቃት የገ/ ማርያም (ሀርበይ) ገድል የመጀመሪያ የእጅ ይዞታ የኢትዮጵያ መሆኑን መስክሮ ነው:: `,
  },
];

const Harbe = () => {
  const [showFullText, setShowFullText] = useState([]);

  const toggleText = (id) => {
    setShowFullText(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <ScrollView>
      {images.map((image) => (
        <View key={image.id} style={{ marginVertical: 10 ,marginBottom:70}}>
          <ImageViewer
            imageUrls={[{ url: image.imageUrl }]}
            enableSwipeDown
            renderIndicator={() => null} 
            style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height / 2 }}
          />
          <View style={styles.descriptionContainer}>
            <Text>{showFullText[image.id] ? image.description : `${image.description.substring(0, 100)}...`}</Text>
            {image.description.length > 100 && (
              <TouchableOpacity onPress={() => toggleText(image.id)}>
                <Text style={styles.seeMore}>{showFullText[image.id] ? 'በከፊል ይዩ' : 'ሙሉውን ይዩ'}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Harbe;

const styles = StyleSheet.create({
  descriptionContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    marginBottom:70
  },
  seeMore: {
    color: 'blue',
    marginTop: 5,
  },
});

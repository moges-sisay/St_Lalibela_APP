import React, { useState } from 'react';
import { Text, View, FlatList, Button, StyleSheet, Dimensions } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const data = [
  {
    id: 1,
    text: `This is a long description that will be truncated. It goes beyond 7 lines and will require the user to see mor
    e to view the entire content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u
    t labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
     commodo consequatThis is a long description that will be truncated. It goes beyond 7 lines and will require the user to 
     see more to view the entire content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
       consequatThis is a long description that will be truncated. It goes beyond 7 lines and will require the user to see more to view the ent
    re the user to see more to view the entire content. Lorem ipsum dolor sit am
    et, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex e
    a commodo consequatThis is a long description that will be truncated. It goes beyond 7 lines and will require the 
    user to see more to view the entire content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com
    modire content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
     enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatThis is a long description that will be truncated. It 
     goes beyond 7 lines and will require the user to see more to view the entire content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
     ullamco laboris nisi ut aliquip ex ea commodo consequatThis is a long description that will be truncated. It goes beyond 7 lines and will require the user
      to see more to view the entire content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al
      iqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatThis is a long description that will be truncated.
       It goes beyond 7 lines and will require the user to see more to view the entire content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatThis 
       is a long description that will be truncated. It goes beyond 7 lines and will requi
    o consequat.`,
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/lalibela%2Fdownload%20(9).jpg?alt=media&token=5f7eefc7-7afb-49a7-aaff-fec0f2416e0c',
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

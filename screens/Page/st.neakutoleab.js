import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const images = [
  {
    id: 1,
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/neakutoleab%2F437146608_436617595688700_8046965790600286092_n.jpg?alt=media&token=0a5d4949-38e5-44d7-ac79-914728a65eac',
    description: 'Description for Image 1. This is a long description that will be truncated. It goes beyond 7 lines and will require the user to see more to view the entire content.',
  },
  {
    id: 2,
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/neakutoleab%2Fst.neakutoleab%20-%20Copy.jpg?alt=media&token=c822b624-1bb3-4ffb-b506-27d340fd49b9',
    description: 'Description for Image 2. This is another long description that needs to be truncated. It contains detailed information about the image.',
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
        <View key={image.id} style={{ marginVertical: 10 }}>
          <ImageViewer
            imageUrls={[{ url: image.imageUrl }]}
            enableSwipeDown
            renderIndicator={() => null} // Optional: Disable indicator
            style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height / 2 }}
          />
          <View style={styles.descriptionContainer}>
            <Text>{showFullText[image.id] ? image.description : `${image.description.substring(0, 100)}...`}</Text>
            {image.description.length > 100 && (
              <TouchableOpacity onPress={() => toggleText(image.id)}>
                <Text style={styles.seeMore}>{showFullText[image.id] ? 'See Less' : 'See More'}</Text>
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
  },
  seeMore: {
    color: 'blue',
    marginTop: 5,
  },
});

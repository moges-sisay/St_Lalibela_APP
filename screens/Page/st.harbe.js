import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const images = [
  {
    id: 1,
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/gebiremariyam%2F358432191_1625929991166712_942823037158153786_n.jpg?alt=media&token=07536df9-4e32-41ed-976c-3b171fa50cb4',
    description: 'Description for Image 1. This is a long description that will be truncated. It goes beyond 7 lines and will require the user to see more to view the entire content.',
  },
  {
    id: 2,
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/gebiremariyam%2F358601839_1626563371103374_2583817568850693808_n.jpg?alt=media&token=688c6d7a-436a-42ca-a8fe-1d08e6ceb7a2',
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

import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const images = [
  {
    id: 1,
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/yimriha%2FETH%20Yemre-1.jpg?alt=media&token=141a2f01-e6d7-455e-94df-73f6a1fd4dee',
    description: 'Description for Image 1. This is a long description that will be truncated. It goes beyond 7 lines and will require the user to see more to view the entire content.',
  },
  {
    id: 2,
    imageUrl: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/yimriha%2Fimages%20(1).jpg?alt=media&token=64677be7-ca05-409d-9e16-7afc895157ad',
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

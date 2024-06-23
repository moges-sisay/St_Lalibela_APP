import React, { useState } from 'react';
import { Text, StyleSheet, Image, ScrollView, View, TouchableOpacity, Modal, TextInput, Button, Alert } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import ImageViewing from 'react-native-image-viewing';
import * as MediaLibrary from 'expo-media-library';
import Icon from 'react-native-vector-icons/FontAwesome';

function Lalibela() {
    const insets = useSafeAreaInsets();
    const [isVisible, setIsVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [comments, setComments] = useState({});
    const [newComment, setNewComment] = useState('');
    const [commentModalVisible, setCommentModalVisible] = useState(false);
    const [lovedImages, setLovedImages] = useState(new Set());

    const images = [
        {
            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/images%2F347384806_651949193629819_2342310311102097919_n.jpg?alt=media&token=d0af3c67-dfe9-4000-8546-b83177a6852f',
            description: "Rock-hewn church in Lalibela"
        },
        {
            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/images%2F347567389_1012507333258710_14777760138721996_n.jpg?alt=media&token=f189d324-c5a4-432d-843b-3eba103c6335',
            description: "Priests in traditional attire"
        },
        {
            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/images%2F1678296666841.jpg?alt=media&token=3638105f-4dd1-48df-9ab7-68c7c1aa19e8',
            description: "Interior of a church"
        },
        {
            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/lalibela%2Fimages%20(24).jpg?alt=media&token=5d85391b-1dd7-49e4-80af-bc7d6a542daa',
            description: "Iconography inside a church"
        },
        {
            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/images%2F446814398_467301179287008_6947383595516018739_n.jpg?alt=media&token=b3402a55-2ad3-4c08-8fd5-d3c078779591',
            description: "Ancient carvings on church walls"
        },
        {
            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/images%2FFB_IMG_1669394825999%20(1).jpg?alt=media&token=fdf2e9b2-79e9-4119-b6f4-d936f963ada4',
            description: "Sunset view of Lalibela"
        },
        {
            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/images%2Feth-yemre-main-church-building-int-with-priest-2012.jpg?alt=media&token=96b0809a-edbd-45f0-a87e-f93fcbcfc377',
            description: "Priest inside a church"
        },
        {
            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/images%2Fimages%20(5).jpg?alt=media&token=1736fb53-4cf7-4d29-945e-d9c32a7f42ad',
            description: "Exterior view of a church"
        },
        {
            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/lalibela%2Fimages%20(12).jpg?alt=media&token=2c9b2ecd-7555-4760-81f3-35c8aaa5d6f0',
            description: "Pilgrims visiting Lalibela"
        },
        {
            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/images%2Fimages%20(9).jpg?alt=media&token=1bcda4a0-79ef-4d1c-8cd5-3de08c2ee865',
            description: "Lalibela's rock-hewn churches"
        },
        {
            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/images%2FFB_IMG_1668586571652.jpg?alt=media&token=022d5745-faa3-4e0f-b8cf-eab9a5aceb1c',
            description: "Lalibela's rock-hewn churches"
        },
        {
            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/images%2F1672511910274.jpg?alt=media&token=7dce40b0-64f7-4203-8bcb-ef8871961b2d',
            description: "Lalibela's rock-hewn churches"
        },
        {
            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/images%2Fdownload%20(2).jpg?alt=media&token=d72e90cb-af44-468f-b384-fcda30a8c44d',
            description: "Lalibela's rock-hewn churches"
        },
        {
            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/images%2FFB_IMG_1668586556514_1.jpg?alt=media&token=25660b8b-fd89-48f1-b9f7-d18d3ee5a586',
            description: "Lalibela's rock-hewn churches"
        },
        {
            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/images%2F358433837_1626564994436545_6956188362352656053_n.jpg?alt=media&token=b706e227-71de-42c2-b3eb-837344b6b7f6',
            description: "Lalibela's rock-hewn churches"
        },
        {
            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/images%2F354631553_652669690224436_2981900290183456435_n.jpg?alt=media&token=357dab54-0f73-4bd3-82c4-c18bf105de5f',
            description: "Lalibela's rock-hewn churches"
        },
        {
            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/images%2F1680495072655.jpg?alt=media&token=3f658bd0-e948-4aef-b558-e167927b26b9',
            description: "Lalibela's rock-hewn churches"
        },
        {
            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/images%2F1680495066815.jpg?alt=media&token=1452aca5-eaed-48c8-bbcf-755540beb5fa',
            description: "Lalibela's rock-hewn churches"
        },
        {
            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/images%2F431565873_423559873661139_1911061821616459422_n.jpg?alt=media&token=4daf0975-1edb-472b-8a68-2393a62f5348',
            description: "Lalibela's rock-hewn churches"
        },
        {
            uri: 'https://firebasestorage.googleapis.com/v0/b/lalibela-b39ae.appspot.com/o/images%2FETH%20Yemre-2.jpg?alt=media&token=e2f7a962-d35d-40b3-b4ab-8fcd7e040769',
            description: "Lalibela's rock-hewn churches"
        }
    ];

    const openImageModal = (index) => {
        setCurrentImageIndex(index);
        setIsVisible(true);
        setSelectedImageIndex(index);
    };

    const closeImageModal = () => {
        setIsVisible(false);
    };

    const handleSave = async (uri) => {
        const permission = await MediaLibrary.requestPermissionsAsync();
        if (permission.granted) {
            const asset = await MediaLibrary.createAssetAsync(uri);
            await MediaLibrary.createAlbumAsync('Download', asset, false);
            Alert.alert('Image saved to local file');
        } else {
            Alert.alert('Permission to access storage is required');
        }
    };

    const handleComment = (index) => {
        setCurrentImageIndex(index);
        setCommentModalVisible(true);
    };

    const saveComment = () => {
        const updatedComments = { ...comments, [currentImageIndex]: newComment };
        setComments(updatedComments);
        setNewComment('');
        setCommentModalVisible(false);
    };

    const toggleLove = (index) => {
        const updatedLovedImages = new Set(lovedImages);
        if (updatedLovedImages.has(index)) {
            updatedLovedImages.delete(index);
        } else {
            updatedLovedImages.add(index);
        }
        setLovedImages(updatedLovedImages);
    };

    return (
        <SafeAreaProvider>
            <ScrollView>
                <View style={{ display: "flex", flexDirection: "row", paddingTop: insets.top + 10 }}>
                    <View>
              {images.slice(0, 10).map((image, index) => (
                  <View key={index}>
                      <TouchableOpacity onPress={() => openImageModal(index)}>
                          <Image style={styles.images} source={{ uri: image.uri }} />
                          <Text style={styles.imageDescription}>{image.description}</Text>
                      </TouchableOpacity>
                      {selectedImageIndex === index && (
                          <View style={styles.actions}>
                              <TouchableOpacity onPress={() => handleSave(image.uri)}>
                                  <Icon name="download" size={20} color="blueblack" />
                              </TouchableOpacity>
                              <TouchableOpacity onPress={() => handleComment(index)}>
                                  <Icon name="comment" size={20} color="blueblack" />
                              </TouchableOpacity>
                              <TouchableOpacity onPress={() => toggleLove(index)}>
                                  <Icon name={lovedImages.has(index) ? "heart" : "heart-o"} size={20} color={lovedImages.has(index) ? "red" : "black"} />
                              </TouchableOpacity>
                          </View>
                      )}
                      {comments[index] && <Text style={styles.comment}>{comments[index]}</Text>}
                  </View>
              ))}
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        {images.slice(10).map((image, index) => (
                  <View key={index + 10}>
                      <TouchableOpacity onPress={() => openImageModal(index + 10)}>
                          <Image style={styles.images} source={{ uri: image.uri }} />
                          <Text style={styles.imageDescription}>{image.description}</Text>
                      </TouchableOpacity>
                      {selectedImageIndex === index + 10 && (
                          <View style={styles.actions}>
                              <TouchableOpacity onPress={() => handleSave(image.uri)}>
                                  <Icon name="download" size={20} color="blueblack" />
                              </TouchableOpacity>
                              <TouchableOpacity onPress={() => handleComment(index + 10)}>
                                  <Icon name="comment" size={20} color="blueblack" />
                              </TouchableOpacity>
                              <TouchableOpacity onPress={() => toggleLove(index + 10)}>
                                  <Icon name={lovedImages.has(index + 10) ? "heart" : "heart-o"} size={20} color={lovedImages.has(index + 10) ? "red" : "black"} />
                              </TouchableOpacity>
                          </View>
                      )}
                      {comments[index + 10] && <Text style={styles.comment}>{comments[index + 10]}</Text>}
                  </View>
              ))}
                    </View>
                </View>
            </ScrollView>
            <ImageViewing
                images={images}
                imageIndex={currentImageIndex}
                visible={isVisible}
                onRequestClose={closeImageModal}
            />
            <Modal visible={commentModalVisible} animationType="slide">
                <View style={styles.modalView}>
                    <TextInput
                        style={styles.input}
                        placeholder="Add a comment"
                        value={newComment}
                        onChangeText={setNewComment}
                    />
                    <Button title="Save Comment" onPress={saveComment} />
                    <Button title="Cancel" onPress={() => setCommentModalVisible(false)} />
                </View>
            </Modal>
        </SafeAreaProvider>
    );
}

export default Lalibela;

const styles = StyleSheet.create({
    images: {
        flex: 1,
        width: 200,
        height: 200,
        resizeMode: "cover",
        marginBottom: 10
    },
    imageDescription: {
        textAlign: 'center',
        marginBottom: 10,
        color: 'grey'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10
    },
    comment: {
        fontStyle: 'italic',
        textAlign: 'center',
        color: 'grey',
        marginBottom: 10
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 2,
        marginBottom: 20,
        paddingLeft: 10
    }
});

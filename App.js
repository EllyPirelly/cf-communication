import { useState } from 'react';
import { StyleSheet, Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';

const App = () => {
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState(null);

  // lets user pick an image / ask for permission first
  const pickImage = async () => {
    let permissions = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissions?.granted) {
      // default to pick is Images
      // let result = await ImagePicker.launchImageLibraryAsync();

      let result = await ImagePicker.launchImageLibraryAsync({
        // Images, Videos or All
        mediaTypes: ImagePicker.MediaTypeOptions.Images
      });

      if (!result.canceled) setImage(result.assets[0]);
      else setImage(null)
    }
  };

  // lets user take an image / ask for permission first
  // persists photos on the device storage
  const takePhoto = async () => {
    let permissions = await ImagePicker.requestCameraPermissionsAsync();

    if (permissions?.granted) {
      let result = await ImagePicker.launchCameraAsync();

      if (!result.canceled) {
        let mediaLibraryPermissions = await MediaLibrary.requestPermissionsAsync();

        if (mediaLibraryPermissions?.granted) await MediaLibrary.saveToLibraryAsync(result.assets[0].uri);

        setImage(result.assets[0]);
      } else setImage(null)
    }
  }

  // lets user take an image / ask for permission first
  // const takePhoto = async () => {
  //   let permissions = await ImagePicker.requestCameraPermissionsAsync();

  //   if (permissions?.granted) {
  //     let result = await ImagePicker.launchCameraAsync();

  //     if (!result.canceled) setImage(result.assets[0]);
  //     else setImage(null)
  //   }
  // };

  // requests and accesses user's geo location
  const getLocation = async () => {
    let permissions = await Location.requestForegroundPermissionsAsync();

    if (permissions?.granted) {
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    } else {
      Alert.alert('No permission to read geo location.');
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title='Pick an image from the library'
        onPress={pickImage}
      />
      <Button
        title='Take a photo'
        onPress={takePhoto}
      />

      <Button
        title='Get my location'
        onPress={getLocation}
      />

      {image &&
        <Image
          source={{ uri: image.uri }}
          style={{ width: 200, height: 200 }}
        />
      }

      {location &&
        <MapView
          style={{ width: 300, height: 200 }}
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  }
});

export default App;
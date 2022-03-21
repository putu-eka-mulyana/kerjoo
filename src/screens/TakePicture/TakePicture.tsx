import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';

import {launchCamera} from 'react-native-image-picker';
import GetLocations from 'react-native-get-location';
import axios from 'axios';

import Button from '../../components/Button';
import {styles} from './TakePicture.styles';

type logType = {
  latitude: any;
  longitude: any;
};

const ListAbsent = () => {
  const [dataImage, setDataImage] = React.useState<any>({
    uri: '',
    type: '',
    name: '',
  });
  const [log, setLog] = React.useState<logType>({
    longitude: '',
    latitude: '',
  });
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    GetLocations.getCurrentPosition({
      enableHighAccuracy: true,
    })
      .then(location => {
        if (location) {
          console.log(location);
          setLog({longitude: location.longitude, latitude: location.latitude});
        }
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }, []);

  const take = async () => {
    await launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'front',
      },
      res => {
        if (res.didCancel) {
          console.log('cancel');
        } else if (res.errorMessage) {
          console.log('error ');
        } else {
          if (res.assets && res.assets[0].uri && res.assets[0].type) {
            // setDataImage(res.assets[0]);
            console.log('data file ', res.assets[0]);

            setDataImage({
              uri: res.assets[0].uri,
              type: res.assets[0].type,
              name: res.assets[0].fileName,
            });
          }
        }
      },
    );
  };
  const saveData = () => {
    console.log(dataImage);

    if (dataImage && log.latitude && log.longitude) {
      setLoading(true);
      const bodyFormData = new FormData();
      bodyFormData.append('selfie', dataImage);
      bodyFormData.append('lat', log.latitude);
      bodyFormData.append('long', log.longitude);

      axios({
        method: 'post',
        url:
          'https://apidummy.kerjoo.com/api/attendances/48257df9-d6ea-4aca-959c-65cedf82c067',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data; ',
        },
        data: bodyFormData,
      })
        .then(() => {
          setLoading(false);
          ToastAndroid.showWithGravityAndOffset(
            'BerHasil Absen',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
        })
        .catch(() => {
          setLoading(false);
          ToastAndroid.showWithGravityAndOffset(
            'Gagal, Silahkan ulangi',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
          );
        });
    } else {
      setLoading(false);
      ToastAndroid.showWithGravityAndOffset(
        'Data Belum Lengkap',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    }
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size={'large'} color="red" />}
      <View style={styles.card_preview}>
        {dataImage.uri ? (
          <Pressable onPress={() => take()} style={styles.image}>
            <Image
              source={{uri: dataImage.uri}}
              style={styles.image}
              resizeMode={'contain'}
            />
          </Pressable>
        ) : (
          <Text style={styles.label} onPress={() => take()}>
            Ambil Gambar
          </Text>
        )}
      </View>

      <Button label="Kirim" onPress={() => saveData()} />
    </View>
  );
};

export default ListAbsent;

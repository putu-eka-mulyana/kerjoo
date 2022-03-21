import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../components/Button';
import {DefaultNavigationProps} from '../../navigation/types';
import {styles} from './Home.styles';

type HomeProps = {
  navigation: DefaultNavigationProps<'default'>;
};

const Home: React.FC<HomeProps> = ({navigation}) => (
  <View style={styles.container}>
    <Text style={styles.label}>Selamat Datang Di Kerjoo</Text>
    <Button
      label="Absen Sekarang"
      onPress={() => navigation.navigate('TakePicture')}
    />
    <Button
      label="Lihat Absensi"
      onPress={() => navigation.navigate('ListAbsent')}
    />
  </View>
);

export default Home;

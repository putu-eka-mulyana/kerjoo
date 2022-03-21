import axios from 'axios';
import React from 'react';
import {View, Text, ActivityIndicator, FlatList, Image} from 'react-native';
import {styles} from './ListPresent.styles';

type DataListType = {
  id: number;
  uuid: string;
  selfie: string;
  lat: string;
  long: string;
  logDate_time: Date;
  created_at: Date;
  updated_at: Date;
  selfie_url: string;
};

const ListAbsent = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [listData, setListData] = React.useState<DataListType[]>();
  React.useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoading(true);
    axios
      .get(
        'https://apidummy.kerjoo.com/api/attendances/48257df9-d6ea-4aca-959c-65cedf82c067',
      )
      .then(res => {
        setLoading(false);
        setListData(res.data);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator size={'large'} color="red" />}
      <Text style={styles.label}>List Kehadiran</Text>
      <FlatList
        data={listData}
        renderItem={({item}) => (
          <View style={styles.box}>
            <Image
              source={{uri: item.selfie_url}}
              style={styles.image}
              resizeMode={'center'}
            />

            <Text style={styles.text}>waktu absen : {item.created_at}</Text>
            <Text style={styles.text}>long : {item.long}</Text>
            <Text style={styles.text}>lat : {item.lat}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListAbsent;

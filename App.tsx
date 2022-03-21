import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import {PermissionsAndroid, StatusBar} from 'react-native';

const App = () => {
  React.useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        } else {
          console.log('Permission Denied');
        }
      } catch (err) {
        console.warn(err);
      }
    };

    requestLocationPermission();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#33a091'} />
      <StackNavigation />
    </NavigationContainer>
  );
};
export default App;

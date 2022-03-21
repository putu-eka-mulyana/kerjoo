import {Dimensions, StyleSheet} from 'react-native';
const height = Dimensions.get('screen').height;
export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 16,
  },
  card_preview: {
    height: height - 200,
    borderRadius: 8,
    borderWidth: 2,
    marginTop: 20,
    borderColor: '#33a091',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontWeight: '800',
    color: '#33a091',
    fontSize: 18,
  },
  image: {
    height: height - 210,
    width: '100%',
  },
});

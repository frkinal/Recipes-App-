import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  image: {
    width: deviceSize.width - 10,
    height: deviceSize.height / 4,
    resizeMode: 'cover',
    borderRadius: 20,
    flex: 1,
    justifyContent: 'flex-end',
    borderRadius: 10,
  },
  banner_container: {
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

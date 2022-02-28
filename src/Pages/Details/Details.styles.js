import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 2,
    resizeMode: 'cover',
  },
  inner_container: {},
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#7F4528',
  },
  country: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#7F4528',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  description: {
    color: '#000',
  },
  button: {
      backgroundColor: 'red',
      alignItems:'center',
      margin:8,
      padding:10,
      borderRadius:10,

    },
    button_text:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,
    }
});

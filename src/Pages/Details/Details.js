import React, {useCallback} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

import useFetch from '../../Hooks/useFetch';

import styles from './Details.styles';
import Config from 'react-native-config';

import Loading from '../../Components/Loading';
import Error from '../../Components/Error';

const Details = ({route}) => {
  const {idMeal} = route.params;

  const {loading, error, data} = useFetch('meals', Config.DETAILS_URL + idMeal);
  
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const link = data[0].strYoutube;
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{uri: data[0].strMealThumb}} />
      <View style={styles.inner_container}>
        <Text style={styles.text}>{data[0].strMeal}</Text>
        <Text style={styles.country}>{data[0].strArea}</Text>
        <Text style={styles.description}>{data[0].strInstructions}</Text>
        <OpenURLButton url={link}>Watch on Youtube</OpenURLButton>
      </View>
    </ScrollView>
  );
};

export default Details;



const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert('Don`t know how to open this URL: '`${url}`);
    }
  }, [url]);
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.button_text}>{children}</Text>
    </TouchableOpacity>
  );
};

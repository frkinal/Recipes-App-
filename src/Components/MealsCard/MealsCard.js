import React from 'react';
import {
  TouchableNativeFeedback,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import styles from './MealsCard.styles';

const MealsCard = ({meals, onSelect}) => {
  return (
    <TouchableNativeFeedback onPress={onSelect}>
      <View style={styles.container}>
        <ImageBackground
          source={{uri: meals.strMealThumb}}
          style={styles.image}
          imageStyle={styles.image}
          >
          <View style={styles.banner_container}>
            <Text style={styles.text}>{meals.strMeal}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableNativeFeedback>
  );
};

export default MealsCard;

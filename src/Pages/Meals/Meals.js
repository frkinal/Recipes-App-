import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import useFetch from '../../Hooks/useFetch';
import styles from './Meals.styles';

import Config from 'react-native-config';

import Loading from '../../Components/Loading';
import Error from '../../Components/Error';
import MealsCard from '../../Components/MealsCard/MealsCard';

const Meals = ({navigation, route}) => {
  const {strCategory} = route.params;
  const {loading, error, data} = useFetch(
    'meals',
    Config.MEALS_URL + strCategory ,
  );

  const handleMealsSelect = idMeal => {
    navigation.navigate('DetailsPage', {idMeal});
  };

  const renderMeals = ({item}) => {
    return (
      <MealsCard meals={item} onSelect={() => handleMealsSelect(item.idMeal)} />
    );
  };
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderMeals} />
    </SafeAreaView>
  );
};

export default Meals;

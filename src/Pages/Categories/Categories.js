import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';

import Config from 'react-native-config';
import Loading from '../../Components/Loading';
import Error from '../../Components/Error';

import CategoriesCard from '../../Components/CategoriesCard';
import styles from './Categories.styles';
import useFetch from '../../Hooks/useFetch';

const Categories = ({navigation}) => {
  const {loading, data, error} = useFetch('categories', Config.CATEGORIES_URL);

  const handleCategoriesSelect = strCategory => {
    navigation.navigate('MealsPage', {strCategory});
  };

  const renderCategories = ({item}) => {
    return (
      <CategoriesCard
        categories={item}
        onSelect={() => handleCategoriesSelect(item.strCategory)}
      />
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
      <FlatList data={data} renderItem={renderCategories} />
    </SafeAreaView>
  );
};

export default Categories;

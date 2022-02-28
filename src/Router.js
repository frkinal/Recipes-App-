import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Categories from './Pages/Categories';
import Meals from './Pages/Meals';
import Details from './Pages/Details';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CategoriesPage"
          component={Categories}
          options={{
            title: 'Categories',
            headerTitleStyle: {color: '#ffa500'}
          }}
        />
        <Stack.Screen
          name="MealsPage"
          component={Meals}
          options={{
            title: 'Meals',
            headerTitleStyle: {color: '#ffa500'},
          }}
        />
        <Stack.Screen
          name="DetailsPage"
          component={Details}
          options={{
            title: 'Details',
            headerTitleStyle: {color: '#ffa500'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

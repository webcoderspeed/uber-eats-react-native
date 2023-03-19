import { View, Text } from 'react-native';
import React from 'react';
import About from '../components/restaurantDetail/About';
import { Divider } from 'react-native-elements';
import MenuItems from '../components/restaurantDetail/MenuItems';

const RestaurantDetail = ({ route,  }) => {
  return (
    <View>
      <About route={route} />
      <Divider
        width={1.8}
        className='my-[10px]'
      />
      <MenuItems />
    </View>
  );
};

export default RestaurantDetail;

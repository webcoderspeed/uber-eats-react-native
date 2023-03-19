import { View, Text } from 'react-native';
import React from 'react';
import About from '../components/restaurantDetail/About';
import { Divider } from 'react-native-elements';
import MenuItems from '../components/restaurantDetail/MenuItems';
import ViewCart from '../components/restaurantDetail/ViewCart';

const RestaurantDetail = ({ route, navigation }) => {


  return (
    <View>
      <About route={route} />
      <Divider
        width={1.8}
        className='my-[10px]'
      />
      <MenuItems 
        restaurantName={route?.params?.restaurant?.name}
      />
      <ViewCart
        navigation={navigation}
        restaurantName={route?.params?.restaurant?.name}
      />
    </View>
  );
};

export default RestaurantDetail;

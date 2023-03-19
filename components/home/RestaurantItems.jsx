import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { StyledComponent } from 'nativewind';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const RestaurantItems = ({ restaurants, navigation }) => {
  return (
    <>
      {restaurants?.map((restaurant, index) => (
        <StyledComponent
          component={TouchableOpacity}
          activeOpacity={1}
          className='my-2'
          key={index}
          onPress={() =>
            navigation.navigate('RestaurantDetail', { restaurant })
          }
        >
          <StyledComponent
            component={View}
            className='bg-white p-4'
          >
            <RestaurantImage image_url={restaurant.image_url} />
            <RestaurantInfo {...restaurant} />
          </StyledComponent>
        </StyledComponent>
      ))}
    </>
  );
};

export default RestaurantItems;

const RestaurantImage = ({ image_url }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <>
      <StyledComponent
        source={{
          uri: image_url,
        }}
        component={Image}
        className='h-60 w-full relative rounded-lg'
      />
      <StyledComponent
        component={TouchableOpacity}
        className='absolute right-5 top-5 z-10'
        onPress={() => setIsLiked((prev) => !prev)}
      >
        <MaterialCommunityIcons
          name={isLiked ? 'heart' : 'heart-outline'}
          size={24}
          color={isLiked ? 'red' : '#fff'}
        />
      </StyledComponent>
    </>
  );
};

const RestaurantInfo = ({
  name,
  rating,
  review_count,
  price,
  categories,
  ...props
}) => {
  return (
    <StyledComponent
      component={View}
      className='flex-row items-center justify-between py-4 '
    >
      <StyledComponent component={View}>
        <StyledComponent
          component={Text}
          className='font-bold'
        >
          {name}
        </StyledComponent>
        <StyledComponent
          component={Text}
          className='text-gray-500'
        >
          {`${rating} Stars (${review_count})`}
        </StyledComponent>
      </StyledComponent>
      <StyledComponent
        component={View}
        className='flex-row text-black bg-gray-200 w-8 h-8 rounded-full items-center justify-center'
      >
        <StyledComponent
          component={Text}
          className=''
        >
          {rating}
        </StyledComponent>
      </StyledComponent>
    </StyledComponent>
  );
};

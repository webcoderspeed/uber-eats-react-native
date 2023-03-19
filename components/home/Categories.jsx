import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { StyledComponent } from 'nativewind';

const items = [
  {
    image: require('../../assets/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    image: require('../../assets/images/soft-drink.png'),
    text: 'Soft Drinks',
  },
  {
    image: require('../../assets/images/bread.png'),
    text: 'Bakery Items',
  },
  {
    image: require('../../assets/images/fast-food.png'),
    text: 'Fast Food',
  },
  {
    image: require('../../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../../assets/images/coffee.png'),
    text: 'Coffee & Tea',
  },
  {
    image: require('../../assets/images/desserts.png'),
    text: 'Desserts',
  },
];

const Categories = () => {
  return (
    <StyledComponent
      className='flex-row space-x-3 p-2 bg-white'
      component={ScrollView}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {items.map((item, index) => (
        <StyledComponent
          className='items-center justify-center space-y-2  p-2 mr-4'
          component={TouchableOpacity}
          key={index}
        >
          <StyledComponent
            className='w-12 h-12 p-2'
            component={Image}
            source={item.image}
          />
          <StyledComponent
            className='font-semibold'
            component={Text}
          >
            {item.text}
          </StyledComponent>
        </StyledComponent>
      ))}
    </StyledComponent>
  );
};

export default Categories;

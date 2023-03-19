import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const BottomTabs = () => {
  return (
    <View className='flex-row m-[10px] mx-[30px] justify-between'>
      <Icon
        name='home'
        text='Home'
      />
      <Icon
        name='search'
        text='Browse'
      />
      <Icon
        name='shopping-bag'
        text='Grocery'
      />
      <Icon
        name='receipt'
        text='Orders'
      />
      <Icon
        name='user'
        text='Account'
      />
    </View>
  );
};

export default BottomTabs;

const Icon = ({ name, text }) => {
  return (
    <TouchableOpacity
      className='mb-[3px] items-center'
    >
      <FontAwesome5
        name={name}
        size={25}
     
      />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

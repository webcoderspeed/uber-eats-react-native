import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { foods } from './About';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const MenuItems = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods?.map((food, index) => (
        <View
          className='flex-row justify-between m-[10px]  w-full'
          key={index}
        >
          <BouncyCheckbox 
            iconStyle={{borderColor: 'lightgray', borderRadius:0}}
            fillColor='green'
            innerIconStyle={{ borderColor: 'lightgray', borderRadius: 0 }}
          />
          <FoodInfo food={food} />
          <FoodImage food={food} />
          <Divider
            width={0.5}
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default MenuItems;

const FoodInfo = ({ food: { title, description, price } }) => (
  <View className='w-[200px] justify-evenly'>
    <Text className='text-[19px] font-semibold'>{title}</Text>
    <Text>{description}</Text>
    <Text>{price}</Text>
  </View>
);

const FoodImage = ({ food: { image } }) => {
  return (
    <Image
      source={{ uri: image }}
      className='w-[100px] h-[100px] rounded-lg'
    />
  );
};

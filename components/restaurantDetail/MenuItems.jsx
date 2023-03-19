import { View, Text, Image, ScrollView,  } from 'react-native';
import React from 'react';
import { foods } from './About';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/actions/cart.actions';

const MenuItems = ({ restaurantName }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title));

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flexGrow: 1 }}
    >
      {foods?.map((food, index) => (
        <View
          className='flex-row justify-between m-[10px] mx-[20px] w-full'
          key={index}
        >
          <BouncyCheckbox
            iconStyle={{ borderColor: 'lightgray', borderRadius: 0 }}
            fillColor='green'
            innerIconStyle={{ borderColor: 'lightgray', borderRadius: 0 }}
            onPress={(checkboxValue) =>
              addItemToCart({
                dispatch,
                item: { ...food, restaurantName, checkboxValue },
              })
            }
            isChecked={isFoodInCart(food, cartItems)}
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

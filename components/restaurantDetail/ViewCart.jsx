import { View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ViewCart = ({  }) => {
  return (
    <View className='flex-1 flex-row absolute bottom-20 z-[999]'>
      <View className='flex-row justify-center w-full'>
        <TouchableOpacity className='mt-[20px] bg-black items-center p-[13px] rounded-[30px] w-[300px] relative'>
          <Text className='text-white text-[20px]'>
            View Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ViewCart;

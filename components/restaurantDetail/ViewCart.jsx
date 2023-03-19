import { View, Text, Modal } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

const ViewCart = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const items = useSelector((state) => state.cartReducer.selectedItems.items);

  const total = items
    ?.map((item) => Number(item?.price?.replace('$', '')))
    ?.reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  const checkoutModalContent = () => { 
    return (
      <View className='flex-1 items-center justify-center mt-[30px]'>
        <View
          className='bg-black p-[10px] rounded-[30px] w-[150px] items-center'
        >
          <TouchableOpacity
            onPress={() => setIsModalVisible(false)}
          >
            <Text
              className='text-white'
            >
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      )
  }


  return (
    <>
      <Modal
        onRequestClose={() => setIsModalVisible(false)}
        animationType='slide'
        visible={isModalVisible}
        transparent
      >
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View className='flex-1 flex-row absolute bottom-20 z-[999]'>
          <View className='flex-row justify-center w-full'>
            <TouchableOpacity className='mt-[20px] bg-black items-center p-[13px] rounded-[30px] w-[300px] relative'
              onPress={() => setIsModalVisible(true)}
            >
              <Text className='text-white text-[20px] '>
                View Cart {totalUSD}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default ViewCart;

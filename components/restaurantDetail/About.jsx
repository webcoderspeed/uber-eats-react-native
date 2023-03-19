import { View, Text, Image } from 'react-native';
import React from 'react';

const foods = [
  {
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image:
      'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
  },
  {
    title: 'Tandoori Chicken',
    description:
      'Amazing Indian dish with tenderloin chicken off the sizzles 🔥',
    price: '$19.20',
    image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg',
  },
  {
    title: 'Chilaquiles',
    description:
      'Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽',
    price: '$14.50',
    image:
      'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg',
  },
  {
    title: 'Chicken Caesar Salad',
    description:
      'One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!',
    price: '$21.50',
    image:
      'https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da',
  },
  {
    title: 'Lasagna',
    description: 'With butter lettuce, tomato and sauce bechamel',
    price: '$13.50',
    image:
      'https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg',
  },
];

const About = () => {
  return (
    <View>
      <RestaurantImage image={foods[0]?.image} />
      <RestaurantTitle title={foods[0].title} />
      <RestaurantDescription description={foods[0].description} />
    </View>
  );
};

export default About;

const RestaurantImage = ({ image }) => {
  return (
    <Image
      source={{ uri: image }}
      style={{ width: '100%', height: 180 }}
    />
  );
};

const RestaurantTitle = ({ title }) => (
  <Text className='text-[29px] mt-[10px] mx-[15px] font-semibold'>{title}</Text>
);

const RestaurantDescription = ({ description }) => (
  <Text className='my-[10px] mx-[15] font-normal text-[15.5px]'>
    {description}
  </Text>
);

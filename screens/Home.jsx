import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderTabs from '../components/HeaderTabs';
import { StyledComponent } from 'nativewind';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItems from '../components/RestaurantItems';

const YELP_API_KEY =
  'kku5x0K53NPgLJc54YMp8BOs8p33gqvqo4YWhYV5kg8B774pn_C6iTNey67ulL0w9n_5cNdT4XYVLeKIRlJE-ijerg3ehy2s2u73NyN8fwWwaK3cTINDcGFSdaDDY3Yx';

const Home = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [search, setSearch] = useState('Las Vegas');

  useEffect(() => {
    const getRestaurantFromYelp = () => {
      fetch(
        `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${search}`,
        {
          headers: {
            Authorization: `Bearer ${YELP_API_KEY}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setRestaurantData(data.businesses);
        });
    };

    getRestaurantFromYelp();
  }, [search]);

  return (
    <SafeAreaView className='bg-gray-100 h-full pt-8'>
      <StyledComponent
        className='bg-white p-3'
        component={View}
      >
        <HeaderTabs />
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      </StyledComponent>
      <StyledComponent
        component={ScrollView}
        showsVerticalScrollIndicator={false}
      >
        <Categories />
        <RestaurantItems restaurants={restaurantData} />
      </StyledComponent>
    </SafeAreaView>
  );
};

export default Home;

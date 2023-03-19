import { View, Text, SafeAreaView, ScrollView,  } from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderTabs from '../components/home/HeaderTabs';
import { StyledComponent } from 'nativewind';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItems from '../components/home/RestaurantItems';
import { Divider } from 'react-native-elements'
import BottomTabs from '../components/home/BottomTabs';

const YELP_API_KEY =
  'kku5x0K53NPgLJc54YMp8BOs8p33gqvqo4YWhYV5kg8B774pn_C6iTNey67ulL0w9n_5cNdT4XYVLeKIRlJE-ijerg3ehy2s2u73NyN8fwWwaK3cTINDcGFSdaDDY3Yx';

const Home = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [search, setSearch] = useState('New York');
  const [activeTab, setActiveTab] = useState('Delivery');

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
          const filteredData = data?.businesses?.filter((business) =>
            business?.transactions?.includes(activeTab?.toLowerCase())
          );

          setRestaurantData(filteredData);
        });
    };

    getRestaurantFromYelp();
  }, [search, activeTab]);

  return (
    <SafeAreaView className='bg-gray-100 h-full pt-8'>
      <StyledComponent
        className='bg-white p-3'
        component={View}
      >
        <HeaderTabs
          {...{
            activeTab,
            setActiveTab,
          }}
        />
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
        <Divider width={1} />

      </StyledComponent>
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;

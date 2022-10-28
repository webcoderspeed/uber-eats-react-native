import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { StyledComponent } from 'nativewind';

const HeaderTabs = () => {

  const [activeTab, setActiveTab] = useState('Delivery');


  return (
    <StyledComponent
      className='flex-row justify-center items-center '
      component={SafeAreaView}
    >
      <HeaderButton title='Delivery' 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton title='Pickup' 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </StyledComponent>
  );
};

export default HeaderTabs;

const HeaderButton = ({ title, 
  activeTab,
  setActiveTab
}) => {
  return (
    <TouchableOpacity className={
      activeTab === title ? 'bg-black px-4 py-2 rounded-full' : 'text-black px-4 py-2'
    }
      onPress={() => setActiveTab(title)}
    >
      <StyledComponent
        component={Text}
        className={
          activeTab === title ? 'text-white font-bold' : 'font-bold'
        }
      >
        {title}
      </StyledComponent>
    </TouchableOpacity>
  );
};

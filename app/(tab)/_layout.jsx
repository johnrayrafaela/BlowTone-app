import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons, images } from '../../constants';

const TabIcon = ({ icon }) => {
  return (
    <View>
      <Image
        source={icon}
        resizeMode='contain'
        className="w-6 h-6"
        style={{ tintColor: 'white' }} // Set icon color to white
      />
    </View>
  );
};

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#60a5fa', // Set your desired color here
            borderTopRightRadius: 20, // Set desired radius for top right corner
            overflow: 'hidden', // Ensure rounding is applied
            borderTopWidth: 0, // Optional: remove top border
            height: 60, // Set your desired height here
          },
        }}
      >
        <Tabs.Screen
          name='home'
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: () => (
              <TabIcon
                icon={icons.home} 
              />
            ),
          }}
        />
        
        <Tabs.Screen
          name='search'
          options={{
            title: 'Search',
            headerShown: false,
            tabBarIcon: () => (
              <TabIcon
                icon={icons.searchIcon} 
              />
            ),
          }}
        />


        <Tabs.Screen
          name='library'
          options={{
            title: 'Library',
            headerShown: false,
            tabBarIcon: () => (
              <TabIcon
                icon={icons.library} 
              />
            ),
          }}
        />

        
        <Tabs.Screen
          name='settings'
          options={{
            title: 'Settings',
            headerShown: false,
            tabBarIcon: () => (
              <TabIcon
                icon={icons.settings} 
              />
            ),
          }}
        />
        
        
      </Tabs>
    </>
  );
};

export default TabLayout;

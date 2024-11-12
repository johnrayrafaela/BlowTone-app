import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { icons } from '../../constants';


const SettingItem = ({ title, onPress, isToggle, toggleStatus }) => (
  <TouchableOpacity onPress={onPress}>
    <View className="flex-row p-3 justify-between items-center">
      <Text className="text-white text-base font-pregular">{title}</Text>
      {isToggle ? (
        <Text className={`text-base font-pregular ${toggleStatus ? 'text-green-400' : 'text-white'}`}>
          {toggleStatus ? 'On' : 'Off'}</Text>
      ) : (
        <Image className="h-4 w-4" source={icons.arrow} tintColor='white' />
      )}
    </View>
  </TouchableOpacity>
);

const Settings = () => {
  const [offlineMode, setOfflineMode] = useState(false);

  const settingsOptions = [
    { title: 'Account'},
    { title: 'Offline Mode', isToggle: true, toggleStatus: offlineMode, onPress: () => setOfflineMode(prev => !prev) },
    { title: 'Downloads'},
    { title: 'Security & Privacy'},
    { title: 'Device'},
    { title: 'Explicit Content'},
    { title: 'Video Quality'},
    { title: 'Audio Quality'},
    { title: 'Notification'},
    { title: 'Car', },
    { title: 'Settings'},
    { title: 'Voice Assistants & Apps'},
    { title: 'Storage', },
  ];

  return (
    <View className="flex-1 bg-neutral-900">
      <View className="p-3">
        <Text className="text-white font-pmedium text-3xl">SETTINGS</Text>
      </View>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        {settingsOptions.map((option, index) => (
          <SettingItem
            key={index}
            title={option.title}
            isToggle={option.isToggle}
            toggleStatus={option.toggleStatus}
            onPress={option.onPress}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Settings;

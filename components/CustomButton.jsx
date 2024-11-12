import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CustomButton = ({title,handlePress, contentContainerStyle,textStyles, isLoading}) => {
  return (
    <TouchableOpacity
    onPress={handlePress}
    activeOpacity={0.7}
    className={`rounded-3xl  bg-blue-300 h-12 w-32
    justify-center items-center ${contentContainerStyle}${isLoading}'opcity-50':''}`}
    >
        <Text className={`font-bold text-slate-800 ${textStyles}`}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

export default CustomButton
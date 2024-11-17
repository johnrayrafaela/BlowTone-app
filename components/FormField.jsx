import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { icons } from "../constants";

const FormField = ({title,value,placeholder,handleChangeText,otherStyles,...props}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-white pl-2 font-pmedium'>{title}</Text>
      <View className="className='items-center justify-center font-pmedium ">
        <TextInput
          className="flex-1 text-white font-medium h-10 w-full rounded-3xl pl-2  bg-neutral-900"
          value={value}
          placeholder={title+':'}
          placeholderTextColor="grey"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6 "
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField
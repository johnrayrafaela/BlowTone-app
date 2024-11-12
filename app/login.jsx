import { StyleSheet, Text, View , Image, TextInput} from 'react-native';
import React from 'react';
import signup from './signup';
import { Link } from 'expo-router';
import { images } from '../constants';


const login = () => {
  return (
    <View className="flex-1 items-center justify-center bg-neutral-900">
      
        <Image className='object-fill h-48 w-96 mr-5 object-center mt-96'
          source={images.logo}/>

          <View className=' items-center bg-neutral-800 w-full h-full rounded-tr-3xl' >
            <Text className="mt-10 text-2xl text-blue-300 font-psemibold">LOGIN</Text>
            <View className='p-2 w-full'>
              <Text className='text-white pl-2 font-pmedium'>Username/Email:</Text>
              <TextInput placeholderTextColor='gray' 
                className='items-center font-pmedium h-10 rounded-3xl pl-2 m-1 bg-neutral-900 placeholder:text-white' placeholder='Username/Email:'></TextInput>
            </View>
            <View className='p-2 w-full'>
              <Text className='text-white pl-2 font-pmedium '>Password:</Text>
              <TextInput secureTextEntry={true} placeholderTextColor='gray' 
               className='items-center font-pmedium h-10 rounded-3xl pl-2 m-1 bg-neutral-900  placeholder:text-white' placeholder='Password:'></TextInput>
            </View> 
            <View className="mt-10 w-32 items-center h-12  rounded-3xl  bg-blue-300 justify-center" >
              <Link className=' text-center font-bold text-stone-800  ' href='/home'>LOGIN</Link>
                
            </View>
            <View >
                <Link className="text-white " href='signup'>Don't have an account yet?</Link>
            </View>
              
          </View>
    </View>
  )
}

export default login

const styles = StyleSheet.create({
  
})
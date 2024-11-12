import { StyleSheet, Text, View ,Image, TextInput, Button} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { images } from '../constants'

const signup = () => {
  return (
    <View className="flex-1 items-center justify-center bg-neutral-900">
      
        <Image className='object-fill h-48 w-96 mr-5 object-center mt-96'
          source={images.logo}/>

          <View className=' items-center bg-neutral-800 w-full h-full rounded-tr-3xl' >
            <Text className="mt-10 text-2xl text-blue-300 font-psemibold">SIGN UP</Text>
            <View className='p-2 w-full'>
              <Text className='text-white pl-2 font-pmedium'>Username/Email:</Text>
              <TextInput placeholderTextColor='gray' className='items-center font-pmedium h-10 rounded-3xl pl-2 m-1 bg-neutral-900 placeholder:text-white' placeholder='Username/Email:'></TextInput>
            </View>
            <View className='p-2 w-full'>
              <Text className='text-white pl-2 font-pmedium '>Password:</Text>
              <TextInput secureTextEntry={true} placeholderTextColor='gray' className='items-center font-pmedium h-10 rounded-3xl pl-2 m-1 bg-neutral-900  placeholder:text-white' placeholder='Password:'></TextInput>
            </View> 
            <View className='p-2 w-full'>
              <Text className='text-white pl-2 font-pmedium '>Confirm Password:</Text>
              <TextInput secureTextEntry={true} placeholderTextColor='gray' className='items-center font-pmedium h-10 rounded-3xl pl-2 m-1 bg-neutral-900  placeholder:text-white' placeholder='Confirm Password:'></TextInput>
            </View> 
            <View className="mt-5 w-32 items-center h-12  rounded-3xl  bg-blue-300 justify-center" >
              <Link className=' text-center font-bold text-stone-800  ' href='login'>SIGN UP</Link>
            </View>
            <View >
                <Link className="text-white " href='signup'>Already have an account?</Link>
            </View>
          </View>
    </View>
  )
}

export default signup

const styles = StyleSheet.create({})
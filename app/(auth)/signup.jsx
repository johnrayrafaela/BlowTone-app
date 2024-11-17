import { View, Text, Image, ScrollView , TextInput} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link , router} from 'expo-router'

const login = () => {
  const [form, setForm]=useState({
    email: '',
    password:''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = () =>{
    
  }

  return (
    <SafeAreaView className=" h-full bg-neutral-900">
      <ScrollView>
        <View className="flex-1 items-center justify-center">
          <Image className='object-fill h-48 w-96 mr-5 object-center mt-72'
            source={images.logo}/>

            <View className=' items-center bg-neutral-800 w-full h-full rounded-tr-3xl' >

              <Text className="mt-10 text-2xl text-blue-300 font-psemibold">Sign Up</Text>

              <View className='p-2 w-full'>
                <FormField
                  title="Username"
                  value={form.username}
                  handleChangeText={(e) => setForm({ ...form, username: e })}
                  
                />

              </View> 

              <View className='p-2 w-full'>
                <FormField
                  title="Email:"
                  value={form.email}
                  handleChangeText={(e) => setForm({ ...form, email: e })}
                  keyboardType="email-address"
                />
              </View>

              <View className='p-2 w-full'>
                <FormField
                  title="Password"
                  value={form.password}
                  handleChangeText={(e) => setForm({ ...form, password: e })}
                  
                />

              </View> 

              
              <CustomButton
                  title="Sign Up"
                  handlePress={()=>router.push('/login')}
                  containerStyles="w-full mt-7"
                  isLoading={isSubmitting}
              />

              <View >
                  <Link className="text-white " href='signup'>Already have an account?</Link>
              </View>
                
            </View>

        </View> 
      </ScrollView>
    </SafeAreaView>
  )
}
export default login



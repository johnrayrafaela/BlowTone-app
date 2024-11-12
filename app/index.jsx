import { Link, router, Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { images } from '../constants';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import CustomButton from '../components/CustomButton';


export default function App() {
  return (
    <SafeAreaView className='h-full bg-neutral-900'>
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className="flex-1 items-center justify-center">
          <Image className='object-fill h-48 w-96 mr-5 '
                source={images.logo}/>
            
            <Text className=' text-center font-pbold text-3xl text-blue-300 object-fill w-56 mb-28' >LISTEN TO MUSIC FOR FREE</Text>
            
            <CustomButton 
            title='GET STARTED'
            handlePress={()=>router.push('/login')}
            contentContainerStyle='h-12 w-32'
            >

            </CustomButton>
            
          </View>


      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}



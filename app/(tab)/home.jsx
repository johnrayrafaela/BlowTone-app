import { View, Text ,Image, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import {images,icons} from '../../constants'


const Home = () => {

  
  return (
    
    
    <View className="flex-1  bg-neutral-900">
      <ScrollView Vertical={true} showsVerticalScrollIndicator={false}> 
      <View className="flex-row justify-between">
        <Image
              className="h-16 w-64  -ml-10 "
              source={images.logo}/>

          <View className="flex-row items-center  p-5 ">
              
            <Image
              className="h-10 w-10  items-center "
              source={icons.profile}
              tintColor='white'/>        
              
          </View> 
        </View>

        <View className="flex-row justify-between border-b-2 border-blue-400" >
          <Text className="text-white font-pbold ml-3 text-xl">WELCOME</Text>

          <View className="flex-row items-center mr-3 ">
            

            <Image
              className="h-5 w-5  items-center m-1"
              source={icons.download}
              tintColor='white'/> 

            <Image
              className="h-5 w-5  items-center  m-1"
              source={icons.notif}
              tintColor='white'/>

            
              <Image
                className="h-5 w-5  items-center  m-1"
                source={icons.settings}
                tintColor='white'/>
            
          </View>     

          
        </View>

            <View className="p-3">
              <View className="p-1 flex-row justify-center">
                
                  <View className=' mr-2 bg- h-16 w-40 rounded-2xl bg-neutral-800 flex-row'  >
                      <Image className=" h-16 w-14 rounded-tl-2xl rounded-bl-2xl"
                        source={images.wave_thum}/>
                      <View className="flex-col justify-center items-start ml-2">
                        <Text className="text-white  font-pmedium">Seasons</Text>
                        <Text className="text-neutral-500  font-pregular text-xs -mt-1">Wave to Earth</Text>
                      </View>
                      
                  </View>

                  <View className=' mr-2 bg- h-16 w-40 rounded-2xl bg-neutral-800 flex-row'  >
                      <Image className=" h-16 w-14 rounded-tl-2xl rounded-bl-2xl"
                        source={images.apple}/>
                      <View className="flex-col justify-center items-start ml-2">
                        <Text className="text-white  font-pmedium">Apple Cider</Text>
                        <Text className="text-neutral-500  font-pregular text-xs -mt-1">Baebadobee</Text>
                      </View>
                      
                  </View> 
                  
              </View>

              <View className="p-1 flex-row justify-center">
                
                  <View className=' mr-2 bg- h-16 w-40 rounded-2xl bg-neutral-800 flex-row'  >
                      <Image className=" h-16 w-14 rounded-tl-2xl rounded-bl-2xl"
                        source={images.love}/>
                      <View className="flex-col justify-center items-start ml-2">
                        <Text className="text-white  font-pmedium">Love</Text>
                        <Text className="text-neutral-500  font-pregular text-xs -mt-1">Wave to Earth</Text>
                      </View>
                      
                  </View>

                  <View className=' mr-2 bg- h-16 w-40 rounded-2xl bg-neutral-800 flex-row'  >
                      <Image className=" h-16 w-14 rounded-tl-2xl rounded-bl-2xl"
                        source={images.ilys}/>
                      <View className="flex-col justify-center items-start ml-2">
                        <Text className="text-white  font-pmedium">I Love You So</Text>
                        <Text className="text-neutral-500  font-pregular text-xs -mt-1">The Walters</Text>
                      </View>
                      
                  </View> 
                  
              </View> 

              <View className="p-1 flex-row justify-center">
                
                  <View className=' mr-2 bg- h-16 w-40 rounded-2xl bg-neutral-800 flex-row'  >
                      <Image className=" h-16 w-14 rounded-tl-2xl rounded-bl-2xl"
                        source={images.tiptoe}/>
                      <View className="flex-col justify-center items-start ml-2">
                        <Text className="text-white  font-pmedium">Tip Toe</Text>
                        <Text className="text-neutral-500  font-pregular text-xs -mt-1">HYBS</Text>
                      </View>
                      
                  </View>

                  <View className=' mr-2 bg- h-16 w-40 rounded-2xl bg-neutral-800 flex-row'  >
                      <Image className=" h-16 w-14 rounded-tl-2xl rounded-bl-2xl"
                        source={images.loose}/>
                      <View className="flex-col justify-center items-start ml-2">
                        <Text className="text-white  font-pmedium">Loose</Text>
                        <Text className="text-neutral-500  font-pregular text-xs -mt-1">Daniel Caesar</Text>
                      </View>
                      
                  </View> 
                  
              </View> 
            </View>

              {/* Made for you */}

              <View className="mt-2">
                <Text className="text-white font-pbold ml-2 text-3xl">Made for You</Text>
              </View>

              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View className="ml-3 mr-2 justify-between">
                    <View className="  rounded-2xl overflow-hidden h-40 w-40">
                        <Image 
                          className="h-full w-full"
                          source={images.see_u_again}
                        />
                    </View>
                    <Text className="text-white font-bold text-base">See You Again</Text>
                    <Text className="text-neutral-500 font-pregular text-xs ">Tyler the Creator</Text>
                </View>

                <View className="ml-3 mr-2 justify-between">
                    <View className="  rounded-2xl overflow-hidden h-40 w-40">
                        <Image 
                          className="h-full w-full"
                          source={images.promise}
                        />
                    </View>
                      <Text className="text-white font-bold text-base ">Promise</Text>
                      <Text className="text-neutral-500 font-pregular text-xs ">Laufey</Text>
                      
                </View>
                

                <View className="ml-3 mr-3 justify-between">
                    <View className="  rounded-2xl overflow-hidden h-40 w-40">
                        <Image 
                          className="h-full w-full"
                          source={images.slowly}
                        />
                    </View>
                    <Text className="text-white font-bold text-base">Slowly Dancin in the Dark</Text>
                    <Text className="text-neutral-500 font-pregular text-xs ">Joji</Text>
                </View>
              </ScrollView>



              {/* playlist */}

              <View className="mt-5">
                <Text className="text-white font-pbold ml-2 text-3xl">Playlist</Text>
              </View>

              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View className="ml-3 mr-2 justify-between">
                    <View className="  rounded-2xl overflow-hidden h-40 w-40">
                        <Image 
                          className="h-full w-full"
                          source={images.wave}
                        />
                    </View>
                    <Text className="text-white font-bold text-base">Wave to Earth</Text>
                    <Text className="text-neutral-500 font-pregular text-xs ">Wave to Earth</Text>
                </View>

                <View className="ml-3 mr-2 justify-between">
                    <View className="  rounded-2xl overflow-hidden h-40 w-40">
                        <Image 
                          className="h-full w-full"
                          source={images.playlist}
                        />
                    </View>
                    <Text className="text-white font-bold text-base">R4F Playlist</Text>
                    <Text className="text-neutral-500 font-pregular text-xs ">Wavre to Earth, Tyler...</Text>
                </View>

                <View className="ml-3 mr-3 justify-between">
                    <View className="  rounded-2xl overflow-hidden h-40 w-40">
                        <Image 
                          className="h-full w-full"
                          source={images.glue}
                        />
                    </View>
                    <Text className="text-white font-bold text-base">Baebadobee</Text>
                    <Text className="text-neutral-500 font-pregular text-xs ">Baebadobee</Text>
                </View>
              </ScrollView>
    </ScrollView>      
    </View>
   
  )
}

export default Home
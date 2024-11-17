import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Authlayout = () => {
  return (
    <>
    <Stack>
        <Stack.Screen
        name="login"
        options={{
            headerShown:false
        }}>
            
        </Stack.Screen>

        <Stack.Screen
        name="signup"
        options={{
            headerShown:false
        }}>
            
        </Stack.Screen>
    </Stack>
    
    </>
  )
}

export default Authlayout
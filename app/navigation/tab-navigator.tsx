import React from 'react';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { ScanScreen } from '../screens/Scan-screen';
import { Image, StyleSheet } from 'react-native';
import { BrowseScreen } from '../screens/Browse-screen';
export type TabsParamList = {
  scan: undefined
  profile: undefined
};

const TabStack = createBottomTabNavigator<TabsParamList>();

export const TabNavigator = () => {
  return (
    <TabStack.Navigator>
      <TabStack.Screen 
        name="scan" 
        component={ScanScreen} 
        options={{
          tabBarLabel: 'Cộng Đồng',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../../assets/icons/friendship.png')} style={styles.stretch}/>
          ),
        }}
      />
      <TabStack.Screen 
        name="profile" 
        component={BrowseScreen}
        options={{
          tabBarLabel: 'Thông tin',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('../../assets/icons/manager.png')} style={styles.stretch}/>
          ),
        }}
      />
    </TabStack.Navigator>
  );
};

const styles = StyleSheet.create({
  stretch: {
    width: 25,
    height: 25
  },
});
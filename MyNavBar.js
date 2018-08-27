import React from 'react'
import {StyleSheet, ScrollView, Image, View, StatusBar, Text, TouchableOpacity } from 'react-native'
import {createNavigator, createNavigationContainer, SafeAreaView, TabRouter} from 'react-navigation'
import MCV from './src/style/MCV'

import TopBar from './src/control/TopBar'
import UserIcon from './src/control/UserIcon'

import Home from './src/page/Home'
import Page2 from './src/page/MyPage2'
import Page3 from './src/page/MyPage3'
import Page4 from './src/page/MyPage4'
import Page5 from './src/page/MyPage5'
import Page6 from './src/page/MyPage6'

import navIcon1 from './src/res/ic_smart_hospital_default.png'

const navRouterConfig = [
    {routeName: 'home', routeTitle: '首页'},
    {routeName: 'amy', routeTitle: '按摩椅'},
    {routeName: 'sleepManage', routeTitle: '睡眠检测'},
    {routeName: 'videoCall', routeTitle: '远程诊断'},
    {routeName: 'ypxj', routeTitle: '医普宣教'},
    {routeName: 'mine', routeTitle: '我的'}
]
const CustomTabRouter = TabRouter({
    home: {screen: Home, path: ''},
    amy: {screen: Page2, path: 'page2'},
    sleepManage: {screen: Page3, path: 'page3'},
    videoCall: {screen: Page4, path: 'page4'},
    ypxj: {screen: Page5, path: 'page5'},
    mine: {screen: Page6, path: 'page6'}
})
const CustomTabBar = ({navigation}) => {
    const {routes} = navigation.state
    return (
        <SafeAreaView styles={MCV.navContainer}>
            <StatusBar hidden={true}/>
            {
                routes.map((route, index) => (
                    <TouchableOpacity onPress={() => navigation.navigate(route.routeName)}
                                      style={[MCV.navItem, (navigation.state.index === index ? MCV.navItemSelected : {})]}
                                      key={route.routeName}
                    ><View>
                        <Image style={MCV.navImg} source={navIcon1}/>
                        <Text style={MCV.navItem}>
                            {navRouterConfig.filter(config=>config.routeName===route.routeName)[0].routeTitle}
                        </Text>
                    </View>
                    </TouchableOpacity>
                ))
            }
        </SafeAreaView>
    )
}
const CustomTabView = ({descriptors, navigation}) => {
    const {routes, index} = navigation.state
    const descriptor = descriptors[routes[index].key]
    const ActiveScreen = descriptor.getComponent()
    return (
        <SafeAreaView style={MCV.container} forceInset={{top: 'always'}}>
            <View style={MCV.sideBar}>
                <UserIcon userId={55}></UserIcon>
                <CustomTabBar navigation={navigation}/>
            </View>
            <View style={MCV.rightSide}>
                <TopBar/>
                <ScrollView style={MCV.mainContent}>
                    <ActiveScreen navigation={descriptor.navigation}/>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
const CustomTabs = createNavigationContainer(createNavigator(CustomTabView, CustomTabRouter, {}))




export default CustomTabs
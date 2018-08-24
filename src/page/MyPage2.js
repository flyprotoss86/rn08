import React, {Component} from 'react'
import {View, Text} from 'react-native'
import MCV from '../style/MCV'

export default class MyPage1 extends Component{
    static navigationOptions = {
        header: null,
        title: 'Page2'
    }
    componentWillUnmount(){
        console.log(' page 2 unmount...')
    }
    render (){
        return (
            <View style={[MCV.container,{backgroundColor: '#0F0'}]}>
                <Text onPress={()=>{
                    this.props.navigation.navigate('Page3')
                }}>page2</Text>
            </View>
        )
    }
}


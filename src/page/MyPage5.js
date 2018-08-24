import React, {Component} from 'react'
import {View, Text} from 'react-native'
import MCV from '../style/MCV'

export default class MyPage1 extends Component{
    static navigationOptions = {
        title: 'Page5'
    }
    componentWillUnmount(){
        console.log(' page 5 unmount...')
    }
    render (){
        return (
            <View style={[MCV.container,{backgroundColor: '#0FF'}]}>
                <Text >page5</Text>
            </View>
        )
    }
}


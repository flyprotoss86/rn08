import React, {Component} from 'react'
import {View, Text} from 'react-native'
import MCV from '../style/MCV'

export default class MyPage1 extends Component{
    static navigationOptions = {
        title: 'Page44',
        headerBackTitleStyle: { marginLeft: 20, color: '#ff0000'}
    }
    componentWillUnmount(){
        console.log(' page 4 unmount...')
    }
    render (){
        return (
            <View style={[MCV.container,{backgroundColor: '#FF0'}]}>
                <Text onPress={()=>{
                    this.props.navigation.navigate('Page5')
                }}>page4</Text>
            </View>
        )
    }
}


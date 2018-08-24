import React, {Component} from 'react'
import {View, Text} from 'react-native'
import MCV from '../style/MCV'

export default class MyPage1 extends Component{
    static navigationOptions = {
        title: 'Page6'
    }
    componentWillUnmount(){
        console.log(' page 6 unmount...')
    }
    componentWillMount(){
        console.log(this.props.navigation.state)
    }
    render (){
        return (
            <View style={[MCV.container,{backgroundColor: '#F0F'}]}>
                <Text >page6</Text>
            </View>
        )
    }
}


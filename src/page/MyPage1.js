import React, {Component} from 'react'
import {View, Text} from 'react-native'
import MCV from '../style/MCV'

export default class MyPage1 extends Component{
    static navigationOptions = {
        title: 'HOME'
    }
    componentWillUnmount(){
        console.log(' page 1 unmount...')
    }

    render (){
        return (
            <View style={[MCV.container,{backgroundColor: '#F00'}]}>
                <Text onPress={()=>{
                    this.props.navigation.navigate('Page2')
                }}>page1111</Text>
                {
                    (
                        this.props.navigation.state.params ? (
                            <Text>222</Text>
                        ):null
                    )
                }


            </View>
        )
    }
}


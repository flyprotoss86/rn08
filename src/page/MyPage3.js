import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import MCV from '../style/MCV'

export default class MyPage1 extends Component{
    static navigationOptions = ({navigation})=>({
        title: 'Page33',
        headerBackTitleStyle: { marginLeft: 20, color: '#ff0000'},
        headerLeft: <TouchableOpacity style={{marginLeft: 20}} onPress={()=>{
            console.log(navigation)
            //navigation.navigate('Home')
            navigation.goBack()
        }}><Text style={{color: '#F00'}}>返回</Text></TouchableOpacity>
    })
    componentWillUnmount(){
        console.log(' page 3 unmount...')
    }
    render (){
        return (
            <View style={[MCV.container,{backgroundColor: '#00F'}]}>
                <Text onPress={()=>{
                    this.props.navigation.navigate('Page4')
                }}>page3</Text>
            </View>
        )
    }
}


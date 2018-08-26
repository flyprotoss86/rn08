import React, {Component} from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native'
import MCV from "../style/MCV"
import UserPic from '../res/ic_mine_default.png'

export default class UserIcon extends Component{
    constructor(props){
        super(props)

    }
    componentDidMount(){

    }
    componentWillUnmount(){
    }

    render(){
        return (
            <View style={MCV.userIcon}>
                <TouchableOpacity>
                    <Image
                        style={MCV.userIconImg}
                        source={UserPic}
                        resizeMode='contain'
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

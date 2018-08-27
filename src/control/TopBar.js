import React, {Component} from 'react'
import {View, Text} from 'react-native'
import MCV from "../style/MCV"
import util from '../util/util'

export default class TopBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            now: new Date()
        }
    }
    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState({now: new Date()})
        }, 60 * 1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render(){
        return (
                <View style={MCV.topBar}>
                    <Text style={MCV.topBarTxt}>{util.getTimeStr(this.state.now)}</Text>
                </View>
            )
    }
}

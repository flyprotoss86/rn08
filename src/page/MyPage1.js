import React, {Component} from 'react'
import {View, Text} from 'react-native'
import MCV,{totalWidth,totalHeight,pixRatio} from '../style/MCV'


export default class MyPage1 extends Component{
    static navigationOptions = {
        title: 'HOME'
    }
    componentWillUnmount(){
        console.log(' page 1 unmount...')
    }

    render (){
        let arr = []
        for(let i = 0; i < 50; i++){
            arr.push(i)
        }
        return (
            <View style={[MCV.page, {backgroundColor: '#F00'}]}>
                <Text>@{totalWidth}@{totalHeight}@{pixRatio}@</Text>

                {
                    arr.map((i)=>(
                        <Text key={i}>{i}</Text>
                    ))
                }



            </View>
        )
    }
}


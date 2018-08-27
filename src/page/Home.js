import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {mainWidth, mainHeight} from '../style/MCV'
import LiveBlock from '../control/LiveBlock'
import util from '../util/util'

export default class Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            children: [
                // {id: 11, x: 0, y: 0, width: 2, height: 2, title: '床位信息', description: 'xxx', bgColor: '#34c1f9'},
                // {id: 12, x: 0, y: 2, width: 1, height: 1, icon: '', title: '智慧医院', enName: 'Intelligent hospital', width: 1, height: 1, bgColor: '#9874cb'},
                // {id: 13, x: 1, y: 2, width: 1, height: 1, icon: '', title: '就医指南', enName: 'Medical guide', width: 1, height: 1, bgColor: '#4eafb8'},
                // {id: 14, x: 0, y: 3, width: 2, height: 1, icon: '', titleBottom: '周边服务', width: 2, height: 1, bgImg: '', bgColor: '#fff'},
                // {id: 15, x: 2, y: 0, width: 2, height: 4, icon: '', title: '电影娱乐', width: 2, height: 4, bgImg: '', bgColor: '#fff'},
                // {id: 16, x: 4, y: 0, width: 1, height: 1, icon: '', title: '检查报告', enName: 'The report', width: 1, height: 1, bgColor: '#53a9aa'},
                // {id: 17, x: 4, y: 1, width: 1, height: 1, icon: '', title: '医嘱查询', enName: 'The query', width: 1, height: 1, bgColor: '#2fb6f0'},
                // {id: 18, x: 5, y: 0, width: 1, height: 2, icon: '', title: '呼叫医生', enName: 'Call the nurse', width: 1, height: 2, bgColor: '#3d68c7'},
                // {id: 19, x: 4, y: 2, width: 2, height: 1, icon: '', titleBottom: '食堂订餐', width: 2, height: 1, bgImg: '', bgColor: '#fff'},
                // {id: 10, x: 4, y: 3, width: 2, height: 1, icon: '', titleBottom: '医普宣教', width: 2, height: 1, bgImg: '', bgColor: '#fff'}

            ]
        }
    }

    componentDidMount(){
        util.getData('LiveBlocks').then(data=>{
            this.setState({
                children: data
            })
        },err=>{

        })

    }

    render(){
        return (
            <View style={styles.wrapper}>
                {
                    this.state.children.map(c=>(
                        <LiveBlock key={c.id} {...c}/>
                    ))
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        width: mainWidth,
        height: mainHeight
    }
})


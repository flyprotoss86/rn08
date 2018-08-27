import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import MCV,{mainWidth, mainHeight, pixRatio,textSize, blockWidth, blockHeight, blockMargin} from '../style/MCV'

export default class LiveBlock extends Component{
    constructor(props){
        super(props)
    }

    render() {
        console.log(this.props.bgimgs)
        let styleFromProps={
            top: this.props.y * (blockHeight + blockMargin),
            left: this.props.x * (blockWidth + blockMargin),
            width: this.props.width > 1 ? (this.props.width*blockWidth + (this.props.width-1)*blockMargin) : blockWidth,
            height: this.props.height > 1 ? (this.props.height*blockHeight + (this.props.height-1)*blockMargin) : blockHeight,
            backgroundColor: this.props.bgcolor
        }
        return (
                <TouchableOpacity style={[styles.container, styleFromProps]}>
                    {
                        this.props.bgimgs ? (
                            <Image source={{uri: this.props.bgimgs}}
                                   resizeMode={'stretch'}
                                   style={{width: styleFromProps.width, height: styleFromProps.height, borderRadius:styles.container.borderRadius}}
                            />
                        ):(
                            <Text style={styles.title}>
                                {this.props.title}
                            </Text>
                        )
                    }
                </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        backgroundColor: '#faf',
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: textSize,
        color: '#fff'
    }
})
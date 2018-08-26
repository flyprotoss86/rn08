import { StyleSheet, Dimensions } from 'react-native'
let totalWidth = Dimensions.get('window').width
let totalHeight = Dimensions.get('window').height
let textSize = totalHeight / 35

console.log(totalWidth, totalHeight)

let sideBarWidth = totalWidth / 10
let readingUITitleHeight = textSize * 6
let diaryBodyLine = totalHeight / textSize - 6
let returnButtonHeight = textSize * 5


let MCV = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        color: '#000',
        fontSize: textSize
    },
    sideBar: {
        width: sideBarWidth,
        borderRightWidth: 3,
        borderRightColor: '#ccc'
    },
    userIcon: {
        width: sideBarWidth,
        height: sideBarWidth,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    userIconImg: {
        width: sideBarWidth,
        height: sideBarWidth
    },
    navContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    navItem: {
        fontSize: textSize,
        height: textSize*3,
        lineHeight: textSize*3,
        paddingLeft: 15,
    },
    navImg: {
        position: 'absolute',
        top: textSize,
        left: -8,
        width: textSize,
        height: textSize
    },
    navItemSelected: {
        backgroundColor: '#0FF',
        borderRightWidth: 5,
        borderRightColor: 'purple'
    },
    mainContont: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ddd'
    },
    topBar: {
        height: textSize,
        backgroundColor: '#eee',
        fontSize: textSize
    },
    topBarTxt:{
        fontSize: textSize*0.8,
        textAlign: 'right'
    },
    content: {

    },
    page:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    }
})

export { MCV as default , totalWidth, totalHeight}
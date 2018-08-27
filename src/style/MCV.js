import { StyleSheet, Dimensions, PixelRatio } from 'react-native'
let totalWidth = Dimensions.get('window').width
let totalHeight = Dimensions.get('window').height
let pixRatio = PixelRatio.get()

let textSize = Math.floor(totalHeight / 35)
console.log(totalWidth, totalHeight, textSize, pixRatio)

let sideBarWidth = totalWidth / 10
let topBarHeight = textSize
let mainPadding = 10
let mainWidth = totalWidth - sideBarWidth - 2* mainPadding
let mainHeight = totalHeight - topBarHeight - 2* mainPadding
//首页小方块计算

let blockMargin = 10
let homeBlockWidthNum = 6
let homeBlockHeightNum = 4
let blockWidth = (mainWidth - homeBlockWidthNum * blockMargin) / homeBlockWidthNum
let blockHeight = (mainHeight - homeBlockHeightNum * blockMargin) / homeBlockHeightNum


let readingUITitleHeight = textSize * 6
let diaryBodyLine = totalHeight / textSize - 6
let returnButtonHeight = textSize * 5


let MCV = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        color: '#000',
        backgroundColor: '#fff',
        fontSize: textSize
    },
    sideBar: {
        width: sideBarWidth,
        borderRightWidth: 2,
        borderRightColor: '#ccc',
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 0},
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 5,

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
        backgroundColor: '#b9b4d5',
        borderRightWidth: 2,
        borderRightColor: '#6c6495'
    },
    rightSide: {
        flex: 1,
        flexDirection: 'column',
    },
    topBar: {
        height: topBarHeight,
    },
    topBarTxt:{
        fontSize: topBarHeight * 0.8,
        textAlign: 'right',
        marginRight: 20
    },
    mainContent:{
        backgroundColor: '#fff',//f7e7f9
        paddingTop: mainPadding,
        paddingRight: mainPadding-3,
        paddingBottom: mainPadding / 2,
        paddingLeft: mainPadding+3
    }
})

export { MCV as default , pixRatio, textSize,
    totalWidth, totalHeight,
    mainWidth, mainHeight,
    blockWidth, blockHeight, blockMargin
}

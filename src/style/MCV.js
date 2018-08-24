import { StyleSheet, Dimensions } from 'react-native'
let totalWidth = Dimensions.get('window').width
let totalHeight = Dimensions.get('window').height
let textSize = totalHeight / 20

let readingUITitleHeight = textSize * 6
let diaryBodyLine = totalHeight / textSize - 6
let returnButtonHeight = textSize * 5

let MCV = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000',
        fontSize: textSize
    }
})

export {MCV as default}
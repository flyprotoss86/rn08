import {NetInfo} from 'react-native'
import {apiPre} from '../config/config'
import fetch from 'cross-fetch'

function getTimeStr(time) {
    var dt
    if(typeof time === 'object')
        dt = time
    else
        dt = new Date(time)
    var day=dt.getDate()
    var minutes=dt.getMinutes()
    return dt.getFullYear() + '-' + (dt.getMonth()+1) + '-' + (day > 9 ? day : '0' + day) + ' '
        + dt.getHours() + ':'+ (minutes > 9 ? minutes : '0' + minutes) + ' ' + getDayStr(dt)
}
function getDayStr(dayNum){
    switch (dayNum) {
        case 1:
            return '星期一'
        case 2:
            return '星期二'
        case 3:
            return '星期三'
        case 4:
            return '星期四'
        case 5:
            return '星期五'
        case 6:
            return '星期六'
        default :
            return '星期日'
    }
}

function getData(url){
    if(!url.startsWith('http'))
        url=apiPre+url
    // url='http://10.3.100.200:3000/tab1'
    return new Promise((resolve, reject) => {
        NetInfo.isConnected.fetch().done((isConnected) => {
            if(isConnected){
                let map = {
                    method: 'GET',
                    follow: 20,
                    timeout: 30,
                    size: 0,
                    headers: {
                        //'Content-Type'
                        //'User-Agent'
                        //'Private-header1': 'value1' //自定义消息头
                    }
                }
                fetch(url, map).then(
                    (result) => {
                        result.json().then(obj=>{
                            resolve(obj)
                        })
                    }, (err) => {
                        console.log(err)
                        reject(err)
                    }
                ).catch(err=>{
                    console.log('catch',err)
                })
            } else {
                reject({code: -1, msg: '请先连接网络！'})
            }
        })
    })
}
function showErr(msg){
    console.log(msg)
}
const util = {
    getTimeStr,
    getData
}

export {util as default}
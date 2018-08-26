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

export {getTimeStr}
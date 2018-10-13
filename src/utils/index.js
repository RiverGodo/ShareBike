// import * as fetch from 'axios'


export function  formatDate(unix) {
        function fixedZero(num) {
            return num >= 10 ? ( "" + num ) : ( "0" + num )
        }
        let date = new Date(unix)

        let year = date.getFullYear()
        let month = fixedZero(date.getMonth() + 1)
        let day = fixedZero(date.getDate())
        let hour = fixedZero(date.getHours())
        let minutes = fixedZero(date.getMinutes())
        let seconds = fixedZero(date.getSeconds())

        let timeStr = `${year}-${month}-${day}  ${hour}:${minutes}:${seconds}`

        return timeStr
    }

    // const xhr = fetch.create({
    //     baseURL:'',
    //     timeout:15000
    // })

    // export const axios = {
    //     get(url,data,config){
            
    //     }
    // }
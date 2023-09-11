export function dateConvertor(timestamp, lang = "en") {
    const date = new Date(timestamp)
    let now = new Date()
    let monthNames = {
        en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        az: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'],
    }
    Date.prototype.getMonthName = function () {
        return monthNames[lang][this.getMonth()];
    };


    if (date.getFullYear() === now.getFullYear()) {
        if (date.getMonth() === now.getMonth()) {
            if (date.getDate() === now.getDate()) {
                console.log('burda')
                return 'today at' + date.getHours() + ":" + date.getMinutes()
            } else if (date.getDay() - 1 === now.getDay()) {
                return 'yesterday at' + date.getHours() + ":" + date.getMinutes()
            } else {
                return date.getDate() + " " +  date.getMonthName()
            }
        } else {
            return date.getMonthName() +" " + date.getDay()
        }

    } else {
        return date.getDay() +" " +  date.getMonthName() + " " + date.getFullYear()
    }

}



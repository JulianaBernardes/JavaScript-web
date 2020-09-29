(function ($) {
    $.fn.timer = function (options) {
        const finalOptions = $.extend({ // extend pass object with standard value
            message: 'Soon!',
            schedule: '23:59:59'
        }, options)

        const hoursTens = $('<span class="digit">').html('0')
        const hoursUnit = $('<span class="digit">').html('0')
        const minuteTens = $('<span class="digit">').html('0')
        const minuteUnit = $('<span class="digit">').html('0')
        const secondTens = $('<span class="digit">').html('0')
        const secondUnit = $('<span class="digit">').html('0')

        const separatorHour = $('<span class="separator">').html(':')
        const separatorMinute = $('<span class="separator">').html(':')
        const message = $('<div class="message">').html(finalOptions.message)

        $(this).addClass('timer')
        $(this).append(hoursTens, hoursUnit, separatorHour, minuteTens, minuteUnit, separatorMinute, secondTens, secondUnit, message)

        const regex = new RegExp(/(\d\d):(\d\d):(\d\d)/)
        const targetTime = regex.exec(finalOptions.schedule)
        //console.log(targetTime)

        let timer = setInterval(() => {
            const now = new Date()
            const target = new Date()
            target.setHours(targetTime[1])
            target.setMinutes(targetTime[2])
            target.setSeconds(targetTime[3])

            const differenceInMilli = target.getTime() - now.getTime()
            if (differenceInMilli >= 0) {
                const difference = regex.exec(new Date(differenceInMilli).toISOString())
                //console.log(difference);
                hoursTens.html(difference[1][0])
                hoursUnit.html(difference[1][1])
                minuteTens.html(difference[2][0])
                minuteUnit.html(difference[2][1])
                secondTens.html(difference[3][0])
                secondUnit.html(difference[3][1])
            } else {
                clearInterval(timer)
            }
        },1000)

        return this
    }
})(jQuery)
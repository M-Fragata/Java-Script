const hour = document.querySelector('p#hour')
const minute = document.querySelector('p#minute')
const second = document.querySelector('p#second')


    setInterval( () => {
        const date = new Date()

        const dateHour = date.getHours()
        const dateMinute = date.getMinutes()
        const dateSecond = date.getSeconds()


        hour.textContent = dateHour
        minute.textContent = dateMinute
        second.textContent = dateSecond
    },1000)







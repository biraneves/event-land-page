document.addEventListener('DOMContentLoaded', () => {
    const myBirthday = new Date('Apr 23, 1973 06:00:00');
    const myBirthdayDay = myBirthday.getDate();
    const myBirthdayMonth = myBirthday.getMonth();

    const now = new Date();
    const nowDay = now.getDate();
    const nowMonth = now.getMonth();
    const nowYear = now.getFullYear();

    let eventYear = nowYear;

    if (nowMonth > myBirthdayMonth || (nowMonth === myBirthdayMonth && nowDay > myBirthdayDay)) {
        eventYear++;
    }

    const eventDate = new Date(`Apr 23, ${eventYear} 06:00`);

    const timeCounter = setInterval(() => {
        const eventDateTime = eventDate.getTime();
        const nowTime = new Date().getTime();

        const dayInMiliseconds = 1000 * 3600 * 24;
        const hourInMiliseconds = 1000 * 3600;
        const minuteInMiliseconds = 1000 * 60;
        const secondInMiliseconds = 1000;

        const timeDiff = eventDateTime - nowTime;

        const daysTilEvent = Math.floor(timeDiff / dayInMiliseconds);
        const hoursTilEvent = Math.floor((timeDiff % dayInMiliseconds) / hourInMiliseconds);
        const minutesTilEvent = Math.floor((timeDiff % hourInMiliseconds) / minuteInMiliseconds);
        const secondsTilEvent = Math.floor((timeDiff % minuteInMiliseconds) / secondInMiliseconds);

        const text = `Falta${
            daysTilEvent > 1 ? 'm' : ''
        } ${daysTilEvent}d ${hoursTilEvent}h ${minutesTilEvent}min ${secondsTilEvent}s`;
        document.getElementById('counter').innerText = text;
    }, 1000);

    document.getElementById('age').innerText = ` para eu completar ${calculateMyAge()} anos!`;
});

function calculateMyAge() {
    const myBirthday = new Date('Apr 23, 1973 06:00:00');
    const myBirthdayDay = myBirthday.getDate();
    const myBirthdayMonth = myBirthday.getMonth();
    const myBirthdayYear = myBirthday.getFullYear();

    const now = new Date();
    const nowDay = now.getDate();
    const nowMonth = now.getMonth();
    const nowYear = now.getFullYear();

    let eventYear = nowYear;

    let myAge = nowYear - myBirthdayYear;

    if (nowMonth > myBirthdayMonth || (nowMonth === myBirthdayMonth && nowDay > myBirthdayDay)) {
        eventYear++;
        myAge++;
    }

    document.getElementById('year').innerHTML = eventYear;

    return myAge;
}

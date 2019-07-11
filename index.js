const formatDate = (timeInSeconds) => {

    let hour = timeInSeconds / 3600;
    let rest = timeInSeconds % 3600;
    let min = rest / 60;
    let sec = rest % 60;
    let time = '';


    if (Math.floor(hour) > 0) {
        time += Math.floor(hour) + 'h ';
    }

    if (Math.floor(min) > 0) {
        time += Math.floor(min) + 'm ';
    }

    if (Math.floor(sec) > 0) {
        time += Math.floor(sec) + 's';
    }

    return time;
}

module.exports = formatDate;

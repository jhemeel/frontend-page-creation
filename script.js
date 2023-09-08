// Current Day of the week

const day = document.getElementById('day')
const dayOfWeekName = new Date().toLocaleString("default", {
    weekday: "long",
  });

  console.log(dayOfWeekName);
day.innerHTML = dayOfWeekName


// current UTC time in millisecond

const time = document.getElementById('time')
const t = new Date()
const tMill = t.getUTCMilliseconds()
time.innerHTML = tMill
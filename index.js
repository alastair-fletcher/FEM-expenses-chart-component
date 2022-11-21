//TODO FETCH DATA!!!!
const days = [
  {
    day: 'mon',
    amount: 17.45,
  },
  {
    day: 'tue',
    amount: 34.91,
  },
  {
    day: 'wed',
    amount: 52.36,
  },
  {
    day: 'thu',
    amount: 31.07,
  },
  {
    day: 'fri',
    amount: 23.39,
  },
  {
    day: 'sat',
    amount: 43.28,
  },
  {
    day: 'sun',
    amount: 25.48,
  },
];

const barGraph = document.querySelector('.bar-graph');

let currentDay = new Date().getDay() - 1;

for (let i = 0; i < days.length; i++) {
  // create bar graph elements for each day
  const daySpends = document.createElement('div');
  daySpends.classList.add('day-spends');
  const bar = document.createElement('div');
  bar.classList.add('bar');
  const day = document.createElement('span');
  day.classList.add('day');
  const totalSpentDay = document.createElement('span');
  totalSpentDay.classList.add('total-spent-day');
  totalSpentDay.classList.add('hide');

  // add elements to DOM
  barGraph.appendChild(daySpends);
  daySpends.appendChild(bar);
  bar.appendChild(totalSpentDay);
  daySpends.appendChild(day);
  totalSpentDay.innerHTML = `$${days[i].amount}`;
  day.innerHTML = days[i].day;
  bar.style.height = `${days[i].amount * 2}px`;

  // add styles for current day
  i === currentDay && bar.classList.add('current-day');
}

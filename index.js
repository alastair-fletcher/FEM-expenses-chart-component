const barChart = document.querySelector('.chart');

let currentDay = new Date().getDay() - 1;

fetch('./data.json')
  .then((response) => response.json())
  .then((days) => {
    for (let i = 0; i < days.length; i++) {
      // create bar graph elements for each day
      const chartData = document.createElement('div');
      chartData.classList.add('chart__data');
      const bar = document.createElement('div');
      bar.classList.add('chart__data--bar');
      const day = document.createElement('span');
      day.classList.add('chart__data--day');
      const toolTip = document.createElement('span');
      toolTip.classList.add('chart__data--tooltip');

      // add elements to DOM
      barChart.appendChild(chartData);
      chartData.appendChild(bar);
      bar.appendChild(toolTip);
      chartData.appendChild(day);
      toolTip.innerHTML = `$${days[i].amount}`;
      day.innerHTML = days[i].day;
      bar.style.height = `${days[i].amount * 1.15}%`;

      // add styles for current day
      i === currentDay && bar.classList.add('chart__data--today');
    }
  });

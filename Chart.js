// Get a reference to the chart canvas element
var chartCanvas = document.getElementById('myChart');
var chartCanvas2 = document.getElementById('myChart2');
// Define the chart data
var data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
      label: "Lag Results 1",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 20, 81, 56, 55, 40],
    },
    {
        label: "Lag Results 2",
        backgroundColor: "rgba(95, 92, 192,0.2)",
        borderColor: "rgba(95, 92, 192,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(95, 92, 192,0.4)",
        hoverBorderColor: "rgba(95, 92, 192,1)",
        data: [75, 39, 40, 21, 66, 55, 40],
    }]
  };
  
  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        stacked: false,
        grid: {
          display: true,
          color: "rgba(255,99,132,0.2)"
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

// Create the chart
var myChart = new Chart(chartCanvas, {
  type: 'bar',
  data: data,
  options: options
});
var data2 = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
      label: "Lead Behavior 1",
      data: [65, 59, 20, 81, 56, 35, 70],
      fill: false,
      borderColor: 'rgb(175, 19, 19)',
      tension: 0.1,
      
    },
    {
        label: "Lead Behavior 2",
        data: [75, 39, 40, 21, 66, 55, 40],
        fill: false,
        borderColor: 'rgb(95, 92, 192)',
        tension: 0.1
      }]
  };
  
  var options2 = {
    maintainAspectRatio: false,
    scales: {
      y: {
        stacked: false,
        grid: {
          display: true,
          color: "rgba(255,99,132,0.2)"
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };
var myChart2 = new Chart(chartCanvas2, {
    type: 'line',
    data: data2,
    options: options2
  });
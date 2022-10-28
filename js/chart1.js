const ctx = document.getElementById('lineChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['HTML', 'CSS', 'JS', 'BOOTSTRAP', 'JQ', 'API'],
        datasets: [{
            label: '# of Votes',
            data: [100 , 90, 70, 80, 30, 0],
            backgroundColor: [
                '#888',
            ],
            borderColor: [
                '#0075ff',
            ],
            color: [
                '#234242'
            ],
            borderWidth: 4
        }]
    },
    options: {
        scales: {
            x: {
                ticks:{
                    color: '#0075ff'
                }
            },
            y: {
                ticks:{
                    color: '#0075ff'
                }
            }
        }
    }
});



Highcharts.theme = {
    colors: ['#4A4A4A', '#787878', '#B6B6B6', '#D6D6D6', '#FF1C1D',
        '#D6D6D6', '#D6D6D6', '#D6D6D6', '#D6D6D6', '#D6D6D6', '#D6D6D6'],
    chart: {
        backgroundColor: null,
        style: {
            fontFamily: 'Signika, serif'
        }
    },
    title: {
        style: {
            color: 'black',
            fontSize: '16px',
            fontWeight: 'bold'
        }
    },
    subtitle: {
        style: {
            color: 'black'
        }
    },
    tooltip: {
        borderWidth: 0
    },
    legend: {
        itemStyle: {
            fontWeight: 'bold',
            fontSize: '13px'
        }
    },
    xAxis: {
        labels: {
            style: {
                color: '#6e6e70'
            }
        }
    },
    yAxis: {
        labels: {
            style: {
                color: '#6e6e70'
            }
        }
    },
    plotOptions: {
        series: {
            shadow: true
        },
        candlestick: {
            lineColor: '#404048'
        },
        map: {
            shadow: false
        }
    },

    // Highstock specific
    navigator: {
        xAxis: {
            gridLineColor: '#D0D0D8'
        }
    },
    rangeSelector: {
        buttonTheme: {
            fill: 'white',
            stroke: '#C0C0C8',
            'stroke-width': 1,
            states: {
                select: {
                    fill: '#D0D0D8'
                }
            }
        }
    },
    scrollbar: {
        trackBorderColor: '#C0C0C8'
    },

    // General
    background2: '#E0E0E8'

};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
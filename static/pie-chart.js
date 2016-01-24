$(function () {
    var colors = Highcharts.getOptions().colors,
        categories = ['Jaclyn', 'NJ', 'Adrian', 'Jess', 'Spencer', 'Taylor'],
        data = [{
            y: 20,
            color: '#8FB6EB',
            drilldown: {
                name: 'Jaclyn chores',
                categories: ['Trash', 'Dishes'],
                data: [ 10, 10],
                color: '#8FB6EB'
            }
        }, {
            y: 20,
            color: '#467CC2',
            drilldown: {
                name: 'NJ chores',
                categories: ['None'],
                data: [20],
                color: '#467CC2'
            }
        }, {
            y: 20,
            color: '#467CC2',
            drilldown: {
                name: 'Adrian chores',
                categories: ['Dusting', 'Sweeping'
                ],
                data: [10, 10],
                color: '#467CC2'
            }
        }, {
            y: 20,
            color: '#467CC2',
            drilldown: {
                name: 'Jess chores',
                categories: ['Bathroom'],
                data: [20],
                color: '#467CC2'
            }
        }, {
            y: 20,
            color: '#467CC2',
            drilldown: {
                name: 'Spencer chores',
                categories: ['Kitchen'],
                data: [20],
                color: '#467CC2'
            }
        }, {
            y: 20,
            color: '#467CC2',
            drilldown: {
                name: 'Taylor chores',
                categories: ['Groceries'],
                data: [20],
                color: '#467CC2'
            }
        }],
        browserData = [],
        versionsData = [],
        i,
        j,
        dataLen = data.length,
        drillDataLen,
        brightness;


    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {

        // add browser data
        browserData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });

        // add version data
        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
            brightness = 0.2;
            versionsData.push({
                name: data[i].drilldown.categories[j],
                y: data[i].drilldown.data[j],
                color: Highcharts.Color(data[i].color).brighten(brightness).get()
            });
        }
    }

    // Create the chart
    $('#container').highcharts({
        chart: {
            type: 'pie',
            backgroundColor: '#E3FFFA'
        },
        title: {
            text: 'Frosh House',
            style: {
                fontSize: '24px'
            }
        },
        exporting: { enabled: false },
        credits: { enabled: false },
        plotOptions: {
            series: {
                states: {
                    hover: {
                        enabled: false
                    }
                }
            }
        },
        tooltip: {
            enabled:false,
        },
        series: [{
            name: 'Browsers',
            data: browserData,
            size: '80%',
            dataLabels: {
                formatter: function () {
                    return this.y > 5 ? this.point.name : null;
                },
                color: '#000000',
                style: {
                    textShadow: false 
                },
                distance: -125
            }
        }, {
            name: 'Versions',
            data: versionsData,
            size: '100%',
            innerSize: '80%',
            dataLabels: {
                formatter: function () {
                    // display only if larger than 1
                    return this.y > 1 ? '<b>' + this.point.name: null;
                },
                color: '#000000',
                style: {
                    textShadow: false 
                },
                distance: -28
            }
        }]
    });
});

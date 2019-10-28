import * as d3 from 'd3';
import * as c3 from 'c3';
import { isNull } from 'util';

class Chart {

    constructor(target) {
        this.target = target;
        this.chartCounts = null;
    }

    render() {
        var self = this;

        var padding = {
            top: 20,
            right: 40,
            bottom: 20,
            left: 40,
        };

        self.chartCounts = c3.generate({
            bindto: self.target,
            padding: padding,
            data: {
                xs: {
                    'Veterans': 'x',
                    'MN': 'x',
                    'Civilian': 'x'
                },
                columns: [
                    ['x', 2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],
                    ['MN', 10.68,10.73,10.98,11.39,11.06,11.43,12.78,11.98,12.52,12.58,13.21,13.48,14.04,13.02756515,null,null],
                    ['Civilian', 13.30367152,12.52877972,12.69914238,13.53825326,13.30364945,13.98497465,15.19500436,14.17730746,15.16103068,15.1208931,16.37883103,16.15544756,16.63703379,15.6014794,null,null],
                    ['Veterans', 24.80018662,28.29247591,31.62516877,28.60901439,26.75746717,25.398438,32.98890373,34.60320747,30.24937944,32.25596348,29.18719862,36.03765935,40.1945151,35.66854747,null,null]
                ],
                type: 'line',
                line: {
                    connectNull: true
                }
            },
            legend: {
                show: false
            },
            line: {
                connectNull: true
            },
            point: {
                show: true,
                r: function(d) {
                    if (d.x == 2018) {
                        return 6;
                    } else {
                        return 3;
                    }
                }
            },
            color: {
                pattern: ['#CCCCCC','#F2AF80','#5BBF48']
            },
            axis: {
                // rotated: true,
                y: {
                    max: 50,
                    min: 0, 
                    padding: {
                        bottom: 0,
                        top: 0
                    },
                    tick: {
                        count: 4,
                        values: [0, 10, 20, 30, 40, 50],
                        format: d3.format('.1f')
                    }
                },
                x: {
                    padding: {
                        right: 0,
                        left: 0
                    },
                    tick: {
                        // rotate: -75,
                        multiline: false,
                        values: [2005, 2010, 2015, 2020]
                    },
                    // height: 40
                }
            },
            grid: {
                focus: {
                    show: false
                },
                x: {
                    // lines: [{
                    //     value: 2007,
                    //     text: '',
                    //     position: 'start',
                    //     class: 'powerline'
                    // }]

                }
            },
            tooltip: {
                contents: function(d, defaultTitleFormat, defaultValueFormat, color) {
                    return '<div class="chart-tooltip gray3">' + d[0].x + '</div><div class="chart-tooltip green3"><span class="tooltip-label">Veteran:</span>' +
                        '<span class="tooltip-value">' + defaultValueFormat(d[2].value) + '</span></div><div class="chart-tooltip orange2"><span class="tooltip-label">Civilian:</span>' +
                        '<span class="tooltip-value">' + defaultValueFormat(d[1].value) + '</span></div><div class="chart-tooltip gray2"><span class="tooltip-label">Total:</span>' +
                        '<span class="tooltip-value">' + defaultValueFormat(d[0].value) + '</span></div>'
                }
            }
        });

    }
}

export {
    Chart as
    default
}
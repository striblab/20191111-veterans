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
                    ['MN', 10.68,10.73,10.98,11.39,11.06,11.43,12.78,11.98,12.52,12.58,13.21,13.48,14.04,14,null,null],
                    ['Civilian', 13.2440138,12.61459328,12.84279783,13.59419645,13.19324572,14.12208225,15.76278922,14.90091295,15.21367314,15.1208931,16.14705512,16.02783739,16.76288124,17.44574374,null,null],
                    ['Veterans', 25.29127942,27.56077395,30.40881612,28.09813914,27.80677961,24.07560268,27.2635568,27.24662006,29.65625436,32.25596348,31.98171764,37.64648343,38.5471989,35.32884702,null,null]
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
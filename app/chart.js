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
                    'Total': 'x'
                },
                columns: [
                    ['x', 2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018],
                    ['Total', 10.5,10.6,10.8,11.2,10.8,11.2,12.4,12,12.1,12.2,13.1,13.2,13.8,null],
                    ['Veterans', 25.29127942,27.56077395,30.40881612,28.09813914,27.80677961,24.07560268,30.53518362,null,null,25.7,20.4,28.2,null,null]
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
                    if (d.x == 2017) {
                        return 6;
                    } else {
                        return 3;
                    }
                }
            },
            color: {
                pattern: ['#333333','#5BBF48']
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
                        values: [2005, 2009, 2014, 2018]
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
                    return '<div class="chart-tooltip gray3">' + d[0].x + '</div><div class="chart-tooltip green3"><span class="tooltip-label">Veterans:</span>' +
                        '<span class="tooltip-value">' + defaultValueFormat(d[1].value) + '</span></div><div class="chart-tooltip gray5"><span class="tooltip-label">Total:</span>' +
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
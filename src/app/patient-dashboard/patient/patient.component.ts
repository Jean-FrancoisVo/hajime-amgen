import { Component, OnInit } from '@angular/core';
declare let $: any;
declare let d3: any;

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.drawPercentage('#pie1', 54.0);
    this.drawPercentage('#pie2', 4.0);
    this.drawPercentage('#pie3', 78.0);
    this.drawPercentage('#pie4', 64.0);
    this.drawPercentage('#pie5', 44.0);
  }

  drawPercentage(id, percent) {
    const duration = 1500;
      // transition = 200;
      // percent = 54.0;

    const height = 200,
      width = $(id).innerWidth();

    const dataset = {
        lower: calcPercent(0),
        upper: calcPercent(percent)
      },
      radius = Math.min(width, height) / 3,
      pie = d3.layout.pie().sort(null),
      format = d3.format('.0%');

    const arc = d3.svg.arc()
      .innerRadius(radius * .8)
      .outerRadius(radius);

    const svg = d3.select(id)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    let path = svg.selectAll('path')
      .data(pie(dataset.lower))
      .enter().append('path')
      .attr('class', function (d, i) {
        return 'color' + i;
      })
      .attr('d', arc)
      .each(function (d) {
        this._current = d;
      });

    const text = svg.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '.3em');

    const progress = 0;

    let timeout = setTimeout(function () {
      clearTimeout(timeout);
      path = path.data(pie(dataset.upper));
      path.transition().duration(duration).attrTween('d', function (a) {
        const i = d3.interpolate(this._current, a);
        const i2 = d3.interpolate(progress, percent);
        this._current = i(0);
        return function (t) {
          text.text(format(i2(t) / 100));
          return arc(i(t));
        };
      });
    }, 200);

    function calcPercent(vpercent) {
      return [vpercent, 100 - vpercent];
    }
  }

}

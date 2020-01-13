import React, {Component} from 'react'
import * as d3 from "d3"

class BarChart extends Component {
    componentDidMount() {
        this.drawChart();
    }

    drawChart = () => {
        const height = 300
        const width = 700
        const cats = localStorage.length > 0 ? JSON.parse(localStorage.getItem('cats')) : []
        const data = cats.map(e => e.age)

        const svg = d3.select("body")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .style("margin-left", 100);

        svg.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => height - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green")

        svg.selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .text((d) => d)
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => height - (10 * d) - 3)

        data.x_display_name = 'X VALUE';
        data.y_display_name = 'Y VALUE';
    }

    render(){
        return <div className='chart' id={"#" + this.props.id}></div>
    }
}

export default BarChart;

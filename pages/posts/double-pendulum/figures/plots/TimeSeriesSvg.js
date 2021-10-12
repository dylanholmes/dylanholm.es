import React from 'react';


// TODO: use the segment style class from TimeSeriesCanvas!!!
export default class SvgLinePlotRenderer extends React.Component {
  constructor(props) {
    super(props);

    this.svgPath = this.svgPath.bind(this);
    this.lineCommand = this.lineCommand.bind(this);
  }

  svgPath(points, command, i) {
    const d = points.filter(p => p).reduce(
      (acc, point, i, a) => i === 0
        ? `M ${point[0]},${point[1]}`
        : `${acc} ${command(point, i, a)}`,
      ''
    )
    return (
      <path
        key={i}
        d={d}
        style={{ fill: "none", stroke: "black", strokeWidth: 1 }}
      />
    );
  }
  
  lineCommand(point) {
    return `L ${point[0]} ${point[1]}`
  }

  render() {

    const xMin = this.props.xMin
    const xMax = this.props.xMax
    const yMin = this.props.yMin
    const yMax = this.props.yMax
    const positionSequences = this.props.positionSequences;
    // if (positionSequences && this.demo) {
    //   this.demo.render(xMin, xMax, yMin, yMax, positionSequences);
    // }

    const paths = positionSequences
      .map((positionSequence, i) => this.svgPath(
        positionSequence.reduce((acc, _, i, a) => {
          if (i%2===1) {
            let point = [a[i-1], a[i]];
            acc.push(point);
          }
          return acc;
        }, [])
        .map((v, i) => {
          let s = positionSequence;
          return [(v[0]-xMin)/(xMax-xMin)*(700-0)+0, v[1]]
        })
        ,
        this.lineCommand,
        i
      ));

    // const paths = [];
    // for (let i = 0; i < positionSequences.length; ++i) {
    //   const positionSequence = positionSequences[i];
    //   const path = 
    //   for (let j = 0; j < positionSequence.length; j += 2) {
    //     let time = positionSequence[j];
    //     let position = positionSequence[j+1];

    //     return 
    //   }
    // }

    const svgStyle = {
      display: "block",
      width: "100%",
      height: "100px",
    }
    
    

    return (
      // <svg style={svgStyle} viewBox={`${xMin} ${yMin} ${xMax-xMin} ${yMax-yMin}`} xmlns="http://www.w3.org/2000/svg" overflow="visible">
      //     {paths}
      // </svg>

    <svg style={svgStyle} viewBox={`0 0 700 60`} xmlns="http://www.w3.org/2000/svg" overflow="visible">
        {paths}
    </svg>
    );
  }
}

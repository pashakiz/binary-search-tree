import React from 'react';
import { Stage, Circle, Line, Layer } from 'react-konva';
import Konva from 'konva';

export default class NodeCircle extends React.Component {
  state = {
    color: 'green'
  };
  handleClick = () => {
    this.setState({

      //TODO: remove Node!

      color: Konva.Util.getRandomColor()
    });
  };
  render() {
    return (
      <g>
        <Line
          x={20}
          y={200}
          points={[0, 0, 100, 0]}
          tension={0.5}
          stroke="black"
        />
        <Circle x={200} y={100} radius={50} fill={this.state.color} onClick={this.handleClick} />
      </g>
    );
  }
}

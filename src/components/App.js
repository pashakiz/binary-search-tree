import React from 'react';
import NodeCircle from './NodeCircle';
import { Stage, Layer, Text } from 'react-konva';

export default class App extends React.Component {

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Try click on rect" />
          <NodeCircle />
        </Layer>
      </Stage>
    );
  }

}

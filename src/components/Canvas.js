import React from 'react';

function rect(props) {
  const {ctx, x, y, width, height} = props;
  ctx.fillRect(x, y, width, height);
}

export default class Canvas extends React.Component {

  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    //const ctx = this.refs.canvas.getContext('2d');
    let cnvs = this.refs.canvas;
    let ctx = cnvs.getContext('2d');
    //ctx.fillRect(0,0, cnvs.width, cnvs.height);
    ctx.clearRect(0,0, 300, 300);
    rect({ctx, x: 10, y: 10, width: 50, height: 50});
    rect({ctx, x: 110, y: 110, width: 50, height: 50});
  }

  render() {
    return (
      <canvas ref="canvas" id="canvas" class="canvas">Update your browser</canvas>
    );
  }

  //this.draw();

}

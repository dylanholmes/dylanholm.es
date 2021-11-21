import React from "react";

export default class Plot extends React.Component {
  constructor(props) {
    super(props);

    this.leadSeconds = 10;
    this.exercises = [
      {
        name: "pike pushups, head out front + 5 second negative",
        offSeconds: 15,
        onSeconds: 10
      },
      {
        name: "bent arm straddle hold",
        offSeconds: 10,
        onSeconds: 5
      },
      {
        name: "push up",
        offSeconds: 10,
        onSeconds: 5
      }
    ];

    this.start = this.start.bind(this);
  }

  setCanvasRef() {
  }

  componentDidMount() {
  }

  start() {
    document.setInterval(() => {
      
    }, this.leadSeconds);
  }

  render() {
    return (
      <>
        <style>
          {`
          `}
        </style>
        <div id="container">
          <div>
            <h2>Foo</h2>
            <button id="start-stop-button">Start</button>
          </div>
        </div>
      </>
    );
  }
}

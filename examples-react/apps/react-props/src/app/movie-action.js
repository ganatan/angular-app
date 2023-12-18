import React from "react";

class MovieAction extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <p>MovieAction</p>
        <p>MovieAction.props.name : {this.props.name}</p>
      </div>
    );

  }
}

export default MovieAction;
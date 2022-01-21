import React from "react";
import "./Lifecycle.css";

export default class Lifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { surname: "surname" };
  }

  produceAprop = (text) => {
    return <em>{text}</em>
  }

  produceAState = (text) => {
    return <em><em>{text}</em></em>
  }

  update = () => {
    this.setState({ surname: 'initial' })
  }

  render() {
    return (
      <div className="lifecycle">
        Hello {this.produceAprop(this.props.name)} !{" "}
        {this.produceAState(this.state.surname)}
        <p>
          Everything in this component that are{" "}
          {this.produceAprop('highlightened like this are props')} and this is a{" "}
          {this.produceAState('state!')}
        </p>
        {/* <embed src= 'https://reactjs.org/docs/react-component.html'/> */}
        <button onClick={this.update}>click me to get snapshot before update</button>
      </div>
    );
  }

  static getDerivedStateFromProps(props, state) {
    // place where transitions and animations can be triggered
    // return { surname: 'anderson' };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps)
    console.log(nextState)
    return true;
  }

  getSnapshotBeforeUpdate(props, state) {
    console.log(props)
    console.log(state)
    return 'snap 0.0.1'
  }

  componentDidUpdate(props, state, snapShot) {
    console.log('did update: ')
    console.log(props)
    console.log(state)
    console.log(snapShot)
  }

  componentDidMount() {
    // document.querySelector('.lifecycle').innerHTML = 'This is a text loaded after the DOM Element is mounted'
  }
}

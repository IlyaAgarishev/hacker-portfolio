import React, { Component } from 'react';
import './index.css';

class HackingFbi extends Component {
  constructor(props) {
    super(props);
    this.state = { hackingProcess: '', hacked: false };
  }

  componentDidMount() {
    let hackingLoading = setInterval(() => {
      this.setState({
        hackingProcess: this.state.hackingProcess + '☠/'
      });
    }, 200);

    setTimeout(() => {
      clearInterval(hackingLoading);
      this.setState({ hackingProcess: 'ACCESS GRANTED', hacked: true });
      this.props.hack();
    }, 2100);
  }

  render() {
    return (
      <div className={this.state.hacked ? 'hacking-fbi access-granted' : 'hacking-fbi'}>
        <div className="hacking-fbi-text">{this.state.hacked ? '' : 'HACKING FBI DATABASE'}</div>
        <div className="hacking-process">‍{this.state.hackingProcess}</div>
      </div>
    );
  }
}

export default HackingFbi;

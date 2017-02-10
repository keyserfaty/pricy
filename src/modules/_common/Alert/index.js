import React from 'react';
import './styles.css';

import FontAwesome from 'react-fontawesome';

class AlertContainer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      display: true
    };
  }

  handleDisplay () {
    this.setState({
      display: !this.state.display
    });
  }

  render () {
    return (
      <Alert
        {...this.props}
        {...this.state}
        handleDisplay={() => this.handleDisplay()}
      />
    );
  }
}

const Alert = props => {
  const { type = 'warning', text, handleDisplay, display } = props;
  return (
    <span>
      { display && (
        <div className='alert-container'>
          <div className={`alert alert-${type}`}>
            <FontAwesome className='alert-info' name='info-circle' />
            <FontAwesome onClick={handleDisplay} className='alert-remove' name='times' />
            {text}
          </div>
        </div>
      )}
    </span>
  );
};

export default AlertContainer;

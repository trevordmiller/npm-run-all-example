import React from 'react';

const styles = {
  p: {
    background: 'lightblue',
    borderRadius: '3rem',
    padding: '1rem'
  }
};

class Example extends React.Component {
  render() {
    return (
      <div style={styles.p}>{this.props.content}</div>
    );
  }
}

Example.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Example;

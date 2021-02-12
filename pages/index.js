import React from 'react';
import ReactDOM from 'react-dom';
import App from './_app';

class Index extends React.Component {
 
  render() {
    return (
      <App />,
      document.getElementById('root')
    );
  }
}
export default Index;
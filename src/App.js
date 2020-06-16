import React from 'react';
import Container from 'react-bootstrap/Container';

import Chart from './components/Chart';
import Input from './components/Input';

class App extends React.Component {
  render() {
    return (
      <Container className='mt-60'>
        <Input />
        <Chart />
      </Container>
    );
  }
}

export default App;

import React, { Component } from 'react';

interface aaa {
  aaa?: 'xxx';
  bbb: string;
}

class loginFooter extends Component<aaa, aaa> {
  constructor(props: any) {
    super(props);
    this.state = {
      bbb: '11',
    };
  }

  componentDidMount() {
    this.setState({
      bbb: 'aaa',
    });
  }

  render() {
    const { bbb = '' } = this.state;
    return <div>{bbb}</div>;
  }
}
export default loginFooter;

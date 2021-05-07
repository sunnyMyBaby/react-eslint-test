import React, { Component } from 'react';

interface aaa {
  aaa?: 'xxx';
}

class loginFooter extends Component<aaa> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa() {
    // const xxaa = {
    //   a: 'xxx',
    //   aa_aa: 'aaa'
    // };
    // console.log(xxaa);
    const a = 'xxx';
    console.log(a);
  }

  render() {
    return (
      <div
        onClick={this.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa}
        className='aa'>
        aaa
      </div>
    );
  }
}
export default loginFooter;

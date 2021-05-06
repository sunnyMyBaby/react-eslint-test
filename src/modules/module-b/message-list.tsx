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
    const xx = {
      a: 'xxx',
      aa_aaa: 'aaa'
    };
    console.log(xx);
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

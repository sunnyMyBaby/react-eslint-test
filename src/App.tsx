import React, { Component } from 'react';
// import { concat, get } from 'lodash'
import LoginFooter from './modules/module-b/message-list';
// import AAA from './yg-test'
import logo from './logo.svg';
import './App.css';
import './modules/module-a/message-list.css';

// interface propsType {
//   readonly x: number
//   readonly y: number
// }

// interface stateProps {
//   name: string
// }
// console.log(AAA)

const queryParams: Record<string, any> = {
  pageNo: 1,
  pageSize: 10,
};

// name11()
// function name11() {
//   return '111'
// }

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
    };
  }

  componentDidMount() {
    // const b = 0
    // const a = b > 10 ? 10 : 20
    // console.log(a)
  }

  render(): JSX.Element {
    const { name = '' } = this.state;
    const arr = [1, 2, 3];
    return (
      <div>
        <img src={logo} alt='' />
        <LoginFooter />
        {name}
        {/* {AAA} */}
        {arr.map((val) => {
          return (
            <span
              key={val}
              onClick={() => {
                queryParams.pageNo = 1111;
              }}>
              {val}{' '}
            </span>
          );
        })}
      </div>
    );
  }
}
export default App;

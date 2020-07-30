import React from 'react';
import PropTypes from 'prop-types';

// 함수명은 return
// 클래스형은 render

// react는 자동으로 class component의 render 메서드를 실행함.
// (필요하면) es6강의 클래스부분 참조.
class App extends React.Component{
  state = {
    count: 0
  };

  // setState는 state 설정과 함께 render함수를 다시 호출해줌.
  // 그래서 this.state.count += 1 이런 식으로 하면 안되는거.
  add = () =>{
    // 이것도 js문법인가...?
    this.setState(current=>({count:current.count + 1}));
    // this.setState({count:this.state.count+1});
  }

  minus = () =>{
    this.setState(current=>({count:current.count - 1}));
    // this.setState({count:this.state.count-1});
  }

  // 라이프사이클 관련 함수들 : 리드미 참조!
  componentDidMount(){
    console.log('component mounted');
  }

  componentDidUpdate(){
    console.log("component updated");
  }

  componentWillUnmount(){
    console.log('byebye😭');
  }

  render(){
    console.log('rendering in progress..');
    return(
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    ) 
  }
}

export default App;

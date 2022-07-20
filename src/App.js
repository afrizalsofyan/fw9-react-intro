import React from 'react';
import {Col, Row, Button} from 'react-bootstrap';

const ResultNum = ({value})=>{  
  return(
    <>
      {value}
    </>
  )
}

const ErrNegativeNum = ({errMsg})=>{
  return  (
    <>
      {errMsg}  
    </>
  )
}

const App = () =>{
  const [value, setValue] = React.useState(0);
  return (
    <Row className='min-vh-100 gy-0 gx-0'>
      <Col className='d-flex flex-column justify-content-center align-items-center'>
        <Row className='w-50 gx-0'>
          <Col className='d-flex justify-content-center'>
            <Button onClick={()=>value < 1 ? value : setValue(value-1)}>-</Button>
          </Col>
          <Col className='d-flex flex-column justify-content-center text-center'>
            <ResultNum value={value}></ResultNum>
            {/* {value < 0 ? setValue(value) : value} */}
          </Col>
          <Col className='d-flex justify-content-center'>
            <Button onClick={()=>setValue(value+1)}>+</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            {value < 1 ? <ErrNegativeNum errMsg={'Min number 0'}></ErrNegativeNum> : null}
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default App;

// import { Component } from "react";
// const SeriesList = ({series, children}) => {
//   return (
//     // react fragment
//     <>
//       {children} 
//       <li>{series.name}</li>
//     </>
//   )
// }

// const App = () => {
//   return (
//     <ol>
//       <SeriesList series={{name: 'aaaa'}}>aku</SeriesList>
//     </ol>
//   )
// }

// export default App;

// class Series extends Component{
//   render(){
//     return (
//       <>
//         {this.props.children}
//         <li>{this.props.eps.ep}</li>
//       </>
//     )
//   }
// }

// class App extends Component {
//   state ={
//     isShow: true
//   }
//   render(){
//     return (
//       <ol>
//         {this.state.isShow && <Series eps={{ep: 4}}>abc</Series>}
//         <button onClick={()=>this.setState({isShow: !this.state.isShow})}>click</button>
//       </ol>
//     )
//   }
// }
// export default App;
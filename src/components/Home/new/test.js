// import React, {Component} from "react";
// import '../../../scss/_exercises.scss'
//
// class Calculator extends Component {
//
//     state = {
//         click: false,
//         confirm: false,
//         styles: '',
//         text: ''
//     };
//
//     handleButtonOneClick = () => {
//         this.setState({
//             click: this.state.click ? false : true
//         })
//     };
//
//     handleChangeStyles = e => {
//         this.setState({
//             styles: e.target.value,
//         });
//     };
//
//     handleButtonClick = e => {
//         e.preventDefault();
//         this.setState({
//             confirm: true,
//         })
//     };
//
//     handleChange = e => {
//         this.setState({
//             text: e.target.value,
//         });
//     };
//
//     render() {
//
//         const {click} = this.state;
//
//         let styleOne = {
//             width: click ? '100%' : '10%',
//             height: click ? '100%' : '10%',
//             fontSize: click ? '30px' : '0%',
//             transition: '2s',
//         };
//
//         let styleTwo = {
//             fontSize: click ? '0%' : '70px',
//             transition: '5s',
//         };
//
//
//         const calculator = {
//             save: function (newA, newB) {
//                 this.a = newA;
//                 this.b = newB;
//             },
//
//             sum: function () {
//                 return this.a + this.b
//             },
//
//             sub: function () {
//                 return this.a - this.b
//             },
//
//             multiply: function () {
//                 return this.a * this.b
//             },
//
//             division: function () {
//                 return this.a / this.b
//             }
//         };
//
//         calculator.save(9, 5);
//         console.log(calculator.sum());
//         console.log(calculator.sub());
//         console.log(calculator.multiply());
//         console.log(calculator.division());
//
//
//
//
//
//         return (
//             <section className='' style={styleOne}
//                      onClick={this.handleButtonOneClick}>
//
//                 <div className='numberOfExercise' style={styleTwo} onClick={this.handleButtonOneClick}>X.</div>
//                 <div>
//                     <input onChange={this.handleChange} value={this.state.text} readOnly={this.state.confirm}
//                            placeholder={'cos'}></input>
//                     <button onClick={this.handleButtonClick}>zatwierdz</button>
//                     <textarea value={this.state.styles} onChange={this.handleChangeStyles}
//                               placeholder={'Wykonaj operacje'}>
//                 </textarea>
//                 </div>
//
//                 <div></div>
//
//             </section>
//         )
//     }
// }
//
// export default Calculator;




import React, {Component} from "react";
import '../../../scss/_exercises.scss';

import TestX from "./test01";


class Test extends Component {

    render() {
        return (
            <section className='main'>
                <TestX/>

            </section>
        )
    }
}

export default Test;
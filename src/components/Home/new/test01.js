import React, {Component} from "react";
import '../../../scss/_exercises.scss'

class Test01 extends Component {

    state = {
        click: false
    };

    handleButtonOneClick = () => {
        this.setState({
            click: this.state.click ? false : true
        })
    };

    render() {

        const {click} = this.state;

        let styleOne = {
            width: click ? '100%' : '10%',
            height: click ? '100%' : '10%',
            fontSize: click ? '30px' : '0%',
            transition: '2s',
        };

        let styleTwo = {
            fontSize: click ? '0%' : '70px',
            transition: '5s',
        };

        let styleThree = {
            width: click ? '30%' : '0%',
            height: click ? '100%' : '10%',
            fontSize: click ? '40px' : '0%',
            transition: '2s',
        };


        document.addEventListener('DOMContentLoaded', function () {

            const buttons = document.querySelectorAll('button');
            const span = document.querySelectorAll('span');

            buttons[0].addEventListener('mouseenter', function () {
                span[0].innerText++
            });

            buttons[1].addEventListener('mouseenter', function () {
                span[1].innerText++
            });

            buttons[2].addEventListener('mouseenter', function () {
                span[2].innerText++
            });
        });


        return (

                <section className='container' style={styleOne} onClick={this.handleButtonOneClick}>

                    <div className='numberOfExercise' style={styleTwo} onClick={this.handleButtonOneClick}>1.</div>

                    <div className='firstDiv'>Najeżdżając kursorem myszki na jeden z guzików, zwiększasz wartość licznika.
                    </div>
                    <div className='firstDiv'>

                        <button style={styleThree}>Guzik 1</button>
                        <p>
                            Wartość licznika 1: <span>0</span>
                        </p>
                        <button style={styleThree}>Guzik 2</button>
                        <p>
                            Wartość licznika 2: <span>0</span>
                        </p>
                        <button style={styleThree}>Guzik 3</button>
                        <p>
                            Wartość licznika 3: <span>0</span>
                        </p>

                    </div>
                </section>
        )
    }
}

export default Test01;



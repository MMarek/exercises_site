import React, {Component} from "react";
import '../../../scss/_exercises.scss'

class Working extends Component {

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

            const button1 = document.querySelector('#mainBtn');

            button1.addEventListener('mouseenter', function () {
            });
        });

        return (
            <section className='container' style={styleOne}
                     onClick={this.handleButtonOneClick}>

                <div className='numberOfExercise' style={styleTwo} onClick={this.handleButtonOneClick}>2.</div>

                <div className='firstDiv'>
                    Po najechaniu na poniższy button, pojawi się informacja "It's Working" w konsoli :)
                </div>
                <div className='firstDiv'>
                    <div>
                        <button id="mainBtn" style={styleThree}>It's Working?</button>
                    </div>
                </div>

            </section>
        )
    }
}

export default Working;
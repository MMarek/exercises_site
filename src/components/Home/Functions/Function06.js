import React, {Component} from "react";
import '../../../scss/_exercises.scss'

class TheBest extends Component {

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

        let theBestIsJS = function (n) {
            for (let i = 0; i < n; i++) {
                console.log('JS is The Best');
            }
        };

        theBestIsJS(10);

        return (
            <section className='theBest' style={styleOne}
                     onClick={this.handleButtonOneClick}>

                <div className='numberOfExercise' style={styleTwo} onClick={this.handleButtonOneClick}>6.</div>

                <div className='theBestJs'>
                    Funkcja zwracająca n iloć razy w konsoli napis 'JS is The Best'
                </div>
                <div className='theBestJs'>
                    {'let theBestIsJS = function (n) {\n' +
                    '            for (let i = 0; i <n ; i++) {\n' +
                    '                console.log(\'JS is The Best\');\n' +
                    '            }\n' +
                    '        };\n' +
                    '\n' +
                    '        theBestIsJS(10);'}
                </div>

            </section>
        )
    }
}

export default TheBest;
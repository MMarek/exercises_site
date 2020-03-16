import React, {Component} from "react";
import '../../../scss/_exercises.scss'

class TestX extends Component {

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


        const parentList = document.querySelectorAll('.parent');
        for (let i = 0; i < parentList.length; i++) {
            parentList[i].addEventListener('mouseenter', function () {
                console.log('enter', this);

                const child = this.querySelector('.children');
                child.style.display = 'block';
            });

            parentList[i].addEventListener('mouseleave', function () {
                const child = this.querySelector('.children');
                child.style.display = 'none';
            })
        }


        return (
            <>

                <section className="task01">

                    <div className="parent"> 1
                        <div className="children">2
                        </div>
                    </div>

                    <div className="parent">3
                        <div className="children">4
                        </div>
                    </div>

                    <div className="parent">5
                        <div className="children">6
                        </div>
                    </div>
                </section>


                <section className='' style={styleOne} onClick={this.handleButtonOneClick}>

                    <div className='numberOfExercise' style={styleTwo} onClick={this.handleButtonOneClick}>X.</div>

                    <div className='firstDiv'>
                    </div>
                    <div className='firstDiv'>

                    </div>

                </section>
            </>
        )
    }
}

export default TestX;
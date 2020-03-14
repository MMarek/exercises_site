import React, {Component} from "react";
import Square from './Loops/Loops01';
import SumOfAll from './Loops/Loops02';
import Stars from './Loops/Loops03';
import Number from './Loops/Loops04';
import Arithmetic from './Loops/Loops05';
import EvenNumber from './Loops/Loops06';

class Home extends Component {

    render() {
        return (
            <section className='home'>
              <Square/>
              <SumOfAll/>
              <Stars/>
              <Number/>
              <Arithmetic/>
              <EvenNumber/>
            </section>
        )
    }
}

export default Home;
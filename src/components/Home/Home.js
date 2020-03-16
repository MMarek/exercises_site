import React, {Component} from "react";
import '../../scss/_exercises.scss';

import AllLoops from "./Loops/AllLoops";
import AllFunctions from "./Functions/AllFunctions";
import AllEvents from './Events/AllEvents'

class Home extends Component {

    render() {
        return (
            <section className='home'>
                <AllLoops/>
                <AllFunctions/>

                <AllEvents/>

            </section>
        )
    }
}

export default Home;
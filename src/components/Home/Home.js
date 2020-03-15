import React, {Component} from "react";
import '../../scss/_exercises.scss'

import AllLoops from "./Loops/AllLoops";
import AllFunctions from "./Functions/AllFunctions";

class Home extends Component {

    render() {
        return (
            <section className='home'>
                <AllLoops/>
                <AllFunctions/>

            </section>
        )
    }
}

export default Home;
import React, {Component} from "react";
import Loops01 from './Loops/Loops01'
import Loops02 from './Loops/Loops02'
import Loops03 from './Loops/Loops03'

class Home extends Component {

    render() {
        return (
            <section className='test'>
              <Loops01/>
              <Loops02/>
              <Loops03/>
            </section>
        )
    }
}

export default Home;
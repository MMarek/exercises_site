import React, {Component} from "react";
import '../../../scss/_exercises.scss'

import Square from "./Loops01";
import SumOfAll from "./Loops02";
import Stars from "./Loops03";
import Number from "./Loops04";
import Arithmetic from "./Loops05";
import EvenNumber from "./Loops06";
import Test from "../new/test"

// import ArgumentSum from './Loops/Loops07'

class AllLoops extends Component {

    render() {
        return (
            <section className='allLoops'>
                <Square/>
                <SumOfAll/>
                <Stars/>
                <Number/>
                <Arithmetic/>
                <EvenNumber/>
                {/*<ArgumentSum/>*/}
                <Test/>
            </section>
        )
    }
}

export default AllLoops;
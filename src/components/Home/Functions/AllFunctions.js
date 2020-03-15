import React, {Component} from "react";
import '../../../scss/_exercises.scss';

import ArgumentSum from "./Function01";
import PaperGame from "./Function02";
import SecondMax from "./Function03";
import NegativeNumber from "./Function04";


class AllFunctions extends Component {

    render() {
        return (
            <section className='allFunctions'>
                <ArgumentSum/>
                <PaperGame/>
                <SecondMax/>
                <NegativeNumber/>
            </section>
        )
    }
}

export default AllFunctions;
import React, {Component} from "react";
import '../../../scss/_exercises.scss';

import ArgumentSum from "./Function01";
import PaperGame from "./Function02";
import SecondMax from "./Function03";
import NegativeNumber from "./Function04";
import AddsTo from "./Function05";
import TheBest from "./Function06";


class AllFunctions extends Component {

    render() {
        return (
            <section className='allFunctions'>
                <ArgumentSum/>
                <PaperGame/>
                <SecondMax/>
                <NegativeNumber/>
                <AddsTo/>
                <TheBest/>
            </section>
        )
    }
}

export default AllFunctions;
import React, {Component} from "react";
import '../../../scss/_exercises.scss';

import ArgumentSum from "./Function01";
import PaperGame from "./Function02";
import SecoundMax from "./Function03";

class AllFunctions extends Component {

    render() {
        return (
            <section className='allFunctions'>
                <ArgumentSum/>
                <PaperGame/>
                <SecoundMax/>
            </section>
        )
    }
}

export default AllFunctions;
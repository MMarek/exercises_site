import React, {Component} from "react";
import '../../../scss/_exercises.scss';

import ArgumentSum from "./Function01";
import PaperGame from "./Function02";


class AllFunctions extends Component {

    render() {
        return (
            <section className='allFunctions'>
                <ArgumentSum/>
                <PaperGame/>
            </section>
        )
    }
}

export default AllFunctions;
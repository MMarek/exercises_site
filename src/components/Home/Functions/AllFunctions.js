import React, {Component} from "react";
import '../../../scss/_functions.scss'

import ArgumentSum from "./Function01";


class AllFunctions extends Component {

    render() {
        return (
            <section className='allFunctions'>
                <ArgumentSum/>
            </section>
        )
    }
}

export default AllFunctions;
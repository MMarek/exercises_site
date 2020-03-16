import React, {Component} from "react";
import '../../../scss/_exercises.scss';

import Buttons from "./Event01";
import Working from "./Event02";
import ThreeButtons from "./Event03";


class AllEvents extends Component {

    render() {
        return (
            <section className='main'>
                <Buttons/>
                <Working/>
                <ThreeButtons/>

            </section>
        )
    }
}

export default AllEvents;
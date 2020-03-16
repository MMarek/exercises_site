import React, {Component} from "react";
import '../../../scss/_exercises.scss';

import Buttons from "./Event01";
import Working from "./Event02";


class AllEvents extends Component {

    render() {
        return (
            <section className='main'>
                <Buttons/>
                <Working/>

            </section>
        )
    }
}

export default AllEvents;
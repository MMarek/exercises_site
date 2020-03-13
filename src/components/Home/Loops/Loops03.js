import React, {Component} from "react";
import '../../../scss/_loops.scss'

class Stars extends Component {

    render() {
        let k = 15;

        let textResult = "";
        for (let i = 0; i < k; i++) {
            for (let j = 0; j < k; j++) {
                if ((i + j) % 2 === 0) {
                    textResult += "-";
                } else {
                    textResult += "+";
                }
            }
            // textResult += "\n"; // zaczyna od nowej linii po każdej iteracji
        }

        // console.log(textResult);
        return (
                <div className='stars'>
                    <h5>Program zamieszczający naprzemiennie '+' oraz '-', posiadający pętle w pętli:</h5>

                    {textResult}
                </div>

        )
    }
}

export default Stars;
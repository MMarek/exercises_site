import React, {Component} from "react";
import '../../../scss/_loops.scss'

class SumOfAll extends Component {

    render() {

        let x = 1;
        let y = 100;
        let sum = 0;

        for (let i = x; i <= y; i = i + 1) {
            sum += i;
        }
        // console.log(sum);
        return (
            <div className='sumOfAll'>
                Suma wszystkich dodanych do siebie liczb w przedziale od 1 do 100 daje wynik: {sum} :)
            </div>
        )
    }
}

export default SumOfAll;
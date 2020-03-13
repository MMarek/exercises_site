import React, {Component} from "react";

class Square extends Component {
    render() {
        let n = 5;
        let result1 = 1;
        for (let i = 1; i <= n; i++) {
            result1 = result1 * i
        }

        let result2 = 1;
        let j = 1;
        while (j <= n) {
            result2 *= j;
            j++;
        }
        return (
            <>
                <div className='square'>
                    Śilnia liczby {n} wynosi {result1} - wykonane pętlą for
                </div>
                <div className='square'>
                    Śilnia liczby {n} wynosi {result2} - wykonane pętlą while
                </div>
            </>
        )
    }
}

export default Square;
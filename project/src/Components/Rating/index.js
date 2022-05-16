import React from "react";
const { RatingContainer } = require("./styles");

const limit = 5;
const currentRatings = 3;

class Rating extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            total: Array.from({ length: limit }, (v, i) => i).map((v) => ({ id: v + 1 })),
            rating: currentRatings,
            stars: false
        };
    }

    onRateClick = (idx) => {
        this.setState((prevState) => {
            return {
                total: prevState.total,
                rating: idx + 1
            }
        });
    }

    clickHandler = () => {
        console.log(this.state.rating);    
        this.setState(() => {
            return {
                stars: true
            }
        });    
    }

    render() {
        const {
            total, 
            stars              
        } = this.state;

        return (
            <RatingContainer>
                <p>Faça uma avaliação desse produto</p>
                <ul>
                    {
                        total.map((star, i) => (
                            <li
                                key={i}
                                className={`star ${i < this.state.rating ? "filled" : ""}`}
                                onClick={() => this.onRateClick(i)}
                            >
                                {'\u2605'}
                            </li>
                        ))
                    }
                </ul>
                <button onClick={this.clickHandler}>
                    Avaliar
                </button>
                {
                    stars &&
                        <p>{this.state.rating}</p>                    
                }
                
            </RatingContainer>
        )
    }
}

export default Rating;


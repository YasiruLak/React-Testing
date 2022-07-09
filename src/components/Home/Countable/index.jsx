import React,{Component} from "react";
import Typography from "@mui/material/Typography";
import {Button} from "@mui/material";

class Countable extends Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    incrementCount(){
        console.log("Increment function calling");
        this.setState({
            count: this.state.count + 1
        })
    }

    decrementCount(){
        console.log("Decreased function calling");
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return(
            <div>
                <Typography variant="h3" gutterBottom component="div">
                    Count: {this.state.count}
                </Typography>
                <Button
                    variant="contained"
                    onClick={() => {
                        console.log('clicked');
                        this.incrementCount();
                    }}
                >
                    Increased
                </Button>
                <Button
                    variant="contained"
                    onClick={() => {
                        console.log('clicked');
                        this.decrementCount();
                    }}
                >
                    Decreased
                </Button>
            </div>
        );
    }
}

export default Countable

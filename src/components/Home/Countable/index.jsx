import React,{Component} from "react";
import Typography from "@mui/material/Typography";
import GDSEButton from "../../Comman/Button";

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

    resetCount(){
        console.log("Decreased function calling");
        this.setState({
            count: this.state.count = 0
        })
    }

    render() {
        return(
            <div>
                <Typography variant="h3" gutterBottom component="div">
                    Count: {this.state.count}
                </Typography>
                {/*<Button*/}
                {/*    variant="contained"*/}
                {/*    onClick={() => {*/}
                {/*        console.log('clicked');*/}
                {/*        this.incrementCount();*/}
                {/*    }}*/}
                {/*>*/}
                {/*    Increased*/}
                {/*</Button>*/}

                {/*<Button*/}
                {/*    variant="contained"*/}
                {/*    onClick={() => {*/}
                {/*        console.log('clicked');*/}
                {/*        this.decrementCount();*/}
                {/*    }}*/}
                {/*    style={{marginLeft: '15px'}}*/}
                {/*>*/}
                {/*    Decreased*/}
                {/*</Button>*/}
                {/*<Button*/}
                {/*    variant="contained"*/}
                {/*    onClick={() => {*/}
                {/*        console.log('clicked');*/}
                {/*        this.resetCount();*/}
                {/*    }}*/}
                {/*    style={{marginLeft: '15px'}}*/}
                {/*>*/}
                {/*    Reset*/}
                {/*</Button>*/}

                <GDSEButton
                    label="Increase!"
                    variant="contained"
                    onClick={() => {
                        console.log('Increase button clicked!')
                        this.incrementCount()

                    }}
                />
                <GDSEButton
                    label="Decrease!"
                    variant="outlined"
                    onClick={() => {
                        console.log('Decrease button clicked!')
                        this.decrementCount()

                    }}
                    style={{marginLeft: '15px'}}
                />
                <GDSEButton
                    label="Reset!"
                    variant="outlined"
                    color="error"
                    // disabled={true}
                    onClick={() => {
                        console.log('Reset button clicked!')
                        this.resetCount()

                    }}
                    style={{marginLeft: '15px'}}
                />
            </div>
        );
    }
}

export default Countable

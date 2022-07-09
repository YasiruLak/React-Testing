import {Component} from "react";
import Typography from '@mui/material/Typography';
import img1 from "../../../../src/assets/images/img1.jpg"

class Greeting extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <Typography variant="h3" gutterBottom component="div">
                       Hello {this.props.name}
                    </Typography>
                </div>
                <div>
                    <img src={img1} alt={"https://www.ijse.lk"}/>
                </div>
            </div>
        )

    }
}
export default Greeting


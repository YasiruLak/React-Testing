import React,{ Component } from "react";
import { withStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import GDSEButton from "../../components/Comman/Button";
import { styleSheet } from "./style";



class Login extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return(
            <div className={classes.container}>
                <div className={classes.login_cover}>
                    <div className={classes.title_container}>
                        <Typography variant={"h4"}>
                            Login
                        </Typography>
                    </div>
                    <div className={classes.form_container}>
                        <TextField id="outlined-basic" label="User name" variant="outlined" />
                        <TextField id="outlined-basic" type= "password" label="Password" variant="outlined" />

                    </div>
                    <div className={classes.btn_container}>
                        <GDSEButton variant="contained" label="Login"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styleSheet)(Login)

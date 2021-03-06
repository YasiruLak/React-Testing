import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component, Fragment } from "react";
import { styleSheet } from "./style";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import GDSEButton from "../../components/Comman/Button";


class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top100Films: [
                { label: 'The Shawshank Redemption', year: 1994 },
                { label: 'The Godfather', year: 1972 },
                { label: 'The Godfather: Part II', year: 1974 },
                { label: 'The Dark Knight', year: 2008 },
                { label: '12 Angry Men', year: 1957 },
            ]
        }

    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <Typography variant="h4">
                    Poster Manage
                </Typography>
                <Grid container spacing={0.5}>
                    <Grid item lg={6} md={6} sm={6} xm={6} >
                        <Typography variant="body2">User Id</Typography>
                        <TextField id="outlined-basic" placeHolder="User Id" variant="outlined" size="small"
                            style={{ width: '100%' }} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                        <Typography variant="body2">Id</Typography>
                        <TextField id="outlined-basic" placeHolder="Id" variant="outlined" size="small"
                            style={{ width: '100%' }} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6} >
                    <Typography variant="body2">Title</Typography>
                        <TextField id="outlined-basic" placeHolder="Title" variant="outlined" size="small"
                            style={{ width: '100%' }} />
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xm={6}>
                    <Typography variant="body2">Body</Typography>
                        <TextField id="outlined-basic" placeHolder="Body" variant="outlined" size="small"
                            style={{ width: '100%' }} />
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xm={12} style={{ display: 'flex' }} justifyContent="flex-end" >
                        <GDSEButton size="small" variant="contained" label="save" />
                    </Grid>
                </Grid>
            </Fragment>

        )
    }
}
export default withStyles(styleSheet)(Posts)
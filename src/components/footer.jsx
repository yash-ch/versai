import React from "react";
import {Grid, Box} from '@mui/material';
import "../css/footer.css"

export default function Footer() {
    return (<footer>
        <Box className="footer">
            <Box width={"90vw"} height={"3px"} className="footer-line"/>
            <Box sx={{flexGrow: 1}} width="90vw" className="content-box">
                <Grid container>
                    <Grid item>
                        <Box>
                            © 2022. Made by Yash Chauhan.
                        </Box>
                    </Grid>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}/>
                    <Grid item>
                        <Box>
                            chauhanyash1029@gmail.com (8826116192)
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </footer>);
}

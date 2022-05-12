import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import "../css/header.scss"
import {Menu, MenuItem} from "@mui/material";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

let headerMenuList = ["Search", "Help", "Account"];
export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <div>
            <Box sx={{flexGrow: 1}} style={{position: 'relative', zIndex: '3'}}>
                <AppBar className="header" position="static" elevation={0}>
                    <Toolbar>
                        <Box sx={{display: {md: 'flex'}}}>
                            <img alt={"homejam"} src={"./assets/homejam.png"}/>
                        </Box>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}/>
                        <Box sx={{flexGrow: 1}}/>
                        <img src={"./assets/search.png"} alt={"bucket"} className={"header-icon header-icon-search"}/>
                        <Box sx={{display: {md: 'flex', xs: 'none',}}} style={{
                            marginRight: "2vw"
                        }}>
                            {headerMenuList.map((item, index) => {
                                return (
                                    <Box sx={{display: {md: "flex"}}} key={item}>
                                        <button className='header-button' onClick={() => {
                                            toast(item);
                                        }}>
                                            {item}
                                        </button>
                                    </Box>
                                );
                            })}
                        </Box>
                        <img src={"./assets/bucket.png"} alt={"bucket"} className={"header-icon"}/>
                        <button className='header-more-button' onClick={
                            handleClick
                        }><MenuIcon/></button>
                        <Menu
                            keepMounted
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            open={Boolean(anchorEl)}
                        >
                            <MenuItem onClick={handleClose}>Help</MenuItem>
                            <MenuItem onClick={handleClose}>Account</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}
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

let headerMenuList = ["Team", "Contacts", "Issues", "Info"];
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
            <Box  sx={{flexGrow: 1}}  style={{ position: 'relative', zIndex: '3' }}>
                <AppBar className="header" position="static" elevation={0}>
                    <Toolbar>
                        <Box sx={{display: {md: 'flex'}}}>
                            <h3 className={"logo-text"}>📘BOOK.donation</h3>
                        </Box>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}/>
                        <Box sx={{flexGrow: 1}}/>
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
                        <button className='header-more-button' onClick={
                            handleClick
                        }><MenuIcon/></button>
                        <Menu
                            keepMounted
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            open={Boolean(anchorEl)}
                        >
                            <MenuItem onClick={handleClose}>Team</MenuItem>
                            <MenuItem onClick={handleClose}>Contacts</MenuItem>
                            <MenuItem onClick={handleClose}>Issues</MenuItem>
                            <MenuItem onClick={handleClose}>Info</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}
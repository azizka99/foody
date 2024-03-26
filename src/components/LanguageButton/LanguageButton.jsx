import {Button, Divider, Fade, ListItemIcon, ListItemText, MenuItem, MenuList, Paper} from "@mui/material";
import {useState} from "react";

function LanguageButton(props) {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
           <Button id="fade-button"
                   aria-controls={open ? 'fade-menu' : undefined}
                   aria-haspopup="true"
                   aria-expanded={open ? 'true' : undefined}
                   onClick={handleClick} >
               <img src="/images/enLogo.svg"/>
           </Button>
            <Paper sx={{ width:70 }} style={{backgroundColor:"#27283C"}} id="fade-menu"
                MenuListProps={{
                'aria-labelledby': 'fade-button',
            }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}>
                <MenuList >
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon >
                            <img src={'/images/enLogo.svg'}/>
                        </ListItemIcon>
                    </MenuItem>
                    <Divider color={'#F3F4F6'} variant={'middle'} />
                    <MenuItem>
                        <ListItemIcon>
                            <img src={'/images/azLogo.svg'}/>
                        </ListItemIcon>
                    </MenuItem>
                    <Divider color={'#F3F4F6'} variant={'middle'} />
                    <MenuItem>
                        <ListItemIcon>
                            <img src={'/images/ruLogo.svg'}/>
                        </ListItemIcon>
                    </MenuItem>
                    <Divider color={'#F3F4F6'} variant={'middle'} />
                    <MenuItem>
                        <ListItemIcon>
                            <img src={'/images/deLogo.svg'}/>
                        </ListItemIcon>
                    </MenuItem>
                </MenuList>
            </Paper>
        </>
    );
}

export default LanguageButton;
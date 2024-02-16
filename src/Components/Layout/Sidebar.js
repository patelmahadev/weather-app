import React from 'react';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/GridView';

const Sidebar = () => {
    return(
        <Paper className={`app-sidebar`}>
            <MenuList>
                <NavLink 
                    to='/'
                    className={({ isActive }) => (isActive ? 'active' : '')}
                >
                    <ListItemIcon>
                        <DashboardIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Dashboard</ListItemText>
                </NavLink>
            </MenuList>
        </Paper>
    )
}
export default Sidebar;
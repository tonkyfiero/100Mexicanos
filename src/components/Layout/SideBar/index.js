import React, { useState, Fragment } from 'react';

///router
import { Link } from 'react-router-dom';

/////MU- imports
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

////MU-Icons
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import ContactsIcon from '@material-ui/icons/Contacts';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ListSubheader from '@material-ui/core/ListSubheader';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 50,
  },
  toolbarMargin: theme.mixins.toolbar,
});

const itemInitialState = [
  {
    nombre: 'Seguimiento',
    Icon: InboxIcon,
    ruta: '/seguimiento',
    expandido: false,
  },
  {
    nombre: 'Catalogos',
    Icon: ContactsIcon,
    expandido: false,
    children: [
      { nombre: 'Equipos', Icon: ContactMailIcon, ruta: '/catalogos/equipos' },
      { nombre: 'Macroperas', Icon: ContactMailIcon, ruta: '/catalogos/macroperas' },
      { nombre: 'Tuberias', Icon: ContactMailIcon, ruta: '/catalogos/tuberias' },
      { nombre: 'Campos', Icon: ContactMailIcon, ruta: '/catalogos/campos' },
    ],
  },
];

const ExpandIcon = ({ expandido }) => (expandido ? <ExpandLessIcon /> : <ExpandMoreIcon />);

const MyDrawer = withStyles(styles)(({ classes, variant, open, handleClose }) => {
  const [items, setItems] = useState(itemInitialState);

  const onClick = (index) => () => {
    const newItems = [...items];
    const item = items[index];
    newItems[index] = { ...item, expandido: !item.expandido };
    setItems(newItems);
  };

  return (
    <Drawer variant={variant} open={open} onClose={() => handleClose(false)}>
      <List subheader={<ListSubheader>Prueba Datos</ListSubheader>}>
        {items.map(({ Icon, ...item }, index) =>
          item.children != null ? (
            <Fragment key={index}>
              <ListItem button onClick={onClick(index)}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={item.nombre} />
                <ExpandIcon expanded={item.expandido} />
              </ListItem>
              <Collapse in={item.expandido}>
                {item.children.map((child) => (
                  <ListItem key={child.nombre} button dense component={Link} to={child.ruta} onClick={()=>handleClose(false)}>
                    <ListItemIcon>
                      <child.Icon />
                    </ListItemIcon>
                    <ListItemText primary={child.nombre} />
                  </ListItem>
                ))}
              </Collapse>
            </Fragment>
          ) : (
            <Fragment key={index}>
              <ListItem button onClick={()=>handleClose(false)} component={Link} to={item.ruta}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={item.nombre} />
              </ListItem>
            </Fragment>
          ),
        )}
      </List>
    </Drawer>
  );
});

export default MyDrawer;

{
  /* <List>
      <ListItem
        button
        component={Link}
        to="/equipos"
        onClick={() => {
          handleClose(false);
        }}>
        <ListItemText>Equipos</ListItemText>
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/tuberias"
        onClick={() => {
          handleClose(false);
        }}>
        <ListItemText>Tuberias</ListItemText>
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/campos"
        onClick={() => {
          handleClose(false);
        }}>
        <ListItemText>campos</ListItemText>
      </ListItem>
      <ListItem
        button
        component={Link}
        to="/macroperas"
        onClick={() => {
          handleClose(false);
        }}>
        <ListItemText>Macroperas</ListItemText>
      </ListItem>
    </List> */
}

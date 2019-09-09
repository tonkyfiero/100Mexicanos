import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import Collapse from "@material-ui/core/Collapse";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolbarMargin: theme.mixins.toolbar
});

const MyDrawer = withStyles(styles)(
  ({ classes, variant, open, onClose, setTitle }) => (
    <Drawer variant={variant} open={open} onClose={onClose}>
      <List>
        <ListItem
          button
          onClick={() => {
            setTitle("Home");
            onClose();
          }}
        >
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setTitle("Page 2");
            onClose();
          }}
        >
          <ListItemText>Page 2</ListItemText>
        </ListItem>
        <ListItem
          button
          onClick={() => {
            setTitle("Page 3");
            onClose();
          }}
        >
          <ListItemText>Page 3</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  )
);

export default MyDrawer

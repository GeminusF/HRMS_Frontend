import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import BusinessIcon from "@material-ui/icons/Business";
import WorkIcon from "@material-ui/icons/Work";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 180,
    backgroundColor: theme.palette.primary.light,
  },
}));

export default function Sidebar() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Job Titles" secondary="3 title" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <PersonIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Candidates" secondary="8 candidate" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BusinessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Employers" secondary="4 employer" />
      </ListItem>
    </List>
  );
}

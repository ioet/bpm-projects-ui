import React from "react";
import { compose } from "redux";
import TableRow from '@material-ui/core/TableRow/TableRow';
import TableCell from '@material-ui/core/TableCell/TableCell';
import Typography from '@material-ui/core/Typography/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { withWidth } from '@material-ui/core';
import { ProjectStyles } from "../styles";

const Project = props => {
    //const { onMouseOver, onMouseOut, project } = props;
    const { uid, short_name, comments, active } = props.project;
    return (
        <TableRow
            /*hover
            onFocus={(e) => {
                e.preventDefault();
                onMouseOver(uid);
            }}
            onMouseOver={(e) => {
                e.preventDefault();
                onMouseOver(uid);
            }}
            onMouseOut={onMouseOut}
            onBlur={onMouseOut}*/
        >
            <TableCell component="td" scope="row">
                <Typography variant="subtitle1">
                    { short_name }
                </Typography>
            </TableCell>
            <TableCell component="td" scope="row">
                <Typography variant="subtitle1">
                    { comments }
                </Typography>
            </TableCell>
            <TableCell component="td" scope="row">
                <Typography variant="subtitle1">
                    { active ? "Active" : "Inactive"}
                </Typography>
            </TableCell>
        </TableRow>
    );
};

export default compose(
    withStyles(ProjectStyles),
    withWidth(),
)(Project);

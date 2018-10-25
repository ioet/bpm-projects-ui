import React from 'react';
import { ButtonsDelay } from "../../../constants"
import IconButton from "@material-ui/core/IconButton/IconButton";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";

const FieldButton = props => {
    const {title, icon, onClick} = props;
    return (
        <div>
            <Tooltip
                title={title}
                placement="top"
                enterDelay={ButtonsDelay.ENTER_DELAY}
                leaveDelay={ButtonsDelay.LEAVE_DELAY}
            >
                <IconButton
                    color="primary"
                    onClick={onClick}
                    className={"show"}
                >
                    {icon}
                </IconButton>
            </Tooltip>
        </div>
    );
};

export default FieldButton;

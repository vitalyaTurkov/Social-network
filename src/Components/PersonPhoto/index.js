import ButtonBase from "@material-ui/core/ButtonBase/ButtonBase";
import Typography from "@material-ui/core/Typography/Typography";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import React from "react";

import { styles } from "./styles";

function MButtonBase(props) {
    const { classes } = props;

    return (
        <ButtonBase
            focusRipple
            key={"Загрузить фото"}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
                width: '20%'
            }}
        >
          <span
              className={classes.imageSrc}
              style={{
                  backgroundImage: `url(${props.url})`,
              }}
          />
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
            <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
            >
              {"Загрузить фото"}
                <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
    );
}

MButtonBase.propTypes = {
    classes: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired
};

export default withStyles(styles)(MButtonBase);

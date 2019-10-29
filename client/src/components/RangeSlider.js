import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        width: 500,
        margin: "auto",
        marginTop: 10,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 80,
        [theme.breakpoints.down('sm')]: {
            float: "right",
        },
    },
    floatRight: {
        float: "right",
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 80,
        [theme.breakpoints.down('sm')]: {
            float: "left",
        },
    }
}));

function valuetext(value) {
    return `${value}MAD`;
}

export default function RangeSlider() {
    const classes = useStyles();
    const [value, setValue] = React.useState([10000, 500000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <form>
            <div className="row mt-3">
                <div className="col">
                    <TextField
                        id="input1"
                        label="Min"
                        value={value[0] + "DH"}
                        className={classes.floatRight}
                        margin="normal"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
                <div className="col">
                    <div className={classes.root} id="sliderRange">

                        <Typography color="primary" id="range-slider" gutterBottom className="text-center">
                            10 000<sup>DH</sup> - 500 000<sup>DH</sup>
                        </Typography>
                        <Slider
                            min={10000}
                            max={500000}
                            value={value}
                            onChange={handleChange}
                            valueLabelDisplay="off"
                            aria-labelledby="range-slider"
                            getAriaValueText={valuetext}
                        />

                    </div>
                </div>
                <div className="col">
                    <TextField
                        id="input2"
                        label="Max"
                        value={value[1] + "DH"}
                        className={classes.textField}
                        margin="normal"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
            </div>
        </form>
    );
}
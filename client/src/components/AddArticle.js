import React from "react";
import Fab from '@material-ui/core/Fab';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { FormattedMessage } from "react-intl";
import Button from '@material-ui/core/Button';
import {DropzoneArea} from 'material-ui-dropzone'

const useStyles = makeStyles(theme => ({
    textField: {
        width: 350,
        margin: 10
    },
    formControl: {
      margin: 10,
      minWidth: 350
    },
}));

export default function AddArticle(props) {
    const [value, setValue] = React.useState("intermediare");
    const [files, setFiles] = React.useState([]);
    const [values, setValues] = React.useState({
      type: "",
      poids: "",
      quantite: "",
      qualite: "",
      livraison: "",
      sort: ""
    });
    const classes = useStyles();
    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeInput = (files) => {
    setFiles(files);
    console.log(files);
  }
    const handleChanges = event => {
      setValues(oldValues => ({
        ...oldValues,
        [event.target.name]: event.target.value
      }));
    };

    return (
                <div className='row mt-4'>
                    <div className='col'>
                    <h2 className="mt-3" style={{
                        color: "#536dfe"
                    }}>Dechet Attatchment</h2>
                        <form>
                        <div className="notes p-2">
                        <h4 style={{
                          color:"#f44336"
                        }}>Notes!</h4>
                        <p> Upload your waste images 1 to 6 no more than 1M each image the best size is 300 x 500 px  </p>
                        </div>
                        <div className="m-4">
                        <DropzoneArea
       onChange={handleChangeInput}
       maxFileSize={1000000}
       filesLimit={6}
       />
       </div>
       <h2 style={{
           color: "#536dfe"
       }}>Dechets Information</h2>
                            <TextField
                                id="outlined-prix"
                                className={classes.textField}
                                label="Prix"
                                margin="normal"
                                variant="outlined"
                            />
                            <FormControl variant="outlined" className={classes.formControl}>
                              <InputLabel ref={inputLabel} htmlFor="outlined-type-simple">
                                <FormattedMessage
                                  id="type.label"
                                  defaultMessage="Acceuil"
                                  description="Link on react page"
                                />
                              </InputLabel>
                              <Select
                                value={values.type}
                                onChange={handleChanges}
                                labelWidth={labelWidth}
                                inputProps={{
                                  name: "type",
                                  id: "outlined-type-simple"
                                }}
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                  <MenuItem value="test">test
                                  </MenuItem>
                              </Select>
                            </FormControl>
                            <TextField
                                id="outlined-poids"
                                className={classes.textField}
                                label={
                                  <FormattedMessage
                                    id="poids.label"
                                    defaultMessage="Acceuil"
                                    description="Link on react page"
                                  />
                                }
                                margin="normal"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-quantite"
                                className={classes.textField}
                                label={
                                  <FormattedMessage
                                    id="quantite.label"
                                    defaultMessage="Acceuil"
                                    description="Link on react page"
                                  />
                                }
                                margin="normal"
                                variant="outlined"
                            />
                            <FormControl variant="outlined" className={classes.formControl}>
                              <InputLabel ref={inputLabel} htmlFor="outlined-livraison-simple">
                                <FormattedMessage
                                  id="livraison.label"
                                  defaultMessage="Acceuil"
                                  description="Link on react page"
                                />
                              </InputLabel>
                              <Select
                                value={values.livraison}
                                onChange={handleChanges}
                                labelWidth={labelWidth}
                                inputProps={{
                                  name: "livraison",
                                  id: "outlined-livraison-simple"
                                }}
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                  <MenuItem value="test">test
                                  </MenuItem>
                              </Select>
                            </FormControl>
                            <TextField
                                id="outlined-ville"
                                className={classes.textField}
                                label={
                                  <FormattedMessage
                                    id="ville.label"
                                    defaultMessage="Acceuil"
                                    description="Link on react page"
                                  />
                                }
                                margin="normal"
                                variant="outlined"
                            />
                            <div className="m-4">
                            <Button variant="contained" color="primary" >
        Ajouter
      </Button>
                            </div>
                        </form>
                    </div>
                </div>
    );
}

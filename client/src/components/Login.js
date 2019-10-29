import React from "react";
import Fab from '@material-ui/core/Fab';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    textField: {
        width: 350,
        margin: 0
    },
}));

export default function LoginPage(props) {
    const [remember, setRemember] = React.useState(false);
    const classes = useStyles();
    const handleChange = () => {
        setRemember(!remember);
    };
    return (
        <div id="example1">
            <div className='container'>
                <div className='row'>
                    <div className="black-text col-4">
                        <h1 className="h1-responsive font-weight-bold mt-sm-5" style={{
                            color: "#34009f"
                        }}>
                            Login
                        </h1>
                        <h2 className="h2-responsive font-weight-normal" style={{
                            color: "#34009f"
                        }}>
                            Bienvenue à TadwireStore
                  </h2>
                        <Divider style={{
                            backgroundColor: "#34009f",
                            height: '5px',
                            borderRadius: '5px',
                            width: '70px'
                        }} />
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-4'>
                        <form>
                            <label htmlFor="defaultFormLoginEmailEx" className='font-weight-bold' style={{
                                color: "#34009f",
                                fontSize: "15px"
                            }}>
                                Email
            </label>
                            <TextField
                                id="outlined-email-login"
                                className={classes.textField}
                                placeholder="Email"
                                margin="normal"
                                type="email"
                                variant="outlined"
                            />
                            <br />
                            <label htmlFor="defaultFormLoginPasswordEx" className='font-weight-bold mt-2' style={{
                                color: "#34009f",
                                fontSize: "15px"
                            }}>
                                Mot de passe
            </label>
                            <TextField
                                id="outlined-pw-login"
                                className={classes.textField}
                                placeholder="Mot de passe"
                                margin="normal"
                                type="password"
                                variant="outlined"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={remember} color="primary" onChange={handleChange} value="remember" />}
                                label="Souviens"
                                style={{
                                    color: "#34009f",
                                    fontSize: "10px",
                                    fontWeight: 'bold'
                                }}
                            />
                            <Link href="#" style={{
                                color: "#34009f",
                                fontSize: "15px",
                                opacity: '0.5',
                                position: 'relative',
                                left: '75px'
                            }}>   <Icon style={{
                                position: 'relative',
                                top: '2px'
                            }} fontSize='small' className="far fa-question-circle"></Icon><span className='ml-1' style={{
                                position: 'relative',
                                bottom: '3px'
                            }} >Mot de passe oublié</span></Link>
                            <div className="mt-4">
                                <Fab style={{
                                    backgroundColor: "#34009f",
                                    color: "white",
                                    fontSize: "15px"
                                }} variant="extended" className='pr-5 pl-5' aria-label="delete" >
                                    Login
      </Fab>
                                <Link href="/signup" style={{
                                    color: "#34009f",
                                    fontSize: "15px",
                                    fontWeight: 'normal',
                                    position: 'relative',
                                    left: '115px'
                                }}>
                                    <span className='mr-2'>Inscription</span>
                                    <Icon fontSize='small' style={{
                                        position: 'relative',
                                        top: '5px'
                                    }} className="fas fa-chevron-right"></Icon>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
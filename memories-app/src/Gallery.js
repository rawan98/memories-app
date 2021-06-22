import './Gallery.css'
import photo from "./media/1619264517794duck.jpg";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton } from '@material-ui/core';
import { Container } from 'react-bootstrap';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

function Gallery() {
    const classes = useStyles();
    return (
        <div>
            <IconButton aria-label="delete" color="secondary">
                <DeleteIcon />
            </IconButton>

            <div className="gallery">
                <ArrowBackIosIcon className="arrow" />

                <Container>
                    <img width="200" src={photo} />
                </Container>

                <ArrowForwardIosIcon className="arrow" />
            </div>

            <div className={classes.root}>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" color="primary" component="span">
                        Upload
                    </Button>
                </label>
            </div>
        </div>
    )
}

export default Gallery;
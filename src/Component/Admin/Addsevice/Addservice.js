import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Addservice.css'


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

const Addservice = () => {
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [about, setAbout] = useState('');
    const [file, setFile] = useState(null);

    const serviceTitle = (e) => {
        setTitle(e.target.value)
        console.log(e.target.value);
    }
    const serviceAbout = (e) => {
        setAbout(e.target.value)
        console.log(e.target.value);
    }
    const handleFileChange = (e) => {
        console.log('click');
        const newFile = e.target.files[0];
        console.log(newFile);
        setFile(newFile);
    }

    const addService = () => {
        const formData = new FormData()

        formData.append('file', file);
        formData.append('title', title);
        formData.append('about', about);
        console.log(formData);

        fetch('https://protected-taiga-89128.herokuapp.com/addEvent', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>

            <div className="addservice ml-5 mt-5">
                <div className='row'>
                    <div className='col-md-6 col-8'>
                        <input className='form-control ml-3' type="text" onBlur={serviceTitle} placeholder='Service title' />
                        <br />
                        <textarea className='form-control ml-3' placeholder='Enter deisignation' onBlur={serviceAbout} rows='4'></textarea>
                    </div>
                    <div>
                        <div className={classes.root}>
                            <input
                                accept="image/*"
                                className={classes.input}
                                onChange={handleFileChange}
                                id="contained-button-file"
                                multiple
                                type="file"
                            />

                            {/* <label for="exampleFormControlFile1">Example file input</label> */}
                            {/* <input style={{ marginTop: '30%' }}  type="file" class="form-control-file" id="exampleFormControlFile1"/> */}
                            <label htmlFor="contained-button-file">
                                <Button style={{ marginTop: '30%' }} variant="contained" color="primary" component="span"  >
                                    Upload Image
                            </Button>
                            </label>

                        </div>
                    </div>
                </div>

            </div>
            <button style={{ marginLeft: '50%' }} className='btn btn-primary' onClick={addService}>Submit</button>




        </div>
    );
};

export default Addservice;
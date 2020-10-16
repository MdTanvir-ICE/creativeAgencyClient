import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { GlobalVlaue } from '../../GlobalValue/GlobalValue';



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

const Order = () => {
    
    const {eventName,logedUser} =useContext(GlobalVlaue);
    const [email,setEmail] =useState(logedUser[0].email);
    const [name,setName] =useState('');
    const [projectName,setProjectName]=useState(eventName[0]);
    const [file,setFile] = useState(null);
    const [about,setAbout] =useState('');
    const [status,setStatus] = useState('pending');

    const handleFileChange = (e) => {
        console.log('click');
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    
  const handaleChange = (e) =>{
     let val=e.target.value;
      if(e.target.name==='name'){setName(val);e.target.value='';}
      if(e.target.name==='email'){setEmail(val);e.target.value='';}
      if(e.target.name==='about'){setAbout(val);e.target.value='';}
  }
  const submit = () =>{
    const formData = new FormData()

    formData.append('file', file);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('about', about);
    formData.append('status', status);
    formData.append('project', projectName);
    console.log(formData);

    fetch('http://localhost:4000/addOrder', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            alert('Your Order added successgullly');
            console.log(data)
        })
        .catch(error => {
            alert('Please fill the form');
            console.error(error)
        })
  }
  console.log(email);
    const classes = useStyles();
    return (
        <div style={{
            maxWidth:'60%',
            height:'300px',
            
        }} className=" ml-5 m-5">
            <input onBlur={handaleChange} type="text"  className="form-control m-3" name='name' placeholder="User name"/>
            <input onBlur={handaleChange} type="text"  className="form-control m-3" name='email' value={logedUser[0].email} placeholder='Your email address'/>
            <input  onBlur={handaleChange} type="text" className="form-control m-3" name='project'  value={eventName[0]} placeholder='Select a project'/>
            <textarea onBlur={handaleChange} className="form-control m-3" name='about' placeholder='project detail' rows='5'></textarea>
            <div className="row m-3">
                <div>
                    <input onBlur={handaleChange} type="number" name='price' className="form-control mt-1" placeholder='price'/>
                </div>
                <div>
                <div className={classes.root}>
                            <input
                                accept="image/*"
                                className={classes.input}
                                id="contained-button-file"
                                onChange={handleFileChange}
                                multiple
                                type="file"
                            />
                            <label htmlFor="contained-button-file">
                                 <Button style={{ maxWidth:'300px',padding:'5px 30px 5px 30px' }} variant="contained" color="primary" component="span">
                                    Upload Image
                            </Button>
                            </label>

                        </div>
                </div>

            </div>
            <button onClick={submit} className='btn btn-dark m-3'>Send</button>
        </div>
    );
};

export default Order;
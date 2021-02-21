import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import Styling from './styles';
import { createInfoCard} from '../../actions/infoCards';


const Form = () => {
    const [postData, setPostData] = useState({
        creator: '', title: '', description: 'title', selectedFile: ''
    });
    const classing = Styling();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createInfoCard(postData));
    }

    const clear = () => {
        
    }
    return(
        <Paper className={classing.paper}>
            <form autoComplete="off" noValidate className={`${classing.root} ${classing.form}`} onSubmit={handleSubmit}>
            <Typography variant="h6">Creating InfoCard</Typography>

            <TextField name="creator" variant="outlined" label="Creator"
            fullWidth
            value={postData.creator}
            onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
            />
            
            <TextField name="title" variant="outlined" label="Title"
            fullWidth
            value={postData.title}
            onChange={(e) => setPostData({ ...postData, title: e.target.value })}
            />

            <div className={classing.fileInput}>
                <FileBase
                    type="file"
                    multiple={false}
                    onDone={({base64}) => setPostData({ ...postData, selectedFile: base64})} 
                />

                <Button className={classing.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth value>Submit</Button>

                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth value>Clear</Button>



            </div>

            </form>
        </Paper>
    );
}

export default Form;
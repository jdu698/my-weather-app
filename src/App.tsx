import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import Dropzone from 'react-dropzone'

import './App.css';


    <div className="container-fluid">
      <div className="centreText">
        <div className="dropZone">
          <Dropzone onDrop={this.state.dropzone} style={{position: "relative"}}>
            <div style={{height: '50vh'}}>
              {
                this.state.imageFiles.length > 0 ? 
                  <div>{this.state.imageFiles.map((file) => <img className="image" key={file.name} src={file.preview} /> )}</div> :
                  <p>Try dropping some files here, or click to select files to upload.</p>
              }  
            </div>
          </Dropzone>
        </div>
        <div  className="dank">
        {
          this.state.results === "" && this.state.imageFiles.length > 0 ?
          <CircularProgress thickness={3} />:
          <p>{this.state.results}</p>
        }
        </div>
      </div>
    </div>

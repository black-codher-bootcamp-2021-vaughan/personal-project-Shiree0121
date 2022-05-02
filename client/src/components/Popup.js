import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Icon } from '@mui/material';

export default function Popup(props) {

    const {title, children, open, close,  setOpenPopup } = props;
    
    return(
        <Dialog open = {open} className="popup-wrapper">
            <div className="close-button-wrapper">
                <button className="close-button" onClick={close}>x</button>
            </div>
            <DialogTitle>
                <div>Sign Up Here!</div>
            </DialogTitle>
            <DialogContent>
                <div class="form-example">
                    <label for="name">Contact Number: </label>
                    <input type="text" Name="name" id="name" required />
                </div>
                <div class="form-example">
                    <label for="name">Enter your name: </label>
                    <input type="text" name="name" id="name" required />
                </div>

                <div class="form-example">
                    <label for="email">Enter your email: </label>
                    <input type="email" name="email" id="email" required />
                </div>
            </DialogContent>
          
        </Dialog>
    )
}


import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function WarningPopup() {
    return (
        <div>
            <Popup trigger=
            {<button> Submit</button>}
            modal nested>
            {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                You are about to Submit, continue?
                                </div>
                                <div>
                                    <button onClick={
                                        () => close()}>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                    )
                 }
                          
            </Popup>
        </div>

    )


};
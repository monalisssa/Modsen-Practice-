import React from 'react';

const Index = () => {
    return (
        <div id="PromiseAlert" className="modal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title"><i className="fas fa-exclamation-triangle text-warning"></i> <span>The app reports</span>
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p></p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
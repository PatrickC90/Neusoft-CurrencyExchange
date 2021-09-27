import React from "react";

//Import Modal Styles
import "../styles/Modal.scss";
//Import images
import russia from '../img/russia.png';

const Modal = ({
    show,
    onClose,
    symbols,
    setSymbols,
    symbolName,
    setSymbolName,
    key }) => {
    //Show/hide modal
    if (!show) {
        return null;
    }

    // const newSymbols = symbols.map(symbol => {
    //     return {
    //         keys: [symbol.keys()],
    //         values: [symbol.values()],
    //     }

    // })
    // setSymbols(newSymbols);

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">
                        Select currencies
                    </h4>
                </div>
                <div className="modal-body">
                    {symbols.map((key, value) => (
                        <div className="currency-item">
                            <img src={russia} alt="" />
                            <h3 key={key} className={value}>{key}</h3>

                            <h4 key={value} className={value}>{value}</h4>


                        </div>
                    ))}
                </div>
                <div className="modal-footer">
                    <button onClick={onClose} className="button">Add Currency</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;
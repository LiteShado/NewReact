function Popups({greeting} ){
    return(
        <>
        <div className="popup">
        <span>{greeting}</span>
        <div className="popup__btns">
            <button className="popup__btn">Confirm?</button>
            <button className = "button.popup__btn popup__btn--cancel">Cancel</button>

        </div>
        </div>
        <div className="backdrop"></div>
        </>
    )
}

export default Popups; 
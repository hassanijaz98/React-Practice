function Modal(props)
{
    function onCancelClick()
    {
        props.onCancel();
    }

    function onConfirmClick()
    {
        props.onConfirm();
    }


    return <div className='modal'>
        <p>Are you sure ?</p>
        <button className='btn btn--alt' onClick={onCancelClick} >Cancel</button>
        <button className='btn' onClick={onConfirmClick}>Confirm</button>
    </div>

}
export default Modal;
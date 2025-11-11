import "./DeleteConfirm.css";

function DeleteConfirm({ isOpen, onClose, onConfirm, itemName }) {
  return (
    <div className={`modal ${isOpen && "modal_open"}`}>
      <div className="modal__content modal__content_type_confirmation">
        <button type="button" className="modal__close" onClick={onClose}>
          x
        </button>
        <h2 className="modal__title">
          Are you sure you want to delete this item?
        </h2>
        <p className="modal__text">This action is irreversible.</p>
        <div className="modal__buttons">
          <button className="modal__confirm-delete" onClick={onConfirm}>
            Yes, delete item
          </button>
          <button className="modal__cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirm;

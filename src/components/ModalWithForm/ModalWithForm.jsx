import "./ModalWithForm.css";

function ModalWithForm({
  children,
  title,
  buttonTitle,
  activeModal,
  handleCloseClick,
}) {
  return (
    <div className={`modal ${activeModal === "add-garment" && "modal_open"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal__close"
        >
          close
        </button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {buttonTitle}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

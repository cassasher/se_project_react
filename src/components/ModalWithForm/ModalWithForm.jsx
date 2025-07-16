import "./ModalWithForm.css";
import close from "../../images/close.png";
function ModalWithForm({
  children,
  title,
  buttonTitle,
  isOpen,
  handleCloseClick,
}) {
  return (
    <div className={`modal ${isOpen && "modal_open"}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal__close"
        >
          <img src={close} alt="close button" />
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

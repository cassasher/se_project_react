import "./ItemModal.css";
import close from "../../images/close.png";

function ItemModal({ activeModal, handleCloseClick, card, handleDeleteItem }) {
  const handleDelete = () => {
    handleDeleteItem();
  };
  return (
    <div className={`modal ${activeModal === "preview" && "modal_open"}`}>
      <div className="modal__content modal__content_type_image">
        <button
          id="previewclose"
          onClick={handleCloseClick}
          type="button"
          className="modal__close"
        >
          <img src={close} alt="close button" />
        </button>
        <div className="modal__image-container">
          <img src={card.imageUrl} alt={card.name} className="modal__image" />
          <div className="modal__image-title">{card.name}</div>
        </div>

        <div className="modal__info">
          <p className="modal__weather">Weather: {card.weather}</p>
          <button
            className="modal__deleteItem"
            type="button"
            onClick={handleDelete}
          >
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;

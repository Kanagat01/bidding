import { Modal } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import { FolderPlus } from "~/shared/assets";
import { useModalState } from "~/shared/lib";
import { InputContainer, ModalTitle, OutlineButton } from "~/shared/ui";

export const CreateDelivery = () => {
  const [show, changeShow] = useModalState(false);
  return (
    <>
      <ReactSVG
        src={FolderPlus}
        style={{ color: "gray" }}
        onClick={changeShow}
      />
      <Modal show={show} onHide={changeShow} className="gradient-modal">
        <Modal.Body>
          <ModalTitle>Поставка</ModalTitle>
          {[
            ["stage", "Тип этапа", "Погрузка"],
            ["date", "Дата", "23.02.2022"],
            ["company", "Компания", ""],
            ["address", "Адрес", ""],
            ["contact_person", "Контактное лицо", ""],
            ["cargo", "Груз", ""],
            ["weight", "Вес", ""],
            ["volume", "Обьем", ""],
            ["comment", "Комментарий к поставке", ""],
          ].map(([name, label, placeholder]) => (
            <InputContainer
              key={name}
              name={name}
              label={label}
              placeholder={placeholder}
              variant="input"
              label_style={{ color: "var(--default-font-color)" }}
              className={`w-100 mb-2`}
            />
          ))}
          <div
            className="d-flex align-items-center mt-4"
            style={{ gap: "3rem" }}
          >
            <OutlineButton
              style={{
                width: "100%",
                padding: "0.5rem 2rem",
                fontSize: "1.6rem",
              }}
            >
              Сохранить
            </OutlineButton>
            <OutlineButton
              style={{
                width: "100%",
                padding: "0.5rem 2rem",
                fontSize: "1.6rem",
              }}
            >
              Отмена
            </OutlineButton>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
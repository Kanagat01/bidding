import { useState } from "react";
import { Modal } from "react-bootstrap";
import { ReactSVG } from "react-svg";
import { FaAngleRight } from "react-icons/fa";
import { NotificationCard, NotificationType } from "~/entities/Notification";
import { useModalState } from "~/shared/lib";
import { Bell } from "~/shared/assets";
import { Button } from "~/shared/ui";

export function Notifications() {
  const [show, changeShow] = useModalState(false);
  const [activeSection, setActiveSection] = useState("Информация");
  const notifications: NotificationType[] = [
    {
      date: "23 ноября",
      time: "23:48",
      type: "Новость",
      title: "Межбанковские платежи в выходные",
      text: "26 ноября с 11:00 до 16:00 по Москве мы будем отправлять и зачислять платежи в рублях",
    },
    {
      date: "23 ноября",
      time: "23:48",
      type: "Новость",
      title: "Межбанковские платежи в выходные",
      text: "26 ноября с 11:00 до 16:00 по Москве мы будем отправлять и зачислять платежи в рублях",
    },
  ];
  return (
    <>
      <a href="#" onClick={changeShow}>
        <ReactSVG src={Bell} />
      </a>

      <Modal show={show} onHide={changeShow} className="rounded-modal">
        <Modal.Body style={{ height: "90vh" }}>
          <div className="d-flex justify-content-end mb-2">
            <FaAngleRight className="avg-icon" />
          </div>
          <div className="d-flex mb-4" style={{ gap: "1rem" }}>
            {["Информация", "Финансы"].map((text) => (
              <Button
                key={text}
                onClick={() => setActiveSection(text)}
                variant="section"
                isActive={activeSection === text}
              >
                {text}
              </Button>
            ))}
          </div>
          {notifications.map((el, idx) => (
            <NotificationCard key={idx} {...el} />
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
}

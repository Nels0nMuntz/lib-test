import React from "react";
import { Modal } from "react-bootstrap";

// STYLES
import styles from "./ModalBasic.module.scss";

export interface Props {
  show: boolean;
  onHide: () => void;
  bodyChildren: any;
  dialogClassName?: string;
  contentClassName?: string;
  bodyClassName?: string;
}

const ModalBasic = ({
  show,
  onHide,
  bodyChildren,
  dialogClassName,
  contentClassName,
  bodyClassName,
}: Props) => (
  <Modal
    show={show}
    onHide={onHide}
    backdrop="static"
    dialogClassName={dialogClassName}
    contentClassName={[contentClassName, styles.modalContent].join(" ")}
    centered
  >
    <Modal.Body bsPrefix="modal-custom">
      <div className={[bodyClassName, styles.modalBody].join(" ")}>
        {bodyChildren}
      </div>
    </Modal.Body>
  </Modal>
);

export default ModalBasic;

import React, { useState } from "react";
import { ComponentMeta } from "@storybook/react";
import Stack from "react-bootstrap/Stack";
import Button from "../../Button/Primary/ButtonPrimary";

import Modal from "./ModalBasic";
import ModalHeader from "../components/ModalHeader/ModalHeader";
import ModalTitle from "../components/ModalTitle/ModalTitle";

export default {
  title: "Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Modal>;

export const Regular = () => {
  const [isOpen, setOpen] = useState(false);

  const handleModalClose = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <Button clickHandler={() => setOpen(true)}>Open Modal</Button>
      <Modal
        show={isOpen}
        onHide={handleModalClose}
        bodyChildren={
          <>
            <ModalHeader closeButton onHide={handleModalClose}>
              <ModalTitle>Modal heading</ModalTitle>
            </ModalHeader>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              accusamus optio nihil itaque odio. Necessitatibus laboriosam,
              pariatur sed repellendus eos, exercitationem dolorum quod
              temporibus repellat possimus voluptates numquam. Et, dolorum?
            </p>
            <Stack
              direction="horizontal"
              gap={3}
              className="justify-content-end"
            >
              <Button borderButton clickHandler={handleModalClose}>
                Close
              </Button>
              <Button clickHandler={handleModalClose}>Save Changes</Button>
            </Stack>
          </>
        }
      />
    </>
  );
};

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { formatUsd } from "../../shared/helpers/formatUsd";
import colors from "../../styles/colors.module.scss";
import Table, { Props } from "./Table";
import Typography, { TextType } from "../Typography/Typography";
import styles from "./table.module.scss";

export default {
  title: "Table",
  component: Table,
} as ComponentMeta<typeof Table>;

const data = [
  {
    toFrom: {
      name: "Transfer to Payroll",
      date: "20 May, 2022 at 04:32pm",
    },
    paymentMethod: {
      name: "Fiat Transfer",
      variant: "up",
    },
    account: "AR •• 3402",
    amount: {
      usd: -54895,
      eth: 0,
    },
  },
  {
    toFrom: {
      name: "Transfer from AR",
      date: "20 May, 2022 at 04:32pm",
    },
    paymentMethod: {
      name: "Fiat Transfer",
      variant: "down",
    },
    account: "Payroll •• 1627",
    amount: {
      usd: 54895,
      eth: 0.026,
    },
  },
  {
    toFrom: {
      name: "Starbucks",
      date: "20 May, 2022 at 04:32pm",
    },
    paymentMethod: {
      name: "Card",
      variant: "card",
    },
    account: "Payroll •• 1627",
    amount: {
      usd: -54895,
      eth: -0.026,
    },
  },
  {
    toFrom: {
      name: "Transfer from 0x41f2...d1as",
      date: "20 May, 2022 at 04:32pm",
    },
    paymentMethod: {
      name: "Crypto Transfer",
      variant: "down",
    },
    account: "Budget Wallet",
    amount: {
      usd: 54895,
      eth: 0.026,
    },
  },
  {
    toFrom: {
      name: "To 0x41f2...d1as",
      date: "20 May, 2022 at 04:32pm",
    },
    paymentMethod: {
      name: "Crypto Transfer",
      variant: "up",
    },
    account: "Eric’s Wallet",
    amount: {
      usd: -54895,
      eth: -0.026,
    },
  },
];

const columns = [
  {
    Header: () => (
      <Typography
        text="To/From"
        textType={TextType.bodyB4}
        element="div"
        color={colors.textColorPrimary}
      />
    ),
    accessor: "toFrom",
    Cell: ({ value }: any) => (
      <>
        <Typography
          text={value.name}
          textType={TextType.subHeadingH3}
          element="div"
          color={colors.textColorPrimary}
          className="mb-1"
        />
        <Typography
          text={value.date}
          textType={TextType.caption}
          element="div"
          color={colors.textColorSecondary}
        />
      </>
    ),
  },
  {
    Header: () => (
      <Typography
        text="Payment method"
        textType={TextType.bodyB4}
        element="div"
        color={colors.textColorPrimary}
      />
    ),
    accessor: "paymentMethod",
    Cell: ({ value }: any) => (
      <Typography
        text={value.name}
        textType={TextType.body}
        element="div"
        color={colors.textColorSecondary}
        className={[
          styles.tableBodyCellPayment,
          value.variant === "up" ? styles.tableBodyCellPaymentUp : "",
          value.variant === "down" ? styles.tableBodyCellPaymentDown : "",
          value.variant === "card" ? styles.tableBodyCellPaymentCard : "",
        ].join(" ")}
      />
    ),
  },
  {
    Header: () => (
      <Typography
        text="Account"
        textType={TextType.bodyB4}
        element="div"
        color={colors.textColorPrimary}
      />
    ),
    accessor: "account",
    Cell: ({ value }: any) => (
      <Typography
        text={value}
        textType={TextType.body}
        element="div"
        color={colors.textColorPrimary}
      />
    ),
  },
  {
    Header: () => (
      <Typography
        text="Amount"
        textType={TextType.bodyB4}
        element="div"
        color={colors.textColorPrimary}
        className="text-end"
      />
    ),
    accessor: "amount",
    Cell: ({ value }: any) => (
      <>
        <Typography
          text={formatUsd({ value: value.usd, space: true })}
          textType={TextType.headingH4}
          element="div"
          color={
            value.usd < 0
              ? colors.textColorPrimary
              : colors.semanticColorSuccess
          }
          className="text-end text-nowrap"
        />
        {!!value.eth && (
          <Typography
            text={`${value.eth} ETH`}
            textType={TextType.caption}
            element="div"
            color={colors.textColorSecondary}
            className="text-end"
          />
        )}
      </>
    ),
  },
];

const Template: ComponentStory<typeof Table> = (args: Props) => (
  <Table {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data,
  columns,
};

export const WithoutData = Template.bind({});
WithoutData.args = {
  data: [],
  columns,
};

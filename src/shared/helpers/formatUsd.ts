interface formatUsdArgs {
  value: number;
  space?: boolean;
  extraZeros?: boolean;
}

export const formatUsd = ({ value, space, extraZeros }: formatUsdArgs) => {
  const isNegative = value < 0;
  let output = Math.abs(value).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  output = `${isNegative ? "-" : ""}$${space ? " " : ""}${output}${extraZeros ? ".00" : ""}`
  return output;
};
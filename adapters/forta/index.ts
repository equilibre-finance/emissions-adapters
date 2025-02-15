import { balance, latest as late } from "../balance";
import contracts from "./contracts";

export const unallocated = () =>
  Promise.all(
    Object.keys(contracts).map((k: any) =>
      balance(contracts[k].owners, contracts[k].token, k, "forta", 1651356000),
    ),
  );
export const latest = () => late("forta", 1651356000);

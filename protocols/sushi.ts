import { Protocol } from "../types/adapters";
import manualMasterchef from "../adapters/sushi/manualMasterchef";

const sushi: Protocol = {
  "liquidity mining": manualMasterchef(0.9),
  "development fund": manualMasterchef(0.1),
  meta: {
    sources: ["https://dev.sushi.com/docs/FAQ/Sushinomics%20FAQ"],
    token: "ethereum:0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
    protocolIds: ["119", "1840", "2146", "2152", "2190"],
  },
  sections: {
    insiders: ["development fund"],
    farming: ["liquidity mining"],
  },
};
export default sushi;

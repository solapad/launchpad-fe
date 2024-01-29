//Replace with your RPC
export const endpoint =
  "https://neat-smart-feather.solana-devnet.discover.quiknode.pro/0207771e8ea3edff85fda01d4ce326bccc502183/";

export const DST_TOKEN_METADATA = {
  name: "SPD Store Token",
  symbol: "DST",
  description: "This is a solana pay demo store token!",
  image: "https://i.postimg.cc/MZhCwyjk/logo.png", //add public URL to image you'd like to use
};

export const DST_MINT_CONFIG = {
  numDecimals: 6,
  numberTokens: 100000000,
};

export const ON_CHAIN_DST_METADATA = {
  name: DST_TOKEN_METADATA.name,
  symbol: DST_TOKEN_METADATA.symbol,
  uri: "https://arweave.net/pQ0TEjiqKBmMZWqx4KXba5mecLTXx3WuMSdjFS4roqA",
  sellerFeeBasisPoints: 0,
  creators: null,
  collection: null,
  uses: null,
};

export const DWLT_TOKEN_METADATA = {
  name: "SPD WL Token",
  symbol: "DWLT",
  description: "This is a solana pay demo whitelist token!",
  image: "https://i.postimg.cc/MZhCwyjk/logo.png", //add public URL to image you'd like to use
};

export const DWLT_MINT_CONFIG = {
  numDecimals: 6,
  numberTokens: 100000,
};

export const ON_CHAIN_DWLT_METADATA = {
  name: DWLT_TOKEN_METADATA.name,
  symbol: DWLT_TOKEN_METADATA.symbol,
  uri: "https://arweave.net/4kKwnmPMXeRzgRcX2Y4k-wYHcV0r6-n0iP1f8uK6ZB8",
  sellerFeeBasisPoints: 0,
  creators: null,
  collection: null,
  uses: null,
};
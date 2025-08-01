import { EvmChainId, evmNatives } from '../../chain/evm/index.js'
import {
  APE_USD,
  ARB,
  AUSD,
  BUSD,
  GNO,
  Native,
  OP,
  SUSHI,
  Token,
  USDB,
  USDC,
  USDT,
  USDT0,
  WETH9,
  axlUSDC,
} from '../../currency/index.js'

export const defaultCurrency = {
  ...(Object.fromEntries(
    Object.keys(evmNatives).map((key) => [
      key,
      Native.onChain(Number(key) as EvmChainId),
    ]),
  ) as Omit<Record<EvmChainId, Native>, typeof EvmChainId.SKALE_EUROPA>),
  [EvmChainId.SKALE_EUROPA]: WETH9[EvmChainId.SKALE_EUROPA],
} as const

export const defaultQuoteCurrency = {
  [EvmChainId.ETHEREUM]: SUSHI[EvmChainId.ETHEREUM],
  [EvmChainId.SEPOLIA]: USDC[EvmChainId.SEPOLIA],
  // [EvmChainId.ROPSTEN]: SUSHI[EvmChainId.ROPSTEN],
  // [EvmChainId.RINKEBY]: SUSHI[EvmChainId.RINKEBY],
  // [EvmChainId.GÖRLI]: SUSHI[EvmChainId.GÖRLI],
  // [EvmChainId.KOVAN]: SUSHI[EvmChainId.KOVAN],
  [EvmChainId.POLYGON]: SUSHI[EvmChainId.POLYGON],
  // [EvmChainId.POLYGON_TESTNET]: SUSHI[EvmChainId.POLYGON_TESTNET],
  [EvmChainId.FANTOM]: axlUSDC[EvmChainId.FANTOM],
  // [EvmChainId.FANTOM_TESTNET]: SUSHI[EvmChainId.FANTOM_TESTNET],
  [EvmChainId.GNOSIS]: GNO[EvmChainId.GNOSIS],
  [EvmChainId.BSC]: BUSD[EvmChainId.BSC],
  [EvmChainId.GENESIS]: USDT[EvmChainId.GENESIS],
  // [EvmChainId.BSC_TESTNET]: SUSHI[EvmChainId.BSC_TESTNET],
  [EvmChainId.ARBITRUM]: ARB[EvmChainId.ARBITRUM],
  [EvmChainId.ARBITRUM_NOVA]: ARB[EvmChainId.ARBITRUM_NOVA],
  // [EvmChainId.ARBITRUM_TESTNET]: 'SUSHI',
  [EvmChainId.AVALANCHE]: USDC[EvmChainId.AVALANCHE],
  // [EvmChainId.AVALANCHE_TESTNET]: 'SUSHI',
  // [EvmChainId.HECO]: USDC[EvmChainId.HECO],
  // [EvmChainId.HECO_TESTNET]: 'SUSHI',
  [EvmChainId.HARMONY]: USDC[EvmChainId.HARMONY],
  // [EvmChainId.HARMONY_TESTNET]: 'SUSHI',
  // [EvmChainId.OKEX]: USDC[EvmChainId.OKEX],
  // [EvmChainId.OKEX_TESTNET]: 'SUSHI',
  [EvmChainId.CELO]: USDC[EvmChainId.CELO],
  // [EvmChainId.PALM]: SUSHI[EvmChainId.PALM],
  [EvmChainId.MOONRIVER]: USDC[EvmChainId.MOONRIVER],
  [EvmChainId.FUSE]: USDC[EvmChainId.FUSE],
  [EvmChainId.TELOS]: USDC[EvmChainId.TELOS],
  [EvmChainId.MOONBEAM]: axlUSDC[EvmChainId.MOONBEAM],
  [EvmChainId.OPTIMISM]: OP[EvmChainId.OPTIMISM],
  [EvmChainId.KAVA]: axlUSDC[EvmChainId.KAVA],
  [EvmChainId.METIS]: USDC[EvmChainId.METIS],
  [EvmChainId.BOBA]: USDC[EvmChainId.BOBA],
  [EvmChainId.BOBA_BNB]: new Token({
    chainId: EvmChainId.BOBA_BNB,
    address: '0x4200000000000000000000000000000000000023',
    decimals: 18,
    symbol: 'BNB',
    name: 'Binance Coin',
  }),
  [EvmChainId.BTTC]: USDC[EvmChainId.BTTC],
  [EvmChainId.THUNDERCORE]: USDC[EvmChainId.THUNDERCORE],
  // [EvmChainId.SEPOLIA]: USDT[EvmChainId.SEPOLIA],
  // [EvmChainId.CONSENSUS_ZKEVM_TESTNET]: WETH9[EvmChainId.CONSENSUS_ZKEVM_TESTNET],
  // [EvmChainId.SCROLL_ALPHA_TESTNET]: WETH9[EvmChainId.SCROLL_ALPHA_TESTNET],
  // [EvmChainId.BASE_TESTNET]: WETH9[EvmChainId.BASE_TESTNET],
  [EvmChainId.POLYGON_ZKEVM]: USDC[EvmChainId.POLYGON_ZKEVM],
  [EvmChainId.HAQQ]: USDC[EvmChainId.HAQQ],
  [EvmChainId.CORE]: USDC[EvmChainId.CORE],
  [EvmChainId.ZKSYNC_ERA]: USDC[EvmChainId.ZKSYNC_ERA],
  [EvmChainId.LINEA]: axlUSDC[EvmChainId.LINEA],
  [EvmChainId.BASE]: USDC[EvmChainId.BASE],
  [EvmChainId.SCROLL]: USDC[EvmChainId.SCROLL],
  [EvmChainId.FILECOIN]: axlUSDC[EvmChainId.FILECOIN],
  [EvmChainId.ZETACHAIN]: WETH9[EvmChainId.ZETACHAIN],
  [EvmChainId.CRONOS]: WETH9[EvmChainId.CRONOS],
  [EvmChainId.BLAST]: USDB[EvmChainId.BLAST],
  [EvmChainId.SKALE_EUROPA]: USDC[EvmChainId.SKALE_EUROPA],
  [EvmChainId.ROOTSTOCK]: USDT0[EvmChainId.ROOTSTOCK],
  [EvmChainId.MANTLE]: WETH9[EvmChainId.MANTLE],
  [EvmChainId.MANTA]: USDC[EvmChainId.MANTA],
  [EvmChainId.MODE]: USDC[EvmChainId.MODE],
  [EvmChainId.TAIKO]: USDC[EvmChainId.TAIKO],
  [EvmChainId.ZKLINK]: USDC[EvmChainId.ZKLINK],
  [EvmChainId.APE]: APE_USD,
  [EvmChainId.SONIC]: WETH9[EvmChainId.SONIC],
  [EvmChainId.HEMI]: USDC[EvmChainId.HEMI],
  [EvmChainId.TATARA]: AUSD[EvmChainId.TATARA],
  [EvmChainId.KATANA]: USDC[EvmChainId.KATANA],
  [EvmChainId.HYPEREVM]: USDT[EvmChainId.HYPEREVM],
} as const

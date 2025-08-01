import { EvmChainId } from '../../chain/evm/index.js'
import { Token } from '../../currency/token.js'
import { METH, STONE, WstETH, rETH } from '../../currency/tokens.js'

export const LSDS = {
  [EvmChainId.ARBITRUM]: [
    new Token({
      chainId: EvmChainId.ARBITRUM,
      address: '0x5979D7b546E38E414F7E9822514be443A4800529',
      decimals: 18,
      symbol: 'wstETH',
      name: 'Wrapped Lido Staked ETH',
    }),
    new Token({
      chainId: EvmChainId.ARBITRUM,
      address: '0x178412e79c25968a32e89b11f63B33F733770c2A',
      decimals: 18,
      symbol: 'frxETH',
      name: 'Frax Ether',
    }),
    new Token({
      chainId: EvmChainId.ARBITRUM,
      address: '0x95aB45875cFFdba1E5f451B950bC2E42c0053f39',
      decimals: 18,
      symbol: 'sfrxETH',
      name: 'Staked Frax Ether',
    }),
    rETH[EvmChainId.ARBITRUM],
    new Token({
      chainId: EvmChainId.ARBITRUM,
      address: '0x1DEBd73E752bEaF79865Fd6446b0c970EaE7732f',
      decimals: 18,
      symbol: 'cbETH',
      name: 'Coinbase cbETH',
    }),
    new Token({
      chainId: EvmChainId.ARBITRUM,
      address: '0x2416092f143378750bb29b79eD961ab195CcEea5',
      decimals: 18,
      symbol: 'ezETH',
      name: 'Renzo Restaked ETH',
    }),
    new Token({
      chainId: EvmChainId.ARBITRUM,
      address: '0x35751007a407ca6FEFfE80b3cB397736D2cf4dbe',
      decimals: 18,
      symbol: 'weETH',
      name: 'Wrapped eETH',
    }),
  ],
  [EvmChainId.ARBITRUM_NOVA]: [],
  [EvmChainId.AVALANCHE]: [],
  [EvmChainId.BASE]: [
    new Token({
      chainId: EvmChainId.BASE,
      address: '0xB6fe221Fe9EeF5aBa221c348bA20A1Bf5e73624c',
      decimals: 18,
      symbol: 'wstETH',
      name: 'Wrapped Lido Staked ETH',
    }),
    rETH[EvmChainId.BASE],
    new Token({
      chainId: EvmChainId.BASE,
      address: '0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22',
      decimals: 18,
      symbol: 'cbETH',
      name: 'Coinbase cbETH',
    }),
    new Token({
      chainId: EvmChainId.BASE,
      address: '0x2416092f143378750bb29b79eD961ab195CcEea5',
      decimals: 18,
      symbol: 'ezETH',
      name: 'Renzo Restaked ETH',
    }),
    new Token({
      chainId: EvmChainId.BASE,
      address: '0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A',
      decimals: 18,
      symbol: 'weETH',
      name: 'Wrapped eETH',
    }),
  ],
  [EvmChainId.BLAST]: [
    new Token({
      chainId: EvmChainId.BLAST,
      address: '0x2416092f143378750bb29b79eD961ab195CcEea5',
      decimals: 18,
      symbol: 'ezETH',
      name: 'Renzo Restaked ETH',
    }),
    new Token({
      chainId: EvmChainId.BLAST,
      address: '0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A',
      decimals: 18,
      symbol: 'weETH',
      name: 'Wrapped eETH',
    }),
  ],
  [EvmChainId.BOBA]: [],
  // [EvmChainId.BOBA_AVAX]: [],
  [EvmChainId.BOBA_BNB]: [],
  [EvmChainId.BSC]: [
    new Token({
      chainId: EvmChainId.BSC,
      address: '0x64048A7eEcF3a2F1BA9e144aAc3D7dB6e58F555e',
      decimals: 18,
      symbol: 'frxETH',
      name: 'Frax Ether',
    }),
    new Token({
      chainId: EvmChainId.BSC,
      address: '0x3Cd55356433C89E50DC51aB07EE0fa0A95623D53',
      decimals: 18,
      symbol: 'sfrxETH',
      name: 'Staked Frax Ether',
    }),
    new Token({
      chainId: EvmChainId.BSC,
      address: '0x2416092f143378750bb29b79eD961ab195CcEea5',
      decimals: 18,
      symbol: 'ezETH',
      name: 'Renzo Restaked ETH',
    }),
    new Token({
      chainId: EvmChainId.BSC,
      address: '0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A',
      decimals: 18,
      symbol: 'weETH',
      name: 'Wrapped eETH',
    }),
  ],
  [EvmChainId.GENESIS]: [],
  [EvmChainId.BTTC]: [],
  [EvmChainId.CELO]: [],
  [EvmChainId.ETHEREUM]: [
    METH[EvmChainId.ETHEREUM],
    new Token({
      chainId: EvmChainId.ETHEREUM,
      address: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
      decimals: 18,
      symbol: 'stETH',
      name: 'Lido Staked ETH',
    }),
    new Token({
      chainId: EvmChainId.ETHEREUM,
      address: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
      decimals: 18,
      symbol: 'wstETH',
      name: 'Wrapped Lido Staked ETH',
    }),
    rETH[EvmChainId.ETHEREUM],
    new Token({
      chainId: EvmChainId.ETHEREUM,
      address: '0x35fA164735182de50811E8e2E824cFb9B6118ac2',
      decimals: 18,
      symbol: 'eETH',
      name: 'ether.fi ETH',
    }),
    new Token({
      chainId: EvmChainId.ETHEREUM,
      address: '0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee',
      decimals: 18,
      symbol: 'weETH',
      name: 'Wrapped eETH',
    }),
    new Token({
      chainId: EvmChainId.ETHEREUM,
      address: '0xBe9895146f7AF43049ca1c1AE358B0541Ea49704',
      decimals: 18,
      symbol: 'cbETH',
      name: 'Coinbase cbETH',
    }),
    new Token({
      chainId: EvmChainId.ETHEREUM,
      address: '0xf951E335afb289353dc249e82926178EaC7DEd78',
      decimals: 18,
      symbol: 'swETH',
      name: 'Swell swETH',
    }),
    new Token({
      chainId: EvmChainId.ETHEREUM,
      address: '0x5E8422345238F34275888049021821E8E08CAa1f',
      decimals: 18,
      symbol: 'frxETH',
      name: 'Frax Ether',
    }),
    new Token({
      chainId: EvmChainId.ETHEREUM,
      address: '0xac3E018457B222d93114458476f3E3416Abbe38F',
      decimals: 18,
      symbol: 'sfrxETH',
      name: 'Staked Frax Ether',
    }),
    new Token({
      chainId: EvmChainId.ETHEREUM,
      address: '0xA35b1B31Ce002FBF2058D22F30f95D405200A15b',
      decimals: 18,
      symbol: 'ETHx',
      name: 'Stader ETHx',
    }),
    new Token({
      chainId: EvmChainId.ETHEREUM,
      address: '0x2416092f143378750bb29b79eD961ab195CcEea5',
      decimals: 18,
      symbol: 'ezETH',
      name: 'Renzo Restaked ETH',
    }),
  ],
  [EvmChainId.FANTOM]: [
    new Token({
      chainId: EvmChainId.FANTOM,
      address: '0x9E73F99EE061C8807F69f9c6CCc44ea3d8c373ee',
      decimals: 18,
      symbol: 'frxETH',
      name: 'Frax Ether',
    }),
    new Token({
      chainId: EvmChainId.FANTOM,
      address: '0xb90CCD563918fF900928dc529aA01046795ccb4A',
      decimals: 18,
      symbol: 'sfrxETH',
      name: 'Staked Frax Ether',
    }),
  ],
  [EvmChainId.FILECOIN]: [],
  [EvmChainId.FUSE]: [],
  [EvmChainId.GNOSIS]: [],
  [EvmChainId.HARMONY]: [],
  [EvmChainId.HAQQ]: [],
  // [EvmChainId.HECO]: [],
  [EvmChainId.KAVA]: [],
  [EvmChainId.LINEA]: [
    new Token({
      chainId: EvmChainId.LINEA,
      address: '0x2416092f143378750bb29b79eD961ab195CcEea5',
      decimals: 18,
      symbol: 'ezETH',
      name: 'Renzo Restaked ETH',
    }),
    new Token({
      chainId: EvmChainId.LINEA,
      address: '0x1Bf74C010E6320bab11e2e5A532b5AC15e0b8aA6',
      decimals: 18,
      symbol: 'weETH',
      name: 'Wrapped eETH',
    }),
  ],
  [EvmChainId.METIS]: [],
  [EvmChainId.MOONBEAM]: [
    new Token({
      chainId: EvmChainId.MOONBEAM,
      address: '0x82bbd1b6f6De2B7bb63D3e1546e6b1553508BE99',
      decimals: 18,
      symbol: 'frxETH',
      name: 'Frax Ether',
    }),
    new Token({
      chainId: EvmChainId.MOONBEAM,
      address: '0xecf91116348aF1cfFe335e9807f0051332BE128D',
      decimals: 18,
      symbol: 'sfrxETH',
      name: 'Staked Frax Ether',
    }),
  ],
  [EvmChainId.MOONRIVER]: [],
  // [EvmChainId.OKEX]: [],
  [EvmChainId.OPTIMISM]: [
    new Token({
      chainId: EvmChainId.OPTIMISM,
      address: '0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb',
      decimals: 18,
      symbol: 'wstETH',
      name: 'Wrapped Lido Staked ETH',
    }),
    new Token({
      chainId: EvmChainId.OPTIMISM,
      address: '0x6806411765Af15Bddd26f8f544A34cC40cb9838B',
      decimals: 18,
      symbol: 'frxETH',
      name: 'Frax Ether',
    }),
    new Token({
      chainId: EvmChainId.OPTIMISM,
      address: '0x484c2D6e3cDd945a8B2DF735e079178C1036578c',
      decimals: 18,
      symbol: 'sfrxETH',
      name: 'Staked Frax Ether',
    }),
    rETH[EvmChainId.OPTIMISM],
    new Token({
      chainId: EvmChainId.OPTIMISM,
      address: '0xadDb6A0412DE1BA0F936DCaeb8Aaa24578dcF3B2',
      decimals: 18,
      symbol: 'cbETH',
      name: 'Coinbase cbETH',
    }),
    new Token({
      chainId: EvmChainId.OPTIMISM,
      address: '0x5A7fACB970D094B6C7FF1df0eA68D99E6e73CBFF',
      decimals: 18,
      symbol: 'weETH',
      name: 'Wrapped eETH',
    }),
  ],
  [EvmChainId.POLYGON]: [
    new Token({
      chainId: EvmChainId.POLYGON,
      address: '0xEe327F889d5947c1dc1934Bb208a1E792F953E96',
      decimals: 18,
      symbol: 'frxETH',
      name: 'Frax Ether',
    }),
    new Token({
      chainId: EvmChainId.POLYGON,
      address: '0x6d1FdBB266fCc09A16a22016369210A15bb95761',
      decimals: 18,
      symbol: 'sfrxETH',
      name: 'Staked Frax Ether',
    }),
    rETH[EvmChainId.POLYGON],
  ],
  [EvmChainId.POLYGON_ZKEVM]: [rETH[EvmChainId.POLYGON_ZKEVM]],
  [EvmChainId.SCROLL]: [
    new Token({
      chainId: EvmChainId.SCROLL,
      address: '0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32',
      decimals: 18,
      symbol: 'wstETH',
      name: 'Wrapped Lido Staked ETH',
    }),
    rETH[EvmChainId.SCROLL],
    new Token({
      chainId: EvmChainId.SCROLL,
      address: '0x01f0a31698C4d065659b9bdC21B3610292a1c506',
      decimals: 18,
      symbol: 'weETH',
      name: 'Wrapped eETH',
    }),
  ],
  [EvmChainId.TELOS]: [],
  [EvmChainId.THUNDERCORE]: [],
  [EvmChainId.CORE]: [],
  [EvmChainId.ZETACHAIN]: [],
  [EvmChainId.CRONOS]: [],
  [EvmChainId.SKALE_EUROPA]: [rETH[EvmChainId.SKALE_EUROPA]],
  [EvmChainId.ROOTSTOCK]: [],
  // [EvmChainId.PALM]: [],
  [EvmChainId.ZKSYNC_ERA]: [],
  [EvmChainId.MANTLE]: [METH[EvmChainId.MANTLE]],
  [EvmChainId.MANTA]: [STONE[EvmChainId.MANTA]],
  [EvmChainId.MODE]: [
    new Token({
      chainId: EvmChainId.MODE,
      address: '0x2416092f143378750bb29b79eD961ab195CcEea5',
      decimals: 18,
      symbol: 'ezETH',
      name: 'Renzo Restaked ETH',
    }),
    new Token({
      chainId: EvmChainId.MODE,
      address: '0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A',
      decimals: 18,
      symbol: 'weETH',
      name: 'Wrapped eETH',
    }),
  ],
  [EvmChainId.TAIKO]: [],
  [EvmChainId.ZKLINK]: [],
  [EvmChainId.APE]: [],
  [EvmChainId.SONIC]: [],
  [EvmChainId.HEMI]: [],
  [EvmChainId.KATANA]: [
    WstETH[EvmChainId.KATANA],
    new Token({
      chainId: EvmChainId.KATANA,
      address: '0x9893989433e7a383Cb313953e4c2365107dc19a7',
      decimals: 18,
      symbol: 'weETH',
      name: 'Wrapped eETH',
    }),
  ],
  [EvmChainId.HYPEREVM]: [],
  // TESTNETS
  // [EvmChainId.POLYGON_TESTNET]: [],
  // [EvmChainId.FANTOM_TESTNET]: [],
  // [EvmChainId.BSC_TESTNET]: [],
  // [EvmChainId.ARBITRUM_TESTNET]: [],
  // [EvmChainId.AVALANCHE_TESTNET]: [],
  [EvmChainId.SEPOLIA]: [],
  // [EvmChainId.GÖRLI]: [],
  // [EvmChainId.CURTIS]: [],
  [EvmChainId.TATARA]: [],
} as const satisfies Record<EvmChainId, Token[]>

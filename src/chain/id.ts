import { EvmChainId } from './evm/id.js'

export const ChainId = {
  ...EvmChainId,
} as const

export type ChainId = (typeof ChainId)[keyof typeof ChainId]

export const isChainId = (chainId: number): chainId is ChainId =>
  Object.values(ChainId).includes(chainId as ChainId)

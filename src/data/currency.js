const { BLACK, WHITE, maxContrast } = require('./maxContrast');

const currency = {
  ALGO: { color: WHITE, foregroundColor: maxContrast(WHITE), name: 'Algorand' },
  ATOM: {
    color: '#2D3147',
    foregroundColor: maxContrast('#2D3147'),
    name: 'Cosmos'
  },
  BAND: {
    color: '#516FFA',
    foregroundColor: maxContrast('#516FFA'),
    name: 'Band Protocol'
  },
  BAT: {
    color: '#FF5000',
    foregroundColor: maxContrast('#FF5000'),
    name: 'Basic Attention Token'
  },
  BAL: {
    color: '#1D282A',
    foregroundColor: maxContrast('#1D282A'),
    name: 'Balancer'
  },
  BCH: {
    color: '#8DC451',
    foregroundColor: maxContrast('#8DC451'),
    name: 'Bitcoin Cash'
  },
  BTC: {
    color: '#FFB119',
    foregroundColor: maxContrast('#FFB119'),
    name: 'Bitcoin'
  },
  BSV: {
    color: '#EAB300',
    foregroundColor: maxContrast('#EAB300'),
    name: 'Bitcoin SV'
  },
  CAD: {
    color: WHITE,
    foregroundColor: maxContrast(WHITE),
    name: 'Canadian Dollar'
  },
  CGLD: {
    color: '#FACC5D',
    foregroundColor: maxContrast('#FACC5D'),
    name: 'Celo'
  },
  COMP: {
    color: '#070A0E',
    foregroundColor: maxContrast('#070A0E'),
    name: 'Compound'
  },
  CVC: {
    color: '#3AB03E',
    foregroundColor: maxContrast('#3AB03E'),
    name: 'Civic'
  },
  DAI: {
    color: '#F8AF1B',
    foregroundColor: maxContrast('#F8AF1B'),
    name: 'Dai'
  },
  DASH: {
    color: '#008CE7',
    foregroundColor: maxContrast('#008CE7'),
    name: 'Dash'
  },
  DNT: {
    color: '#2C398F',
    foregroundColor: maxContrast('#2C398F'),
    name: 'district0x'
  },
  EOS: { color: BLACK, foregroundColor: maxContrast(BLACK), name: 'EOS' },
  ETC: {
    color: '#59D4AF',
    foregroundColor: maxContrast('#59D4AF'),
    name: 'Ethereum Classic'
  },
  ETH: {
    color: '#6F7CBA',
    foregroundColor: maxContrast('#6F7CBA'),
    name: 'Ethereum'
  },
  EUR: { color: WHITE, foregroundColor: maxContrast(WHITE), name: 'Euro' },
  GBP: {
    color: WHITE,
    foregroundColor: maxContrast(WHITE),
    name: 'British Pound'
  },
  JPY: {
    color: WHITE,
    foregroundColor: maxContrast(WHITE),
    name: 'Japanese Yen'
  },
  KNC: {
    color: '#2C8C92',
    foregroundColor: maxContrast('#2C8C92'),
    name: 'Kyber Network'
  },
  LINK: {
    color: '#295AD9',
    foregroundColor: maxContrast('#295AD9'),
    name: 'Chainlink'
  },
  LRC: {
    color: '#2042FF',
    foregroundColor: maxContrast('#2042FF'),
    name: 'Loopring'
  },
  LTC: {
    color: '#B5B5B5',
    foregroundColor: maxContrast('#B5B5B5'),
    name: 'Litecoin'
  },
  MANA: {
    color: '#FF2D55',
    foregroundColor: maxContrast('#FF2D55'),
    name: 'Decentraland'
  },
  MKR: {
    color: '#35AB9B',
    foregroundColor: maxContrast('#35AB9B'),
    name: 'Maker'
  },
  NMR: {
    color: '#23201F',
    foregroundColor: maxContrast('#23201F'),
    name: 'Numeraire'
  },
  OMG: {
    color: '#0F0F0F',
    foregroundColor: maxContrast('#0F0F0F'),
    name: 'OMG Network'
  },
  OXT: {
    color: '#5E44BA',
    foregroundColor: maxContrast('#5E44BA'),
    name: 'Orchid'
  },
  REN: {
    color: '#051E3D',
    foregroundColor: maxContrast('#051E3D'),
    name: 'Ren'
  },
  REP: {
    color: '#553580',
    foregroundColor: maxContrast('#553580'),
    name: 'Augur'
  },
  REPV2: {
    color: '#0E0E22',
    foregroundColor: maxContrast('#0E0E22'),
    name: 'REPv2'
  },
  SAI: {
    color: '#FFC927',
    foregroundColor: maxContrast('#FFC927'),
    name: 'Single Collateral Dai'
  },
  UMA: {
    color: '#F54A4A',
    foregroundColor: maxContrast('#F54A4A'),
    name: 'UMA'
  },
  UNI: {
    color: '#F5007A',
    foregroundColor: maxContrast('#F5007A'),
    name: 'Uniswap'
  },
  USDC: {
    color: '#2774C9',
    foregroundColor: maxContrast('#2774C9'),
    name: 'USD Coin'
  },
  WBTC: {
    color: '#282138',
    foregroundColor: maxContrast('#282138'),
    name: 'Wrapped Bitcoin'
  },
  XLM: {
    color: WHITE,
    foregroundColor: maxContrast(WHITE),
    name: 'Stellar Lumens'
  },
  XRP: {
    color: '#222222',
    foregroundColor: maxContrast('#222222'),
    name: 'XRP'
  },
  XTZ: {
    color: '#2D7DF7',
    foregroundColor: maxContrast('#2D7DF7'),
    name: 'Tezos'
  },
  YFI: {
    color: '#2365D0',
    foregroundColor: maxContrast('#2365D0'),
    name: 'yearn.finance'
  },
  ZEC: {
    color: '#EBB244',
    foregroundColor: maxContrast('#EBB244'),
    name: 'Zcash'
  },
  ZRX: { color: '#302C2C', foregroundColor: maxContrast('#302C2C'), name: '0x' }
};

module.exports = currency;

// KEY: { color: WHITE, foregroundColor: maxContrast(WHITE), name: 'TODO' },

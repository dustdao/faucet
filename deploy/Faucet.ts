import { Faucet } from "../typechain";
import { constants } from 'ethers'

const bokky = {
  "3": ["0x7E0480Ca9fD50EB7A3855Cf53c347A1b4d6A2FF5", "0xF6fF95D53E08c9660dC7820fD5A775484f77183A", "0xC84f8B669Ccb91C86AB2b38060362b9956f2De52", "0x101848D5C5bBca18E6b4431eEdF6B95E9ADF82FA"],
  "4": ["0xaFF4481D10270F50f203E0763e2597776068CBc5", "0x022E292b44B5a146F2e8ee36Ff44D3dd863C915c", "0xc6fDe3FD2Cc2b173aEC24cc3f267cb3Cd78a26B7", "0x1f9061B953bBa0E36BF50F21876132DcF276fC6e"],
  "5": ["0xaFF4481D10270F50f203E0763e2597776068CBc5", "0x022E292b44B5a146F2e8ee36Ff44D3dd863C915c", "0xc6fDe3FD2Cc2b173aEC24cc3f267cb3Cd78a26B7", "0x1f9061B953bBa0E36BF50F21876132DcF276fC6e"],
  "42": ["0xaFF4481D10270F50f203E0763e2597776068CBc5", "0x022E292b44B5a146F2e8ee36Ff44D3dd863C915c", "0xc6fDe3FD2Cc2b173aEC24cc3f267cb3Cd78a26B7","0x1f9061B953bBa0E36BF50F21876132DcF276fC6e"]
}

const fauceteer = {
  "3": "0x8E78C7D0fA09F26858372898f0ECca808DaC7828",
  "4": constants.AddressZero,
  "5": constants.AddressZero,
  "42": "0x916518711a75a98Ac00e8E3386d036F7eA56A484"
}

const compound = {
  "3": [
    "0x443Fd8D5766169416aE42B8E050fE9422f628419", 
    "0x1Fe16De955718CFAb7A44605458AB023838C2793", 
    "0xc2118d4d90b274016cB7a54c03EF52E6c537D957", 
    "0x6FD34013CDD2905d8d27b0aDaD5b97B2345cF2B8", 
    "0x26fF7457496600C63b3E8902C9f871E60eDec4e4", 
    "0x71d82Eb6A5051CfF99582F4CDf2aE9cD402A4882", 
    "0x0D9C8723B343A8368BebE0B5E89273fF8D712e3C", 
    "0x516de3a7A567d81737e3a46ec4FF9cFD1fcb0136", 
    "0xBde8bB00A7eF67007A96945B3a3621177B615C44", 
    "0xE4C6182EA459E63B8F1be7c428381994CcC2D49c"
  ],
  "4": [
    "0xddea378A6dDC8AfeC82C36E9b0078826bf9e68B6", 
    "0x5592EC0cfb4dbc12D3aB100b257153436a1f0FEa", 
    "0xD9BA894E0097f8cC2BBc9D24D308b98e36dc6D02", 
    "0xbF7A7169562078c96f0eC1A8aFD6aE50f12e5A99", 
    "0x577D296678535e4903D59A4C929B718e1D575e0A",
    "0x4DBCdF9B62e891a7cec5A2568C3F4FAF9E8Abe2b", 
    "0x6e894660985207feb7cf89Faf048998c71E8EE89"
  ],
  "5": [
    "0xe4E81Fa6B16327D4B78CFEB83AAdE04bA7075165", 
    "0xdc31Ee1784292379Fbb2964b3B9C4124D8F89C60", 
    "0x70cBa46d2e933030E2f274AE58c951C800548AeF", 
    "0xC04B0d3107736C32e19F1c62b2aF67BE61d63a05", 
    "0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C",
    "0x183Faf58c4461972765f3F90c6272A4ecE66Bd96", 
    "0x8e9192D6f9d903b1BEb3836F52a9f71E05846e42"
  ],
  "42": [
    "0x162c44e53097e7B5aaE939b297ffFD6Bf90D1EE3", 
    "0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa", 
    "0xD1308F63823221518Ec88EB209CBaa1ac182105f", 
    "0x07de306FF27a2B630B1141956844eB1552B956B5", 
    "0x61460874a7196d6a22D1eE4922473664b3E95270",
    "0x482dC9bB08111CB875109B075A40881E48aE02Cd", 
    "0xd3A691C852CDB01E281545A27064741F0B7f6825",
    "0x50DD65531676F718B018De3dc48F92B53D756996",
    "0xb7a4F3E9097C08dA09517b5aB877F7a917224ede"
  ],
}

const sushi = {
  "3": "0x63058b298f1d083beDcC2Dd77Aa4667909aC357B",
  "4": "0x63058b298f1d083beDcC2Dd77Aa4667909aC357B",
  "5": "0x63058b298f1d083beDcC2Dd77Aa4667909aC357B",
  "42": "0x63058b298f1d083beDcC2Dd77Aa4667909aC357B"
}

export default async ({ getNamedAccounts, getChainId, deployments }) => {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  const chainId = await getChainId()

  const { address }: Faucet = await deploy("Faucet", {
    from: deployer,
    args: [bokky[chainId], compound[chainId], fauceteer[chainId], sushi[chainId]],
    log: true,
    deterministicDeployment: false,
    gasLimit: 5198000,
  })

  console.log(`Faucet deployed to ${address}`);
};
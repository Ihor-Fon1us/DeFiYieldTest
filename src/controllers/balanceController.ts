import { NextFunction, Request, Response} from 'express';
import Web3 from 'web3';
import { BlockHeader, Block } from 'web3-eth'

const address = process.env.ADDRESS || '0xA145ac099E3d2e9781C9c848249E2e6b256b030D'

export const getBalance = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
        const provider = new Web3.providers.HttpProvider("https://etherscan.io/address/0xA145ac099E3d2e9781C9c848249E2e6b256b030D");
        const web3 = new Web3(provider);
        const daat = await web3.eth.getAccounts();
        res.json(daat)
        
    } catch (error) {
        console.log(error);
    }
}
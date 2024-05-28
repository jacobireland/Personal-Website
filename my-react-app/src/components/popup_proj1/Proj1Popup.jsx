import './proj1popup.css';
import React from "react";
import { FaTimes, FaGithub } from 'react-icons/fa';

const Proj1Popup = ({ visible, setVisible}) => {

    return (
        <div className="popup_container">
            <div className='header'>
                <FaTimes size={50} className="close" onClick={() => { setVisible(!visible); }}></FaTimes>
            </div>
            <div className='proj_info'>
                <h className='title'>Crypto Currency Application</h>
                <div className='lang_info'>
                    <h className='lang'>Technologies:</h>
                    <h className='info'>Python, P2P Protocol, Google Cloud VM</h>
                </div>
                <div className='proj_details'>
                    <p className='bio'>My team and I developed a simple crypto application built on top of a distributed blockhain. The crypto application allows traders to
                        log in and initiate transactions to other active traders. The distributed blockchain layer utilizes network protocols to communicate with up
                        to 15 nodes, mine blocks based on trader transactions, and append mined blocks to the blockchain.
                    </p>
                    <hr className='line'></hr>
                    <h className='section_header'>Distributed Blockchain</h>
                    <ul className='section_info'>
                        <li>The Blockchain is a linked list of block structures, each structure containing the block number, nonce, transaction information, previous block hash,
                            and current block hash.
                        </li>
                        <li>The Blockchain follows the expected rules of the data structure: each block structure is connected via its previous hash field, and if any part of the block
                            is modified, the hash changes, voiding validity of the entire blockchain.
                        </li>
                        <li>In our implementation, miners are programs that do not have a wallet and do not generate money, they simply receive transactions from traders and mine blocks
                            for the blockchain.
                        </li>
                        <li>Upon receiving a transaction from a trader, verifying its validity, and sucessfully mining a block, the miner broadcasts the newly mined block to all nodes
                            in the network, where validation and synchronization occurs to ensure every miner shares the same Blockchain.
                        </li>
                    </ul>
                    <h className='section_header'>Peer to Peer Protocol</h>
                    <ul className='section_info'>
                        <li>The P2P Protocol connects all of the nodes’ local blockchains together, forming a distributed blockchain.</li>
                        <li>Our protocol utilized a tracker program to maintain a list of peers (trader and miner alike) that updates all active peers whenever a peer joins or
                            leaves the network.
                        </li>
                    </ul>
                    <h className='section_header'>Cryptocurrency Application</h>
                    <ul className='section_info'>
                        <li>The cryptocurrency application is built on top of the distributed blockchain and allows traders to make transactions which are verified and recorded
                            on the distributed blockchain.
                        </li>
                        <li>To simplify the simulation of the market, each trader begins with 100 coins and can send these coins to fellow active traders as they desire.</li>
                        <li>Traders are indentified by their usernames inputted in the command line, and can leave and re-join the network as they wish - their username acts as
                            an identifier for the tracker program to recognize them and remember their transaction history and current wallet amount.
                        </li>
                        <li>Transactions are requested by inputting the destination wallet and an amount. These requests are verified to ensure the trader has enough coins in their wallet,
                            and that the destination is a valid, active trader, before the miners initiate the mining of blocks to be added to the distributed blockchain.
                        </li>
                    </ul>
                    <a className="git1" href="https://github.com/jacobireland/Crypto-Application" target="_blank" rel="noreferrer">
                        <FaGithub size={18} className='gitlogo1'></FaGithub>
                        <h className="github1">Github</h>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Proj1Popup
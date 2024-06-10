import './part1.css'
import icon1 from '../icons/icon1.svg'
import icon2 from '../icons/icon2.svg'
import icon3 from '../icons/icon3.svg'
import icon4 from '../icons/icon4.svg'
import icon5 from '../icons/icon5.svg'

import { Link } from 'react-router-dom'

import img1 from '../img/img1.png'
export default function part1() {
  return (
    <div className='part1'>
      <div className="container">
        <div className="part1-info">
          <div className="part1-info-item">
            <h1>Get a TradingView <br /> plan for free with <br /> OANDA*</h1>
            <p>An OANDA account gives you everything you need to <a href="https://www.oanda.com/us-en/trading/">trade smarter</a> on TradingView.</p>
            <div className="part1-item">
              <div className="part1-icon1">
                <img src={icon1} alt="" />
                <p>Take advantage of supercharged charts and technical analysis tools <br /> with real-time market analysis and data</p>
              </div>
              <div className='part1-icon1'>
                <img src={icon2} alt="" />
                <p>Access multiple platforms anywhere, anytime with the TradingView <br /> app and desktop platform</p>
              </div>
              <div className="part1-icon1">
                <img src={icon3} alt="" />
                <p>Join the largest financial community on the web and network with <br /> fellow traders using the platform’s social network features</p>
              </div>
              <div className="part1-icon1">
                <img src={icon4} alt="" />
                <p>Practice trading strategies as a with TradingView`s Paper Trading <br /> feature</p>
              </div>
              <div className="part1-icon1">
                <img src={icon5} alt="" />
                <p>Stay in touch with the financial markets, including stocks, <br /> cryptocurrencies, forex, indices, and commodities</p>
              </div>
            </div>
            <div className="btn1">
              <button className='button1'><Link to="/trading">Create account</Link></button>
              <button className='button2'><a href='https://www.oanda.com/apply/demo'>Demo account</a></button>
            </div>
          </div>
          <div className="part1-item_info">
            <img src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

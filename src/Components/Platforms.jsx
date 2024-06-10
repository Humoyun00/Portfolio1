import React from 'react'
import './css/Platforms.css'

import compyuter from '../images/backgund-compyuter.webp'
import icons2 from '../icons/icons2/notebook.svg'
import icons3 from '../icons/icons2/icon1.svg'
import icons4 from '../icons/icons2/icon2.svg'
import icons5 from '../images/compyuter2.webp'
import icons6 from '../images/compyuter3.webp'
import icons7 from '../icons/icons2/arrow-right.png'
import icons8 from '../images/compyuter4.webp'
import icons9 from '../images/compyuter5.webp'
import icon10 from '../images/compyuter6.webp'
import icons11 from '../images/compyuter7.webp'
import icons12 from '../images/visa.webp'
import icons13 from '../images/debit.webp'
import icons14 from '../images/wire transter.webp'
import icons15 from '../images/ACH.webp'


import logo from '../img/oanda-logo.370e04d3507d.svg'
import bayroq from '../img/us.svg'
import instagram from '../logos/instagram.383cf72cf836.svg'
import X from '../logos/twitter.8bf8c8ae30bb.svg'
import YouTube from '../logos/youtube.ee50dbcfc260.svg'
import facebook from '../logos/facebook.37ba6b528947.svg'
import linkedin from '../logos/linkedin.38a080ce4248.svg'
import AppStore from '../img/Apple_Store.height-50.format-webp.webp'
import PlayMarket from '../img/Google_Play.height-50.format-webp.webp'
import NFA from '../img/NFA-Temp-logo-white.height-30.format-webp.webp'



function Platforms() {

  function handleButton() {
    const h110 = document.querySelector('.h11');
    const p20 = document.querySelector('.p2');
    const h11000 = document.querySelector('.h1100');
    p20.classList.toggle('p21');
    h110.classList.toggle('h1100');
  }

  // function handlaButton() {
  //   const h11 = document.querySelector(".h11"),
  //     p20 = document.querySelector(".p2"),
  //     h110 = document.querySelector(".h110");
  //   p20.classList.toggle(".h110");
  //   h110.classList.toggle(".h11")
  // }

  return (
    <div className='pinch2'>
      <div className='container2'>
        <div className="pinchs2">
          <div className="pinch2-item">
            <h1>Trade Web. Your simple, streamlined, universal web trading platform.</h1>
            <p>Trade forex from anywhere with our award-winning* web trading platform.</p>
            <p>Our powerful platform combines the following:</p>
            <div className="pinch2-icons">
              <img src={icons2} alt="" /><span>An intuitive interface</span>
            </div>
            <div className="pinch2-icons">
              <img src={icons3} alt="" /><span>A suite of technical analysis tools</span>
            </div>
            <div className="pinch2-icons">
              <img src={icons4} alt="" /><span>A sophisticated charting package and more</span>
            </div>
            <button><a href="#"></a>Create account</button>
          </div>
          <div className="pinch2-item_info">
            <img src={compyuter} alt="" />
          </div>
        </div>
      </div>
      <div className="pinchs2-info">
        <div className="container2">
          <div className="solo">
            <div className="solo-img">
              <img src={icons5} alt="" />
            </div>
            <div className="solo-text">
              <h5>More reasons to use OANDA’s web trading platform</h5>
              <p>While a standalone forex trading platform might offer basic tools, OANDA’s web trading platform gives you a comprehensive suite of advanced tools and functional features.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="pinch2-item_info">
          <div className="pinch2-item_info-img">
            <img src={icons6} alt="" />
          </div>
          <div className="pinch2-item_info-text">
            <h1>Next generation engine</h1>
            <p>Superior trading technology helps you react to fast-moving prices, especially during volatile periods.</p>
            <div className="pinch2-item_info-text2">
              <img src={icons7} alt="" /><span>Take advantage of market volatility with faster trading times</span> <br />
              <img src={icons7} alt="" /><span>View a snapshot of pending orders and current positions with innovative trading tools</span>
            </div>
          </div>
        </div>
      </div>
      <div className="innovative-trader">
        <div className="container">
          <div className="trader-text">
            <div className="trader-news">
              <h1>Innovative trader analytics and tools</h1>
              <span>Access advanced technical analysis and tools.</span>
              <div className="a-span2">
                <div className="a-span">
                  <img src={icons7} alt="" />
                  <span>Advanced technical analysis (this includes our order book depth overlay, position ratios, and a news aggregator with a search function)</span>
                </div>
                <div className="a-span">
                  <img src={icons7} alt="" /><span>Unbiased technical analysis based on the past six months’ stats</span>
                </div>
                <div className="a-span">
                  <img src={icons7} alt="" /><span>Access advanced technical analysis</span>
                </div>
                <div className="a-span">
                  <img src={icons7} alt="" /><span>Innovative trader analytics and tools</span>
                </div>
              </div>
            </div>
            <div className="trader-img">
              <img src={icons8} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='container2'>
        <div className="risk-management">
          <div className="risk-img">
            <img src={icons9} alt="" />
          </div>
          <div className="risk-text">
            <h1>Risk management</h1>
            <p>Manage your trading risks with our full suite of risk management orders. Risk management orders can help you protect your trades when prices move against you, especially when the markets are volatile.</p>
            <div className="managament-a">
              <img src={icons7} alt="" />
              <span>Stop-loss orders and trailing stops**</span>
            </div>
            <div className='managament-a'>
              <img src={icons7} alt="" />
              <span>Tutorials and guides to help you learn how to limit risks when trading the financial markets</span>
            </div>
            <div className="border">
              <p>**The placing of stop-loss orders or other risk management orders intended to limit losses to specific amounts may be ineffective because market conditions may make it impossible to execute such orders.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="MetaTrader">
        <div className="container2">
          <div className="meta">
            <div className="meta1">
              <h1>MetaTrader 4</h1>
              <p>OANDA’s custom-built bridge gives you the benefit of OANDA’s pricing and execution combined with the power of MetaTrader 4’s charting and analysis tools. Additional features can be unlocked with a MetaTrader 4 premium upgrade, including:</p>
              <div className="meta-ahref">
                <img src={icons7} alt="" />
                <span>Access to one-cancels-the-other (OCO)</span>
              </div>
              <div className="meta-ahref">
                <img src={icons7} alt="" />
                <span>Trigger actions</span>
              </div>
              <div className="meta-ahref">
                <img src={icons7} alt="" />
                <span>28 new applications and indicators, and more</span>
              </div>
            </div>
            <div className="meta2">
              <img src={icon10} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="TradingView">
          <div className="tradingView1">
            <img src={icons11} alt="" />
          </div>
          <div className="tradingView2">
            <h1>TradingView</h1>
            <p>Use your OANDA account on TradingView to gain access to many advantages, including:</p>
            <div className="view-ahref">
              <img src={icons7} alt="" />
              <span>All your trading tools in one location</span>
            </div>
            <div className="view-ahref">
              <img src={icons7} alt="" />
              <span>Charts with 100+ pre-built indicators, 12+ chart types, and 50+ drawing tools</span>
            </div>
            <div className="view-ahref">
              <img src={icons7} alt="" />
              <span>A variety of analytics tools, including detailed reports, heatmaps, and more</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bank-karta">
        <div className="container2">
          <p>Are you a Forex web trader with a live trading account for our Forex trading website or apps? It's easy to fund your account using one of <br /> the following payment methods:</p>
          <div className="bank-karta-img">
            <img src={icons12} alt="" />
            <img src={icons13} alt="" />
            <img src={icons14} alt="" />
            <img src={icons15} alt="" />
          </div>
        </div>
      </div>
      <div className="asked">
        <div className="container2">
          <div className="asked-h1-p">
            <h1>Frequently asked questions</h1>
            <p>Intelligent support from real people.</p>
          </div>
          <div className="urovchi" onClick={handleButton}>
            <section className='section1'>
              <h2 className="h10">
                Why use Trade Web?
              </h2>
              <div className="plus">
                <p className="p1"></p>
                <p className="p2"></p>
              </div>
            </section>
            <h2 className="h11">
              With Trade Web you get a user-friendly interface, access to multiple markets, advanced charting tools, risk management features, real-time market data and more
            </h2>
          </div>
          <div className="urovchi" onClick={handleButton}>
            <section className='section1'>
              <h2 className="h10">
                Who is this platform for?
              </h2>
              <div className="plus">
                <p className="p1"></p>
                <p className="p2"></p>
              </div>
            </section>
            <h2 className="h11">
              OANDA Trade Web is designed for traders of varying skill levels and trading styles, from beginners to experienced professionals. It’s a versatile and reliable trading platform for anyone interested in trading financial markets.
            </h2>
          </div>
          <div className="urovchi" onClick={handleButton}>
            <section className='section1'>
              <h2 className="h10">
                Can Trade Web be used anywhere?
              </h2>
              <div className="plus">
                <p className="p1"></p>
                <p className="p2"></p>
              </div>
            </section>
            <h2 className="h11">
              Since it’s a web-based trading platform, OANDA clients can log in anywhere to their accounts and trade from any compatible web browser on desktop computers, laptops, tablets, and smartphones. If you trade FX then consider it your go-to forex trading website.
            </h2>
          </div>
          <div className="urovchi" onClick={handleButton}>
            <section className='section1'>
              <h2 className="h10">
                What instruments can I trade?
              </h2>
              <div className="plus">
                <p className="p1"></p>
                <p className="p2"></p>
              </div>
            </section>
            <h2 className="h11">
              Trade Web is like a self-contained trading website where you can trade Forex & Crypto (through Paxos).
            </h2>
          </div>
          <div className="urovchi" onClick={handleButton}>
            <section className='section1'>
              <h2 className="h10">
                What equipment do you need to trade on Trade Web?
              </h2>
              <div className="plus">
                <p className="p1"></p>
                <p className="p2"></p>
              </div>
            </section>
            <h2 className="h11">
              To trade markets on Trade Web, you only need an internet connection and access to a browser on many devices, from PCs to mobiles and smartphones.
            </h2>
          </div>
          <div className="urovchi" onClick={handleButton}>
            <section className='section1'>
              <h2 className="h10">
                What are the advantages over other platforms?
              </h2>
              <div className="plus">
                <p className="p1"></p>
                <p className="p2"></p>
              </div>
            </section>
            <h2 className="h11">
              A user-friendly interface, access to multiple markets, advanced charting tools, risk management features, real-time market data, and fast execution speeds, all underpinned by strict regulatory compliance, make Trade Web an attractive option, especially for forex web trading.
            </h2>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer1">
          <div className="container">
            <div className="footer-info">
              <div className="footer-img_icon">
                <img src={logo} alt="" />
                <span></span>
                <div className="footer-img2">
                  <a href="#"><img src={bayroq} alt="" /></a>
                  <p>United States</p>
                </div>
              </div>
              <div className="footer-item">
                <div className="footer-img">
                  <a href="https://www.instagram.com/mahmadiyorovhumoyun53/"><img src={instagram} alt="" /></a>
                  <a href="#"><img src={X} alt="" /></a>
                  <a href="https://www.youtube.com/@HumoyunMahmadiyorov610/featured"><img src={YouTube} alt="" /></a>
                  <a href="https://facebook.com/"><img src={facebook} alt="" /></a>
                  <a href="https://www.linkedin.com/"><img src={linkedin} alt="" /></a>
                </div>
                  <div className="img-item">
                    <a href="https://apps.apple.com/us/app/tradingview-track-all-markets/id1205990992"><img src={AppStore} alt="" /></a>
                    <a href="https://play.google.com/store/search?q=tradingview&c=apps&hl=ru&gl=US"><img src={PlayMarket} alt="" /></a>
                  </div>
              </div>
            </div>
            <div className="footer2">
              <div className="footer-box1">
                <h2>Trading</h2>
                <li><a href="https://www.oanda.com/us-en/trading/instruments/">Instruments</a></li>
                <li><a href="https://www.oanda.com/us-en/trading/tools/">Tools</a></li>
                <li><a href="https://www.oanda.com/us-en/trading/account-comparison/">Accounts</a></li>
                <li><a href="https://www.oanda.com/us-en/trading/hours-of-operation/">Hours of operation</a></li>
                <li><a href="https://www.oanda.com/us-en/trading/holiday-trading-hours/">Holiday trading hours</a></li>
                <a href="https://www.nfa.futures.org/"><img src={NFA} alt="" /></a>
              </div>
              <div className="footer-box1">
                <h2>Products</h2>
                <li><a href="https://www.oanda.com/us-en/trading/forex/">Forex</a></li>
                <li><a href="https://www.oanda.com/us-en/trading/cryptocurrencies/">Cryptocurrencies</a></li>
              </div>
              <div className="footer-box1">
                <h2>Platforms</h2>
                <li><a href="https://www.oanda.com/us-en/trading/platforms/oanda-trade-mobile/">OANDA Mobile</a></li>
                <li><a href="https://www.oanda.com/us-en/trading/platforms/oanda-trade-web/">OANDA Web</a></li>
                <li><a href="https://www.oanda.com/us-en/trading/platforms/tradingview/">TradingView</a></li>
                <li><a href="https://www.oanda.com/us-en/trading/platforms/metatrader-4/">MetaTrader 4</a></li>
              </div>
              <div className="footer-box1">
                <h2>Resources</h2>
                <li><a href="#">Help</a></li>
                <li><a href="#">Learn</a></li>
                <li><a href="#">Trade Tap blog</a></li>
                <li><a href="#">Webinars & events</a></li>
              </div>
              <div className="footer-box1">
                <h2>About</h2>
                <li><a href="">OANDA Group</a></li>
                <li><a href="#">Become a partner</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Legal documents</a></li>
                <li><a href="#">Security practices</a></li>
              </div>
              <div className="footer-box1">
                <h2>Get started with the OANDA app</h2>
                <li><a href="#">Download on the App Store</a></li>
                <li><a href="#">Become a partner</a></li>
                <li><a href="#">Get it on Google Play</a></li>
              </div>
            </div>
            <div className="footer3">
              <p>© 1996 - 2024 OANDA Corporation. All rights reserved. "OANDA", "fxTrade" and OANDA's "fx" family of trademarks are owned by OANDA Corporation. All other trademarks appearing on this website are the property of their respective owners.</p> <br />
              <p>OANDA CORPORATION IS A MEMBER OF NFA AND IS SUBJECT TO NFA'S REGULATORY OVERSIGHT AND EXAMINATIONS. HOWEVER, YOU SHOULD BE AWARE THAT NFA DOES NOT HAVE REGULATORY OVERSIGHT AUTHORITY OVER UNDERLYING OR SPOT VIRTUAL CURRENCY PRODUCTS OR TRANSACTIONS OR VIRTUAL CURRENCY EXCHANGES, CUSTODIANS OR MARKETS.</p><br />
              <p>Trading in digital assets, including cryptocurrencies, is especially risky and is only for individuals with a high risk tolerance and the financial ability to sustain losses. OANDA Corporation is not party to any transactions in digital assets and does not custody digital assets on your behalf. All digital asset transactions occur on the Paxos Trust Company exchange. Any positions in digital assets are custodied solely with Paxos and held in an account in your name outside of OANDA Corporation. Digital assets held with Paxos are not protected by SIPC. Paxos is not an NFA member and is not subject to the NFA’s regulatory oversight and examinations.</p> <br />
              <p>Leveraged trading in foreign currency contracts or other off-exchange products on margin carries a high level of risk and may not be suitable for everyone. We advise you to carefully consider whether trading is appropriate for you in light of your personal circumstances. You may lose more than you invest. Information on this website is general in nature. We recommend that you seek independent financial advice and ensure you fully understand the risks involved before trading. Trading through an online platform carries additional risks. Refer to our <a href="https://www.oanda.com/us-en/legal/">legal section.</a></p> <br />
              <p>OANDA Corporation is a registered Futures Commission Merchant and Retail Foreign Exchange Dealer with the <a href="https://www.oanda.com/us-en/legal/"> Commodity Futures Trading Commission</a> and is a member of the <a href="#">National Futures Association.</a>No: 0325821. More Information is available using the <a href="https://www.nfa.futures.org/basicnet/"> NFA Basic resource.</a></p><br />
              <p>OANDA Corporation has its office at 17 State Street, Suite 300, New York, NY 10004-1501</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Platforms

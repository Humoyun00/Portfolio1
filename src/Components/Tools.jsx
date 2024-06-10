import React from 'react'
import './css/Tools.css'

import kursatgich from '../icons/icons2/arrow-right.png'
import rasm1 from '../pinch3-img/1.webp'
import rasm2 from '../pinch3-img/2.webp'
import rasm3 from '../pinch3-img/3.webp'
import rasm4 from '../pinch3-img/4.webp'
import rasm5 from '../pinch3-img/5.webp'
import rasm6 from '../pinch3-img/6.webp'
import rasm7 from '../pinch3-img/7.webp'

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



function Tools() {
  return (
    <>
      <div className='tools'>
        <div className="container2">
          <div className="MT4">
            <div className="MT4-text">
              <h1>Upgrade MT4 with powerful forex indicators</h1>
              <p>The MetaTrader 4 premium upgrade:</p>
              <div className="MT4-href">
                <img src={kursatgich} alt="" />
                <span>Offers 28 additional trading tools and indicators</span>
              </div>
              <div className="MT4-href">
                <img src={kursatgich} alt="" />
                <span>Is free and easy to download</span>
              </div>
              <div className="MT4-href">
                <img src={kursatgich} alt="" />
                <span>Works with OANDA live and demo accounts</span>
              </div>
            </div>
            <div className="MT4-img">
              <img src={rasm1} alt="" />
            </div>
          </div>
          <div className="btn-button2">
            <button className='brn1'><a href="#"></a>Create account</button>
            <button className='brn2'><a href="https://www.fxbluelabs.com/downloads/oanda/Oanda-MT4-Apps.20191017.zip">Download upgrade</a></button>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="Connect">
          <div className="connect-img">
            <img src={rasm2} alt="" />
          </div>
          <div className="connect-text">
            <h1>OANDA Connect app</h1>
            <p>Available through the MT4 premium upgrade, you’ll find quality web content inside your trading platform.</p>
            <div className="connect-href">
              <img src={kursatgich} alt="" />
              <span>Get direct access to content from Dow Jones, market news sentiment and two calendars to stay up to date</span>
            </div>
            <div className="connect-href">
              <img src={kursatgich} alt="" />
              <span>Analyze your trading with the OANDA dashboard</span>
            </div>
            <div className="connect-href">
              <img src={kursatgich} alt="" />
              <span>Access OANDA forex blog content</span>
            </div>
            <div className="connect-href">
              <img src={kursatgich} alt="" />
              <span>Download the OANDA orderbook MT4 plug in</span>
            </div>
          </div>
        </div>
      </div>
      <div className="terminal">
        <div className="container2">
          <div className="terminal-item">
            <div className="terminal-text">
              <h1>Trade terminal</h1>
              <p>Create deal tickets and order templates, group trade management and more:</p>
              <div className="terminal-href">
                <img src={kursatgich} alt="" />
                <span>OCO and conditional orders</span>
              </div>
              <div className='terminal-href'>
                <img src={kursatgich} alt="" />
                <span>Group trade management to set take-profit, stop-loss and trailing stops across all positions simultaneously</span>
              </div>
              <div className='terminal-href'>
                <img src={kursatgich} alt="" />
                <span>Order conditions for automated close rules</span>
              </div>
              <div className='terminal-href'>
                <img src={kursatgich} alt="" />
                <span>Watchlists and FX board screens</span>
              </div>
            </div>
            <div className="terminal-img">
              <img src={rasm3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="mini-terminal">
          <div className="mini-img">
            <img src={rasm4} alt="" />
          </div>
          <div className="mini-text">
            <h3>Mini Terminal</h3>
            <p>The mini terminal is an integrated trade ticket built into the MT4 chart. Manage risk and position size while adding triggering trades from user-defined key levels or trendlines:</p>
            <div className="mini-href">
              <img src={kursatgich} alt="" /><span>The mini terminal is an integrated trade ticket built into the MT4 chart. Manage risk and position size while adding triggering trades from user-defined key levels or trendlines:</span>
            </div>
            <div className='mini-href'>
              <img src={kursatgich} alt="" /><span>Access ladder-style trade entry through the chart trading feature</span>
            </div>
            <div className='mini-href'>
              <img src={kursatgich} alt="" /><span>Calculate appropriate lot size depending on your stop and risk limits</span>
            </div>
            <div className='mini-href'>
              <img src={kursatgich} alt="" /><span>Trigger trades when price crosses user-defined trendlines (hold the 'ctrl' key while placing trendlines)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mini-terminal2">
        <div className="container2">
          <div className="terminal2">
            <div className="terminal2-item1">
              <img src={rasm5} alt="" />
              <div className="terminal2-text">
                <h4>Alarm manager</h4>
                <p>Create a personalized and automated trading companion. Configure the alarm manager to get alerts for account related events like margin usage, trade entries and exits, as well as alerts on pending and released news events. Access 28 new applications and indicators.</p>
              </div>
            </div>
            <div className="terminal2-item1">
              <img src={rasm6} alt="" />
              <div className="terminal2-text">
                <h4>Excel RTD</h4>
                <p>The Excel RTD app lets traders with limited programming knowledge take advantage of basic Excel commands by interfacing in real-time with MT4. With the Excel RTD app, you can monitor real-time account, trade and market data via Excel.</p>
              </div>
            </div>
            <div className="terminal2-item1">
              <img src={rasm7} alt="" />
              <div className="terminal2-text">
                <h4>Correlation matrix</h4>
                <p>See correlations between different markets and define which instruments are shown in the matrix. With the correlation matrix, you can manage risk through identifying correlating pairs, for example.</p>
              </div>
            </div>
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
    </>
  )
}

export default Tools

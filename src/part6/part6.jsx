import './part6.css'
import img1 from '../img/images10.webp'
import icon1 from '../icons/icons2/arrow-right.png'
import icon2 from '../icons/icons2/arrow-right.svg'
import img2 from '../img/images11.webp'
import img3 from '../img/images12.webp'
import img4 from '../img/images13.webp'

export default function part6() {
  return (
    <div className='container'>
      <div className="part6">
            <div className="part-6-item">
                <img src={img1} alt="" />
                <div className="part-6-text">
                    <h2>All-round analytics</h2>
                    <p>The TradingView platform has 100+ fundamental fields and ratios, financial  statements, and valuation analysis, all within easy reach.</p>
                    <div className="part-6-item_info">
                        <img src={icon1} alt="" />
                        <span>Simulate trading on your chart and use historical data to test various  strategies with detailed reports</span>
                    </div>
                    <div className="part-6-item_info">
                        <img src={icon1} alt="" />
                        <span>Research or produce top trading and educational ideas to take your  analytical skills to the next level</span>
                    </div>
                    <div className="part-6-item_info">
                        <img src={icon1} alt="" />
                        <span>Dive into a variety of heatmaps to understand the overall state of an industry or the whole market</span>
                    </div>
                    <div className="part-6-item_info">
                        <img src={icon1} alt="" />
                        <span>Take advantage of in-depth historical data records directly on your charts</span>
                    </div>
                    <div className="part-6-item_info">
                        <img src={icon1} alt="" />
                        <span>Trade globally with data from worldwide markets</span>
                    </div>
                </div>
            </div>
            <div className="part-6-blok">
              <h1>How to access your OANDA account from TradingView <br /> platform</h1>
              <div className="part-6-blok_box">
                <div className="part-6-box">
                  <img src={img2} alt="" />
                  <h2>Open a trading account</h2>
                  <p>It’s easy to create a live account with OANDA.</p>
                  <a id='link' className='link' href="https://www.oanda.com/apply/"><span id="span1">Create account</span> <span id='span2'><img src={icon2} alt="" /></span></a>
                </div>
                <div className="part-6-box">
                  <img src={img3} alt="" />
                  <h2>Select OANDA</h2>
                  <p>Go to the OANDA broker profile on TradingView and click ‘Trade’ or open the chart, then click on the <br /> ‘trading panel’ tab and select OANDA from the list <br /> of brokers.</p>
                  <a id='link' className='link' href="https://www.tradingview.com/broker/OANDA/"><span id="span1">Open OANDA broker profile</span> <span id='span2'><img src={icon2} alt="" /></span></a>
                </div>
                <div className="part-6-box">
                  <img src={img4} alt="" />
                  <h2>Start trading</h2>
                  <p>Enter your account details to authorize access to your OANDA trading account. You can now trade <br /> via TradingView.</p>
                  <a id='link' className='link' href="https://www.tradingview.com/chart/"><span id="span1">Go to charts</span> <span id='span2'><img src={icon2} alt="" /></span></a>
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}

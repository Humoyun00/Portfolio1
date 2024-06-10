import './part3.css'
import icon1 from '../img/images11.webp'
import icon2 from '../img/images12.webp'
import icon3 from '../img/images13.webp'

function part3() {
  return (
    <div className='container'>
      <div className="part3">
        <h1 id='part3-h1'>Trade smarter with TradingView</h1>
        <p id='part3-p'>Thanks to OANDA’s partnership with TradingView, you can find all your tools in one place, access multiple online <a href="#"> trading <br /> platforms,</a>and join the largest financial community on the web.</p>
        <div className="part3-boxs">
            <div className="part3-boxs1">
                <img src={icon1} alt="" />
                <h6>Find all your tools in one place with the TradingView platform</h6>
                <p>Standard and custom indicators are available rightnext to advanced screeners and a live newsfeed meaning you can trade effectively without needing to switch platforms.</p>
            </div>
            <div className="part3-boxs1">
                <img src={icon2} alt="" />
                <h6>Multi-platform experience</h6>
                <p>Take advantage of TradingView’s robust and powerful browser, desktop, and mobile apps with 100% synced layouts, watchlists, and settings.</p>
            </div>
            <div className="part3-boxs1">
                <img src={icon3} alt="" />
                <h6>TradingView community</h6>
                <p>Join the largest financial community on the web, with over 50 million active investors and thousands of trading ideas and custom indicators.</p>
            </div>
        </div>
        <div className="part3-box">
            <p>*Terms apply. Monthly trade volumes to be met. Offer ends 15 May 2024. Limited to one per household.</p>
        </div>
      </div>
    </div>
  )
}

export default part3

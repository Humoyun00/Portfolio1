import './part4.css'
import img1 from '../img/images8.png'
import icon1 from '../icons/icons2/arrow-right.png'
export default function part4() {
  return (
    <div className="part4_0">
        <div className='container'>
        <div className="part4">
        <div className="part-4-img">
              <img src={img1} alt="" />
              <div className="part-4-item">
                <h2>Exceptional charting</h2>
                <p>TradingView gives you access to highly interactive, responsive, and mobile-friendly charts optimized for touch devices.</p>
                <div className="part-4-item_info">
                  <img src={icon1} alt="" />
                  <span>100+ pre-built indicators for popular trading strategies and even more are custom-built in the community</span>
                </div>
                <div className="part-4-item_info">
                  <img src={icon1} alt="" />
                  <span>15+ chart types and 50+ drawing tools reinforced by adaptive visuals and adjustable settings</span>
                </div>
                <div className="part-4-item_info">
                  <img src={icon1} alt="" />
                  <span>Use up to eight synchronized charts in a single layout and apply multiple timeframe analysis</span>
                </div>
                <div className="part-4-item_info">
                  <img src={icon1} alt="" />
                  <span>Bar Replay, which simulates historical price movements so you can analyze historical market data</span>
                </div>
                <div className="part-4-item_info">
                  <img src={icon1} alt="" />
                  <span>Use global command search to complete actions quickly and easily</span>
                </div>
              </div>
            </div>
        </div>
    </div>
    </div>
  )
}

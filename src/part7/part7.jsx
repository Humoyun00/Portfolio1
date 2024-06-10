import './part7.css'
import img1 from '../img/Download_Desktop_App_button_Dark_.height-50.format-webp.webp'
import img2 from '../img/Apple_Store.height-50.format-webp.webp'
import img3 from '../img/Google_Play.height-50.format-webp.webp'




export default function part7() {
  return (
    <div className='part7-0'>
        <div className="container">
          <div className="part-7">
                <div className="part-7-text">
                    <h1>TradingView apps</h1>
                    <p>Do you prefer to trade on desktop or mobile? Choose what works best for you. Desktop apps are accessible on Windows, MacOS, and Linux, with mobile access on iOS and Android.</p>
                </div>
                <div className="part-7-img">
                    <a href="https://www.tradingview.com/desktop/"><img src={img1} alt="" /></a>
                    <a href="https://apps.apple.com/us/app/tradingview-track-all-markets/id1205990992"><img src={img2} alt="" /></a>
                    <a href="https://play.google.com/store/apps/details?id=com.tradingview.tradingviewapp&referrer=utm_source%3Dtradingview%26utm_medium%3Dgplay_footer&pli=1"><img src={img3} alt="" /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

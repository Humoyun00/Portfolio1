import './part5.css'
import icon1 from '../icons/icons2/arrow-right.png'
import img1 from '../img/images9.webp'

export default function part5() {
  return (
    <div className='part5'>
        <div className="container">
            <div className="part5-blok">
                <div className="part-5-text">
                    <h2>Multiple flexible and powerful ways to trade</h2>
                    <p>Trade on charts with drag-and-drop bracket orders or use a responsive order panel when using the TradingView app or desktop solutions.</p>
                    <div className="part-5-item">
                        <img src={icon1} alt="" />
                        <span>Smartly define flexible entry, stop and profit targets, or apply a partial position close</span>
                    </div>
                    <div className="part-5-item">
                        <img src={icon1} alt="" />
                        <span>Never miss a trade with 12 alert conditions on price, indicators, and strategies</span>
                    </div>
                    <div className="part-5-item">
                        <img src={icon1} alt="" />
                        <span>Create unique alerts to suit your needs using Pine Script™</span>
                    </div>
                    <div className="part-5-item">
                        <img src={icon1} alt="" />
                        <span>Take advantage of custom timeframes to help you better identify potential  trades</span>
                    </div>
                    <div className="part-5-item">
                        <img src={icon1} alt="" />
                        <span>Dive deeper into the depth-of-market (DOM) analysis by measuring  supply and demand</span>
                    </div>
                </div>
                <div className="part-5-img">
              <img src={img1} alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

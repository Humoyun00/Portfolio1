import './part2.css'

import icon1 from '../icons/icon6.svg'

import img1 from '../img/images3.webp'
import img2 from '../img/images4.webp'
import img3 from '../img/images5.webp'
import img4 from '../img/images6.webp'
import img5 from '../img/images7.webp'

export default function part2() {
  return (
    <>
        <div className="part2">
            <div className="container">
                <div className="part-2">


                    <h1 id='h1-0'>An award-winning broker</h1>
                    <p id='p-0'>OANDA has been voted TradingView’s Broker of the Year 2023. We also scoopedMost Popular Broker in 2020, 2021 and 2022. Other <br /> awards include the ForexBrokers.com 2023 Annual Awards Best in Class for Research and Ease of Use, Compare Forex Brokers Awards <br /> 2023 Best US Forex Broker, and ADVFN International Financial Awards 2023 Best Low Cost Broker.</p>
                    <div className="part-2-img">
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                    </div>
                    <div className="part-2-paragraph">
                        <img id='img2' src={icon1} alt="" />
                        <p>Voted Most Popular Broker three years in a row (TradingView Awards 2022, 2021, 2020). Named Best in Class for Research and <br /> Ease of Use (ForexBrokers.com 2023 Annual Awards). Voted Best US Forex Broker (Compare Forex Brokers Awards 2023). Voted <br /> Best Low Cost Broker (ADVFN International Financial Awards 2023). Voted Best Forex Broker two years in a row (TradingView <br /> Broker Awards 2021, 2020). Awarded highest client satisfaction for mobile platform/app (Investment Trends 2021 US Leverage <br /> Trading Report, Margin Forex). Awarded highest overall client satisfaction (Investment Trends 2021 US Leverage Trading Report, <br /> Margin Forex). Best Trading Tools winner (Online Personal Wealth Awards 2021).</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}



import React from 'react';
import '../../sass/layout/_footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerContainer">
            <div className="top">
                <button className='top__button'>List your property</button>
            </div>
            <div className="middle">
                <ul className='middle__list'>
                    <li>
                        <a href="/">Mobile version</a>
                    </li>
                    <li>
                        <a href="/">Your account</a>
                    </li>
                    <li>
                        <a href="/">Make changes to your booking online</a>
                    </li>
                    <li>
                        <a href="/">Customer Service help</a>
                    </li>
                    <li>
                        <a href="/">Become an affiliate</a>
                    </li>
                    <li>
                        <a href="/">Booking.com for Business</a>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <ul className="bottom__list">
                    <li className="item">Countries</li>
                    <li className="item">Regions</li>
                    <li className="item">Cities</li>
                    <li className="item">Districts</li>
                    <li className="item">Airports</li>
                    <li className="item">Hotels</li>
                    <li className="item">Places of interest</li>
                </ul>

                <ul className="bottom__list">
                    <li className="item">Homes</li>
                    <li className="item">Apartments</li>
                    <li className="item">Resorts</li>
                    <li className="item">Villas</li>
                    <li className="item">Hostels</li>
                    <li className="item">B&Bs</li>
                    <li className="item">Guest houses</li>
                </ul>

                <ul className="bottom__list">
                    <li className="item">Unique places to stay</li>
                    <li className="item">All destinations</li>
                    <li className="item">Discover</li>
                    <li className="item">Reviews</li>
                    <li className="item">Unpacked: Travel articles</li>
                    <li className="item">Travel Communities</li>
                    <li className="item">Seasonal and holiday deals</li>
                </ul>

                <ul className="bottom__list">
                    <li className="item">Car hire</li>
                    <li className="item">Flight finder</li>
                    <li className="item">Restaurants reservations</li>
                    <li className="item">Booking.com for Travel Agents</li>
                </ul>

                <ul className="bottom__list">
                    <li className="item">CORONAVIRUS (COVID-19) FAQs</li>
                    <li className="item">About Booking.com</li>
                    <li className="item">Customer Service help</li>
                    <li className="item">Partner help</li>
                    <li className="item">Careers</li>
                    <li className="item">Sustainability</li>
                    <li className="item">Press centre</li>
                    <li className="item">Safety resource centre</li>
                    <li className="item">Investor relations</li>
                    <li className="item">Terms & Conditions</li>
                    <li className="item">Partner dispute</li>
                    <li className="item">How we work</li>
                    <li className="item">Privacy & Cookie Statement</li>
                    <li className="item">Corporate contact</li>                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
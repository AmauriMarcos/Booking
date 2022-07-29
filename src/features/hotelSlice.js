import { createSlice, current } from "@reduxjs/toolkit";
import Hotel from './../pages/hotel/Hotel';
//Sydney Sweeney
const initialState = {
  uniqueHotel: {},
  hotels: [
    {
      id: 1,
      name: "Daylesford Art Motel Superior Suites",
      stars: 4.5,
      price: 2.217,
      review: {
        reviewQtd: "344 reviews",
        rating: 8.4,
      },
      gallery: [
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/259340638.jpg?k=284c8e232137ea94f6118f69fba6659969c77d1293c048d7ad101b6a470e7b55&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/259341346.jpg?k=543f3ef208f1f9a082c53e101cfb48cdd3ff94d8ae56e0dc197af2655125c02a&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/165574892.jpg?k=516374a150a7858c2a7eb4cd29e8858096492309e889c441603d0db79de7c3c4&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/259341359.jpg?k=701bcf21cf43d130f2dd7c79b1680c1d5fc9b3725c60b633d8b6da01bd8081bb&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/259341344.jpg?k=74568eecca438b6b5a28ac0dc46ee8337457ee93cf3d0e050e98dfdd14024f0d&o=&hp=1",
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/165574968.jpg?k=618cc1c1134dd684e726f4b832b2f209027b182eb155d719f17f1e9416348cb6&o=&hp=1",
      ],
      evaluation: {
        overall: "Very good",
        installation: {
          impression: "Comfort",
          rating: 9.1,
        },
      },
      info: {
        acommodation: "Superior Suite",
        rooms: "1 extra-large double bed",
      },
      url: "https://hoteltornik.rs/image10311.png",
      freeCancelation: false,
      breakfastIncluded: false,
      preferredPlusProperty: true,
      noPaymentNeeded: false,
    },
    {
      id: 2,
      name: "Jodha Bai Retreat",
      stars: 5,
      price: 2.145,
      review: {
        reviewQtd: "48 reviews",
        rating: 9.9,
      },
      gallery: [
        "https://res.klook.com/klook-hotel/image/upload/fl_lossy.progressive,q_85/w_750/travelapi/41000000/40600000/40595100/40595062/f05b4788_z.jpg",
        "https://jodhabairetreat.com/wp-content/uploads/2021/02/B2-Main-Image-loungebed-scaled.jpg",
        "https://jodhabairetreat.com/wp-content/uploads/2021/02/B2-lounge.jpg",
        "https://cf.bstatic.com/xdata/images/hotel/max1280x900/236818490.jpg?k=e1dcfb950aaf6d32668dd7d3b4edd34f110f3e7a43b51ad2b0579a6ae81df73e&o=&hp=1",
        "https://jodhabairetreat.com/wp-content/uploads/2021/11/IMG_7025-scaled.jpg",
        "https://ak-d.tripcdn.com/images/20061a0000019j33nDF0C_Z_550_412_R5_Q70_D.jpg",
      ],
      evaluation: {
        overall: "Exceptional",
        installation: {
          impression: "Comfort",
          rating: 10,
        },
      },
      info: {
        acommodation: "Bungalow",
        rooms: "1 large double bed",
      },
      url: "https://static.dezeen.com/uploads/2019/06/elwood-house-by-splinter-society-australia-residential-architecture-house_dezeen_2364_col_sq.jpg",
      freeCancelation: true,
      breakfastIncluded: false,
      preferredPlusProperty: true,
      noPaymentNeeded: false,
    },
    {
      id: 3,
      name: "Lancemore Crossley St. Melbourne",
      stars: 5,
      price: 1.859,
      review: {
        reviewQtd: "617 reviews",
        rating: 8.5,
      },
      gallery: [
        "https://www.lancemore.com.au/sites/default/files/Crossley%20Bar%20640x370.jpg",
        "https://www.lancemore.com.au/sites/default/files/Crossley%20640%20x%20370.jpg",
        "https://www.lancemore.com.au/sites/default/files/rooftop-1082x558.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzI7lyMo1k0Lj1T3ODp7hunRYIhDQkHNJulK8iwdE0oRz1P4Wm-aW6JiVCC1b2bD3K-ZA&usqp=CAU",
        "https://edge.media.datahc.com/HI534086949.jpg",
        "https://www.liveport.com.au/wp-content/uploads/2021/05/Lancemore-3.jpg",
      ],
      evaluation: {
        overall: "Very good",
        installation: {
          impression: "Comfort",
          rating: 9.1,
        },
      },
      info: {
        acommodation: "Lancemore King Room",
        rooms: "1 extra-large double bed",
      },
      url: "https://www.estliving.com/wp-content/uploads/2021/04/est-living-lancemore-crossley-street-carr-5.jpg",
      freeCancelation: true,
      breakfastIncluded: false,
      preferredPlusProperty: true,
      noPaymentNeeded: true,
    },
    {
      id: 4,
      name: "Zagame's House",
      stars: 5,
      address: '53 Shirley St, Belongil Beach, 2481 Byron Bay, Australia',
      price: 3.027,
      review: {
        reviewQtd: "1,959 reviews",
        rating: 9.2,
      },
      gallery: [
        "https://img.tagvenue.com/resize/ca/5b/widen-1680-noupsize;6726-zagames-house-venue.jpg",
        "https://d50na7ml3yykq.cloudfront.net/zagameshouse.com.au-3127619824/cms/cache/v2/5cc91208075b1.jpg/1920x1080/fit/80/081d6b80239452748caaa48f420bec1f.jpg",
        "https://www.thehotelconversation.com.au/sites/default/files/styles/article-full/public/i-drct5nc-x5.jpg",
        "https://images.trvl-media.com/hotels/36000000/35220000/35218600/35218543/0365b46e_z.jpg",
        "https://domin8marketing.com.au/wp-content/uploads/2020/06/IMG_8203-1030x700.jpg",
        "https://www.luxurytravelmag.com.au/wp-content/uploads/2019/03/ZagamesHouse-145-1024x682.jpg",
      ],
      evaluation: {
        overall: "Superb",
        installation: {
          impression: "Comfort",
          rating: 9.1,
        },
      },
      info: {
        acommodation: "Superior Suite",
        rooms: "1 extra-large double bed",
      },
      url: "https://vwartclub.com/media/projects/3322/1.jpg",
      freeCancelation: true,
      breakfastIncluded: false,
      preferredPlusProperty: true,
      noPaymentNeeded: true,
    },
    {
      id: 5,
      name: "The Woolstore 1888 by Ovolo",
      stars: 4.5,
      price: 1.136,
      review: {
        reviewQtd: "918 reviews",
        rating: 8.9,
      },
      gallery: [
        "https://coralcayresort.com.au/wp-content/uploads/2022/02/CCM-Exterior_Mackay-4-600x363.jpg",
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/66/00/cb/swimming-pool.jpg?w=1200&h=-1&s=1",
        "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/10/18/1018873_v4.jpeg",
        "https://coralcayresort.com.au/wp-content/uploads/2021/07/CCM-Queen-Superior-Room-Mackay-3-1-600x363.jpg",
        "https://ssl.cdn-redfin.com/photo/45/mbphoto/620/genMid.OC22098620_1_5.jpg",
        "https://cdn2.civitatis.com/panama/bocas-del-toro/galeria/playa-cayo-zapatilla.jpg",
      ],
      evaluation: {
        overall: "Fabulous",
        installation: {
          impression: "Comfort",
          rating: 9.3,
        },
      },
      info: {
        acommodation: "Queen Room - Shoebox",
        rooms: "1 large double bed",
      },
      url: "https://sierrahotel.ph/v2/wp-content/uploads/room-queenroom.jpg",
      freeCancelation: false,
      breakfastIncluded: false,
      preferredPlusProperty: true,
      noPaymentNeeded: false,
    },
  ],
};

const hotelSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
      getHotelById(state, {payload}){
      const id = parseInt(payload);
      const filteredHotel = state.hotels.filter(hotel => hotel.id === id);
      state.uniqueHotel = filteredHotel;
     }
  },
});

export const {getHotelById} = hotelSlice.actions;
export default hotelSlice.reducer;

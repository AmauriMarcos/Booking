import { createSlice } from "@reduxjs/toolkit";
//Sydney Sweeney
const initialState = {
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
      price:  1.859,
      review: {
        reviewQtd: "617 reviews",
        rating: 8.5,
      },
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
      price: 3.027,
      review: {
        reviewQtd: "1,959 reviews",
        rating: 9.2,
      },
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
  reducers: {},
});

export default hotelSlice.reducer;

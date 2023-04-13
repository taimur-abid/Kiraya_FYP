import React, {useRef, useEffect, useState} from 'react';



const products = [
  {
    id: 1,
    product: 'Product1',
    title: 'Full BBQ Grill',
    image: require('./images/bbq.webp'),
    price: 'Rs.300',
    city: 'Lahore',
    description:
      '!!! End of Summer Deal !!! Price has been lowered as we finish out the hottest days of the year. if you were looking for an excuse to enjoy thr fresher weather, this is it. Book Now! Brand new speaker. it has amazing volume, ensuring a full day of working without charging. If thats not enough this rental comes with the ultra charger. Its compact size and upgraded music volume is a plus plus. Feel free to contact me with any questions.Please notes that SPeaker is water resistant not water proof, hence make sure it is placed in a dry place.Rental Includes: Ultra Charger Speaker',
    rentalrules: 'No late Returns',
  },
  {
    id: 2,
    title: 'Small sized Grill',
    product: 'Product2',
    image: require('./images/grillbro.png'),
    price: 'Rs.200',
    city: 'Lahore',
    description:
      '!!! End of Summer Deal !!! Price has been lowered as we finish out the hottest days of the year. if you were looking for an excuse to enjoy thr fresher weather, this is it. Book Now! Brand new speaker. it has amazing volume, ensuring a full day of working without charging. If thats not enough this rental comes with the ultra charger. Its compact size and upgraded music volume is a plus plus. Feel free to contact me with any questions.Please notes that SPeaker is water resistant not water proof, hence make sure it is placed in a dry place.Rental Includes: Ultra Charger Speaker',
    rentalrules: 'No late Returns',
  },
  {
    id: 3,
    title: 'Steming BBQ Pan',
    product: 'Product3',
    image: require('./images/bbqchicken.jpg'),
    price: 'Rs.200',
    city: 'Lahore',
    description:
      '!!! End of Summer Deal !!! Price has been lowered as we finish out the hottest days of the year. if you were looking for an excuse to enjoy thr fresher weather, this is it. Book Now! Brand new speaker. it has amazing volume, ensuring a full day of working without charging. If thats not enough this rental comes with the ultra charger. Its compact size and upgraded music volume is a plus plus. Feel free to contact me with any questions.Please notes that SPeaker is water resistant not water proof, hence make sure it is placed in a dry place.Rental Includes: Ultra Charger Speaker',
    rentalrules: 'No late Returns',
  },
  {
    id: 4,
    title: 'Roller Skates',
    product: 'Product4',
    price: 'Rs.200',
    city: 'Lahore',
    image: require('./images/skates.jpg'),
    description:
      '!!! End of Summer Deal !!! Price has been lowered as we finish out the hottest days of the year. if you were looking for an excuse to enjoy thr fresher weather, this is it. Book Now! Brand new speaker. it has amazing volume, ensuring a full day of working without charging. If thats not enough this rental comes with the ultra charger. Its compact size and upgraded music volume is a plus plus. Feel free to contact me with any questions.Please notes that SPeaker is water resistant not water proof, hence make sure it is placed in a dry place.Rental Includes: Ultra Charger Speaker',
    rentalrules: 'No late Returns',
  },

  {
    id: 5,
    title: 'Leather Shoes',
    product: 'Product5',
    price: 'Rs.200',
    city: 'Lahore',
    image: require('./images/hiking.jpg'),
    description:
      '!!! End of Summer Deal !!! Price has been lowered as we finish out the hottest days of the year. if you were looking for an excuse to enjoy thr fresher weather, this is it. Book Now! Brand new speaker. it has amazing volume, ensuring a full day of working without charging. If thats not enough this rental comes with the ultra charger. Its compact size and upgraded music volume is a plus plus. Feel free to contact me with any questions.Please notes that SPeaker is water resistant not water proof, hence make sure it is placed in a dry place.Rental Includes: Ultra Charger Speaker',
    rentalrules: 'No late Returns',
  },

  {
    id: 6,
    title: 'Audionic Speakers',
    product: 'Product6',
    price: 'Rs.200',
    city: 'Lahore',
    image: require('./images/speaker2.jpg'),
    description:
      '!!! End of Summer Deal !!! Price has been lowered as we finish out the hottest days of the year. if you were looking for an excuse to enjoy thr fresher weather, this is it. Book Now! Brand new speaker. it has amazing volume, ensuring a full day of working without charging. If thats not enough this rental comes with the ultra charger. Its compact size and upgraded music volume is a plus plus. Feel free to contact me with any questions.Please notes that SPeaker is water resistant not water proof, hence make sure it is placed in a dry place.Rental Includes: Ultra Charger Speaker',
    rentalrules: 'No late Returns',
  },

  {
    id: 7,
    title: '12 Person tent',
    product: 'Product7',
    price: 'Rs.200',
    city: 'Lahore',
    image: require('./images/tents.jpg'),
    description:
      '!!! End of Summer Deal !!! Price has been lowered as we finish out the hottest days of the year. if you were looking for an excuse to enjoy thr fresher weather, this is it. Book Now! Brand new speaker. it has amazing volume, ensuring a full day of working without charging. If thats not enough this rental comes with the ultra charger. Its compact size and upgraded music volume is a plus plus. Feel free to contact me with any questions.Please notes that SPeaker is water resistant not water proof, hence make sure it is placed in a dry place.Rental Includes: Ultra Charger Speaker',
    rentalrules: 'No late Returns',
  },

  {
    id: 8,
    title: 'Sking Sticks',
    price: 'Rs.200',
    city: 'Lahore',
    image: require('./images/sticks.jpg'),
    description:
      '!!! End of Summer Deal !!! Price has been lowered as we finish out the hottest days of the year. if you were looking for an excuse to enjoy thr fresher weather, this is it. Book Now! Brand new speaker. it has amazing volume, ensuring a full day of working without charging. If thats not enough this rental comes with the ultra charger. Its compact size and upgraded music volume is a plus plus. Feel free to contact me with any questions.Please notes that SPeaker is water resistant not water proof, hence make sure it is placed in a dry place.Rental Includes: Ultra Charger Speaker',
    rentalrules: 'No late Returns',
  },
];


//export default products;





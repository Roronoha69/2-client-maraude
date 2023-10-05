import React, { useState, useEffect } from 'react';
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/MiniCenteredFooter.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";
import "./create-maraude.scss"

import axios from 'axios';

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;

  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [city, setCity] = useState('');
  const [startPlace, setStartPlace] = useState('');
  const [email, setEmail] = useState('');
  const [startHour, setStartHour] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {

    const formData = {
      nom: nom,
      prenom: prenom,
      organizer: email,
      volunteers: [email],
      city: city,
      startPlace: startPlace,
      startHour: startHour,
      date:date,
      description:description
    };

    e.preventDefault();
    const apiUrl = "http://localhost:5000/maraudes"; // Remplacez par votre URL

    // Effectuer la requête POST
    axios.post('http://localhost:5000/maraudes', {
      
      organizer: email,
      city: city,
      volunteers: [email],
      startPlace: startPlace,
      startHour: startHour,
      date:date,
      description:description,
      money: 0
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    console.log(formData);
    // Effectuez ici les actions nécessaires avec les valeurs du formulaire
    // Par exemple, vous pouvez les envoyer à un serveur ou les afficher dans la console
  };

  
const [maraudes, setMaraudes] = useState()
  
useEffect(() => {
  
  
  fetch('http://localhost:5000/maraudes')
  
    .then(response => response.json())
    .then(data => {
      console.log(data[0].volunteers.length)
      setMaraudes(data)
    })
    .catch(error => {
      console.error('Erreur de requête:', error);
    });
    
}, []);

const photos = 
{   
Arras: "https://www.epsi.fr/wp-content/uploads/2017/03/EPSI-Arras.jpg",
Auxerre : "https://www.epsi.fr/wp-content/uploads/2018/11/yt_tresors_auxerre_copyright-teddy-bear-2.jpg",
Lyon: "https://www.epsi.fr/wp-content/uploads/2017/02/campus-lyon.jpg",
Paris: "https://www.epsi.fr/wp-content/uploads/2017/03/campus_BD.jpg",
Rennes : "https://www.epsi.fr/wp-content/uploads/2019/11/rennes-1.jpg",
Marseille: "https://lp-cms-production.imgix.net/2019-06/GettyImages-160292245_medium.jpg"
}
 
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Delicious & Affordable <HighlightedText>Meals Near You.</HighlightedText></>}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Order Now"
        watchVideoButtonText="Meet The Chefs"
      />

<TabGrid
        heading={
          <>
            Checkout our <HighlightedText>menu.</HighlightedText>
          </>
        }

        
  // tabs = {{
    // Starters: [
    //   {
    //     imageSrc:
    //       "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    //     title: "Veg Mixer",
    //     content: "Tomato Salad & Carrot",
    //     price: "$5.99",
    //     rating: "5.0",
    //     reviews: "87",
    //     url: "#"
    //   },
    //   {
    //     imageSrc:
    //       "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    //     title: "Macaroni",
    //     content: "Cheese Pizza",
    //     price: "$2.99",
    //     rating: "4.8",
    //     reviews: "32",
    //     url: "#"
    //   },
    //   {
    //     imageSrc:
    //       "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    //     title: "Nelli",
    //     content: "Hamburger & Fries",
    //     price: "$7.99",
    //     rating: "4.9",
    //     reviews: "89",
    //     url: "#"
    //   },
    //   {
    //     imageSrc:
    //       "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    //     title: "Jalapeno Poppers",
    //     content: "Crispy Soyabeans",
    //     price: "$8.99",
    //     rating: "4.6",
    //     reviews: "12",
    //     url: "#"
    //   },
    //   {
    //     imageSrc:
    //       "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    //     title: "Cajun Chicken",
    //     content: "Roasted Chicken & Egg",
    //     price: "$7.99",
    //     rating: "4.2",
    //     reviews: "19",
    //     url: "#"
    //   },
    //   {
    //     imageSrc:
    //       "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    //     title: "Chillie Cake",
    //     content: "Deepfried Chicken",
    //     price: "$2.99",
    //     rating: "5.0",
    //     reviews: "61",
    //     url: "#"
    //   },
    //   {
    //     imageSrc:
    //       "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    //     title: "Guacamole Mex",
    //     content: "Mexican Chilli",
    //     price: "$3.99",
    //     rating: "4.2",
    //     reviews: "95",
    //     url: "#"
    //   },
    //   {
    //     imageSrc:
    //       "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
    //     title: "Carnet Nachos",
    //     content: "Chilli Crispy Nachos",
    //     price: "$3.99",
    //     rating: "3.9",
    //     reviews: "26",
    //     url: "#"
    //   }
    // ],
    // maraudes,
    // Main: getRandomCards(),
    // Soup: getRandomCards(),
    // Desserts: getRandomCards()
  // }}
      />
      {/* <Testimonial
        subheading=""
        heading={<>Customers <HighlightedText>Love Us.</HighlightedText></>}
      />
      <DownloadApp
        text={<>People around you are ordering delicious meals using the <HighlightedTextInverse>Treact App.</HighlightedTextInverse></>}
      /> */}
      <Footer />
    </AnimationRevealPage>
  );

}

const getRandomCards = () => {
  const cards = [
    {
      imageSrc:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Chicken Chilled",
      content: "Chicken Main Course",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Samsa Beef",
      content: "Fried Mexican Beef",
      price: "$3.99",
      rating: "4.5",
      reviews: "34",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Carnet Nachos",
      content: "Chilli Crispy Nachos",
      price: "$3.99",
      rating: "3.9",
      reviews: "26",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Guacamole Mex",
      content: "Mexican Chilli",
      price: "$3.99",
      rating: "4.2",
      reviews: "95",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Chillie Cake",
      content: "Deepfried Chicken",
      price: "$2.99",
      rating: "5.0",
      reviews: "61",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Nelli",
      content: "Hamburger & Fries",
      price: "$7.99",
      rating: "4.9",
      reviews: "89",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Jalapeno Poppers",
      content: "Crispy Soyabeans",
      price: "$8.99",
      rating: "4.6",
      reviews: "12",
      url: "#"
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
      title: "Cajun Chicken",
      content: "Roasted Chicken & Egg",
      price: "$7.99",
      rating: "4.2",
      reviews: "19",
      url: "#"
    }
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
}
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

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;

  const [volunteers, setVolunteers] = useState('');
  const [prenom, setPrenom] = useState('');
  const [city, setCity] = useState('');
  const [startPlace, setStartPlace] = useState('');
  const [email, setEmail] = useState('');
  const [startHour, setStartHour] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [money, setMoney] = useState()

  useEffect(() => {
    const id = 1;
    fetch(
    `http://localhost:5000/maraudes/${id}`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setVolunteers(data.volunteers)
        setCity(data.city)
        setStartPlace(data.startPlace)
        setEmail(data.email)
        setStartHour(data.startHour)
        setDate(data.date)
        setDescription(data.description)
        setMoney(data.money)
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
        heading={<><HighlightedText>{city}</HighlightedText></>}
        description={description}
        imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Order Now"
        watchVideoButtonText="Meet The Chefs"
      />
  
      <MainFeature2
        subheading={<Subheading>Maraude le {date}</Subheading>}
        heading={<> <HighlightedText>{city}</HighlightedText></>}
        statistics={[
          {
            key: "Participants",
            value: volunteers.length,
          },
          {
            key: "Déjà collecté",
            value: `${money}€`
          },
          {
            key: startPlace,
            value: "Départ"
          }
        ]}
        primaryButtonText="Rejoindre"
        primaryButtonText2="Faire un don"
        primaryButtonUrl=""
        imageInsideDiv={false}
        imageSrc={photos[city]}
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
        description={description}
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

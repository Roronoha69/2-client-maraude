import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";

import HumanIcon from "../../images/classic/human.png";

import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";

import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */



 

  const [maraudes, setMaraudes] = useState()
  
  useEffect(() => {
    
    
    fetch('http://localhost:3000/maraudes')
    
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
    

    // {
    //   imageSrc: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
    //   title: "Wyatt Residency",
    //   description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
    //   locationText: "Rome, Italy",
    //   pricingText: "USD 39/Day",
    //   rating: "4.8",
    // },
    // {
    //   imageSrc: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
    //   title: "Soho Paradise",
    //   description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
    //   locationText: "Ibiza, Spain",
    //   pricingText: "USD 50/Day",
    //   rating: 4.9,
    // },
    // {
    //   imageSrc: "https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
    //   title: "Hotel Baja",
    //   description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
    //   locationText: "Palo Alto, CA",
    //   pricingText: "USD 19/Day",
    //   rating: "5.0",
    // },
    // {
    //   imageSrc: "https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80",
    //   title: "Hudak Homes",
    //   description: "Lorem ipsum dolor sit amet, consectur dolori adipiscing elit, sed do eiusmod tempor nova incididunt ut labore et dolore magna aliqua.",
    //   locationText: "Arizona, RAK",
    //   pricingText: "USD 99/Day",
    //   rating: 4.5,
    // },
  

  // arras https://www.epsi.fr/wp-content/uploads/2017/03/EPSI-Arras.jpg
  // auxerre https://www.epsi.fr/wp-content/uploads/2018/11/yt_tresors_auxerre_copyright-teddy-bear-2.jpg
// //https://www.epsi.fr/wp-content/uploads/2017/02/campus-lyon.jpg

// https://www.epsi.fr/wp-content/uploads/2017/03/campus_BD.jpg


// https://www.epsi.fr/wp-content/uploads/2017/03/campus_BD.jpg

// https://www.epsi.fr/wp-content/uploads/2019/11/rennes-1.jpg

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Prochaines Maraudes</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>

      
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {maraudes?.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={photos[card.city]} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.city}</Title>
                  <RatingsInfo>
                    <img src={HumanIcon} style={{ width: '1vw' }}/>
                    <Rating>{card.volunteers.length}</Rating>
                  </RatingsInfo>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <LocationIcon />
                    </IconContainer>
                    <Text>{card.startPlace}</Text>
                  </IconWithText>
                  <IconWithText>
                    <IconContainer>
                      <PriceIcon />
                    </IconContainer>
                    <Text>Budget {card.money}€</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Description>{card.description}</Description>
              </TextInfo>
              <PrimaryButton><a href={`maraudes/${index}`}>Contribuer</a> </PrimaryButton>
            </Card>
          ))}
        </CardSlider>


      </Content>
    </Container>
  );
};
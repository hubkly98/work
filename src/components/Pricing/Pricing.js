import React from "react";
import { Button } from "../../globalStyles";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import logo from '../../images/checklist.png';

import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
  Img,
} from "./Pricing.styled";

const Pricing = ({
  img1,
  alt,
  pricingcardplan,
  pricingcardcost,
  pricingcardlength,
  pricingcardfeature,
}) => {
  return (
    
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Lekarze</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  {/* <Img img={img1} alt={alt} /> */}
                  {/* <Img img={logo} alt="s" /> */}
                  <Img src={logo} alt={alt} />
                </PricingCardIcon>
                <PricingCardPlan pricingcardplan>
                  {pricingcardplan}
                </PricingCardPlan>
                <PricingCardCost pricingcardcost>
                  {pricingcardcost}
                </PricingCardCost>
                <PricingCardLength pricingcardlength>
                  {pricingcardlength}
                </PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature pricingcardfeature>
                    {pricingcardfeature}
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Więcej Informacji</Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Gold Rush</PricingCardPlan>
                <PricingCardCost>$299.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1000 New Users</PricingCardFeature>
                  <PricingCardFeature>$50,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Lead Gen Analytics</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Diamond Kings</PricingCardPlan>
                <PricingCardCost>$999.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Unlimited Users</PricingCardFeature>
                  <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    
  );
};

export default Pricing;

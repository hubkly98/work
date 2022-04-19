import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../../../../globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  ImgWrapper,
  Img,
  Description,
} from "./ExampleSection.styled";

const ExampleSection = ({
  primary,
  buttonLabel,
  description,
  headline,
  img,
  alt,
}) => {
  return (
    <>
      <InfoSec>
        <Container>
          <InfoRow>
            <InfoColumn>
              <TextWrapper>
                <Heading> {headline} </Heading>
                {/* **EVERY** TOP TOP LINE TEXT */}
                <Description>{description}</Description>
                <Link to='/doctor'>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default ExampleSection;

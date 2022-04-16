import React from "react";
import { Button } from "../../../globalStyles";
import doctor1 from "../../../images/doctor1.jpg";
import doctor2 from "../../../images/doctor2.jpg";
import doctor3 from "../../../images/doctor3.jpg";

import {
  DoctorSection,
  DoctorWrapper,
  DoctorHeading,
  DoctorContainer,
  DoctorCard,
  DoctorCardInfo,
  DoctorCardIcon,
  DoctorCardPlan,
  DoctorCardDescription,
  DoctorCardSpecializations,
  DoctorCardSpecialization,
  Img,
} from "./Doctor.styled";



const Doctor = ({
  doctorName,
  doctorDescription,
  doctorSpecialization,
  doctorName2,
  doctorDescription2,
  doctorSpecialization2,
  doctorName3,
  doctorDescription3,
  doctorSpecialization3,
  setChoosenDoctor,
}) => {
  return (
    <DoctorSection>
      <DoctorWrapper>
        <DoctorHeading>Lekarze</DoctorHeading>

        <DoctorContainer>
          <DoctorCard onClick={() => setChoosenDoctor(1)} to='/specialists'>
            <DoctorCardInfo>
              <DoctorCardIcon>
                <Img src={doctor1} />
              </DoctorCardIcon>
              <DoctorCardPlan>{doctorName}</DoctorCardPlan>

              <DoctorCardDescription>{doctorDescription}</DoctorCardDescription>
              <DoctorCardSpecializations>
                <DoctorCardSpecialization>
                  {doctorSpecialization}
                </DoctorCardSpecialization>
              </DoctorCardSpecializations>
              <Button primary>Umow sie na wizyte</Button>
            </DoctorCardInfo>
          </DoctorCard>

          <DoctorCard onClick={() => setChoosenDoctor(2)} to='/specialists'>
            <DoctorCardInfo>
              <DoctorCardIcon>
                <Img src={doctor2} alt='...' />
              </DoctorCardIcon>
              <DoctorCardPlan>{doctorName2}</DoctorCardPlan>
              <DoctorCardDescription>
                {doctorDescription2}
              </DoctorCardDescription>
              <DoctorCardSpecializations>
                <DoctorCardSpecialization>
                  {doctorSpecialization2}
                </DoctorCardSpecialization>
              </DoctorCardSpecializations>
              <Button primary>Umow sie na wizyte</Button>
            </DoctorCardInfo>
          </DoctorCard>

          <DoctorCard onClick={() => setChoosenDoctor(3)} to='/specialists'>
            <DoctorCardInfo>
              <DoctorCardIcon>
                <Img src={doctor3}  />
              </DoctorCardIcon>
              <DoctorCardPlan>{doctorName3}</DoctorCardPlan>
              <DoctorCardDescription>
                {doctorDescription3}
              </DoctorCardDescription>
              <DoctorCardSpecializations>
                <DoctorCardSpecialization>
                  {doctorSpecialization3}
                </DoctorCardSpecialization>
              </DoctorCardSpecializations>
              <Button primary>Umow sie na wizyte</Button>
            </DoctorCardInfo>
          </DoctorCard>
        </DoctorContainer>
      </DoctorWrapper>
    </DoctorSection>
  );
};

export default Doctor;

import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  
  {Graduated, text: 'Graduated with a Associate Degree in Network administration and System security'},
  {Certificate, text: 'Certificate: Google System Administration and IT Infrastructure Services '},
  {Certificate, text: 'Certificate: IBM Cybersecurity Compliance Framework & System Administration '},
  {Certificate, text: 'Certificate: Google IT Automation with Python'},
  { number: 4, text: 'Have Clone 4 of the best Companies websites.'},
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;

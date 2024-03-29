import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  
  { number: 1, text: 'Graduated with a Associate Degree in Network administration and System security'},
  { number: 2, text: 'Certificate: Google System Administration and IT Infrastructure Services '},
  { number: 3, text: 'Certificate: IBM Cybersecurity Compliance Framework & System Administration '},
  { number: 4, text: 'Certificate: Google IT Automation with Python'},
  { number: 5, text: 'Have Clone 4 of the best Companies websites.'},
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

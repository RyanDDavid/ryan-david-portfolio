import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi I'm Ryan David<br/>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Information Security Analyst/ Kali Linux /Penetration Testing
            Ethical Hacking /System Administrator / Python /  MySQL
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
import LargePortraitCard from "./LargePortraitCard";
import React from 'react';



export default function PortraitPage
({firstName, subTeam, BioComponent}) {
    let selectedPerson: any;
    subTeam.map((person) => {
      if (person.firstName === firstName) {
        selectedPerson = { ...person };
      }
    });
    return (
      <LargePortraitCard
        person={selectedPerson}
        BioComponent={BioComponent}
      ></LargePortraitCard>
    );
  }
  
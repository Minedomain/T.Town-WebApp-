import React, {useState, useEffect} from 'react';
import { ContainerBG, Container, MainWrapper, MapWrapper, KrakenIcon, GalleonIcon, IconLink,
  PearlDiverIcon, JewelFinderIcon, MysticalLakeIcon, TarotofthePiratesIcon, MagicPiratePotionIcon
} from './WelcomePrequelElements';
import {IMAGES} from '../../assets'
import Navbar from '../../components/Navbar';
import ModalMaintenance from '../../components/ModalMaintenance';
import ModalErrorWallet from '../../components/ModalErrorWallet';
import Loading from '../../components/Loading';
import '../../components/Tooltip/Tooltip.css'
const WelcomePrequel = () => {
  // just a randomizer
  const crypto = require("crypto");
  const randomID = crypto.randomBytes(36).toString('hex');

  const showModalMaintenance = false;
  const showModalErrorWallet = false;
  const [showLoading, setShowLoading ] = useState(false);
  const openLoading = () => {setShowLoading(true)};
  const closeLoading = () => {setShowLoading(false); localStorage.setItem('void-wlcm-loading', randomID)};

  useEffect(() => {
    if (!localStorage.getItem('void-wlcm-loading')) {
      openLoading();
    }
  }, [])

  return (
    <>
    {/* MODALS */}
    { showModalMaintenance === true ? <ModalMaintenance showModalMaintenance={showModalMaintenance}/> :
    <ModalErrorWallet showModalErrorWallet={showModalErrorWallet}/>}

    <Loading showLoading={showLoading} closeLoading = {closeLoading}/>
    
    {/*MAIN SECTION*/}
    <ContainerBG>
      <Navbar/>
      <Container>
        <MainWrapper>
          
          <MapWrapper>
            <IconLink to="tarot-pirates" onClick={ (event) => event.preventDefault()}>
              <TarotofthePiratesIcon  src={IMAGES.tarot_icon} alt="Tarot-Pirates"/>
            </IconLink>
            <IconLink to="mystical-lake" onClick={ (event) => event.preventDefault()}>
              <MysticalLakeIcon src={IMAGES.lake_icon} alt="Mystical-Lake"/>
            </IconLink>
            <IconLink to="galleon-race">
              <GalleonIcon src={IMAGES.galleon_icon} alt="Galleon-Race"/>
            </IconLink>
            <IconLink to="pirate-potion" onClick={ (event) => event.preventDefault()}>
              <MagicPiratePotionIcon src={IMAGES.potion_icon} alt="Magic-Pirate-Potion"/>
            </IconLink>
            <IconLink to="pearl-diver" onClick={ (event) => event.preventDefault()}>
              <PearlDiverIcon src={IMAGES.pearl_icon} alt="Pearl-Diver"/>
            </IconLink>
            <div className="kraken-tooltip">
              <IconLink to="kraken-slayer">
                <KrakenIcon src={IMAGES.kraken_icon} alt="Kraken-Slayer"/>
              </IconLink>
            </div>
            <IconLink to="jewel-finder" onClick={ (event) => event.preventDefault()}>
              <JewelFinderIcon src={IMAGES.jewel_icon} alt="Jewel-Finder"/>
            </IconLink>
          </MapWrapper>

          {/*
          <MapWrapper>
            <IconLink to="galleon-race">
              <GalleonIcon src={IMAGES.galleon_icon} alt="Galleon"/>
            </IconLink>
            <IconLink to="kraken-slayer">
              <KrakenIcon src={IMAGES.kraken_icon} alt="Kraken"/>
            </IconLink>
            <Map src={IMAGES.prequel_map} alt="Map"/>
          </MapWrapper>
          */}
        </MainWrapper>
      </Container>
    </ContainerBG>
    </>
  );
}

export default WelcomePrequel;
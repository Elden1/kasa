import React from "react"
import { housing } from "../../housing.js"
import { useParams } from "react-router-dom";
import './assets/form-housing.scss'

import ErrorPage from "../../components/ErrorPage/error-page.jsx";
import Slide from "../../components/Page-specific-components/Slideshow"
import Location from "../../components/Page-specific-components/Location"
import Tags from "../../components/Page-specific-components/Tags"
import Host from "../../components/Page-specific-components/Host"
import Rating from "../../components/Page-specific-components/Rating"
import Collapsible from "../../components/collapsible"

const  FormHousing = () => {

  let {housingId} = useParams();
  let currentHousingId = {housingId}

  let idChecker = (housing.filter(housing => housing.id === currentHousingId.housingId)) 

  if (idChecker.length === 0) {
    return <ErrorPage />
  }
    else {

return (
<section className="main-page-container">
{/* Component pour la gallerie */}
{housing.filter(housing => housing.id === currentHousingId.housingId).map(x => 
    (
            <Slide
                key={x.description}
                id={x.id}
                src={x.pictures}
                alt={x.description}
            />
    ))}

    <section className="info-container">
        <article className="locationAndTags">
        {/* Composant pour la localisation */}
        {housing.filter(housing => housing.id === currentHousingId.housingId).map(x => 
            (
                    <Location
                        key={x.location}
                        id={x.id}
                        title={x.title}
                        location={x.location}
                    />
            ))}
        {/* Composant pour les tags */}
        {housing.filter(housing => housing.id === currentHousingId.housingId).map(x => 
            (
                    <Tags
                        key={x.tags}
                        id={x.id}
                        tags={x.tags}
                    />
            ))}
        </article>
        <article className="hostAndRating">
        {/* Composant pour l'hôte/hôtesse */}
        {housing.filter(housing => housing.id === currentHousingId.housingId).map(x => 
            (
                    <Host
                        key={x.host.name}
                        id={x.id}
                        host={x.host.name}
                        hostPic={x.host.picture}
                    />
            ))}
        {/* Composant pour rating */}
        {housing.filter(housing => housing.id === currentHousingId.housingId).map(x => 
            (
                    <Rating
                        key={x.rating}
                        id={x.id}
                        rating={x.rating}
                    />
            ))}
            </article>
        </section>
        <section className="collaps-container">
        {/* Composant pour le collabsible descriptif */}
        {housing.filter(housing => housing.id === currentHousingId.housingId).map(x => 
            (
                    <Collapsible
                            key={x.description}
                            isEquipmnt={false}
                            id={x.id} 
                            label={"Description"} 
                            content={x.description}
                    />
            ))}
        {/* Composant pour le collabsible d'équipement */}
        {housing.filter(housing => housing.id === currentHousingId.housingId).map(x => 
            (
                        <Collapsible
                            key={x.equipments}
                            isEquipmnt={true}
                            id={x.id} 
                            label={"Equipements"} 
                            contentEquip={x.equipments}
                        />
            ))}
        </section>
</section>
  );
 } 
} 
export default FormHousing
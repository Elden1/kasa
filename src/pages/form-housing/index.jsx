import React from "react"
import { housing } from "../../housing.js"
import { useParams } from "react-router-dom";
import './assets/form-housing.scss'

import Slide from "../../components/Page-specific-components/Slideshow"
import Location from "../../components/Page-specific-components/Location"
import Tags from "../../components/Page-specific-components/Tags"
import Host from "../../components/Page-specific-components/Host"
import Rating from "../../components/Page-specific-components/Rating"
import Collapsible from "../../components/collapsible"
import EquipCollaps from "../../components/Page-specific-components/EquipmentCollaps"

function FormHousing() {

  let {housingId} = useParams();
  let currentHousingId ={housingId}

  return (
   <section className="main-page-container">
    {/* Component pour la gallerie */}
    {housing.filter(housing => housing.id === currentHousingId.housingId).map(x => 
        (
                <Slide
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
                    id={x.id}
                    title={x.title}
                    location={x.location}
                />
        ))}
    {/* Composant pour les tags */}
    {housing.filter(housing => housing.id === currentHousingId.housingId).map(x => 
        (
                <Tags
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
                    id={x.id}
                    host={x.host.name}
                    hostPic={x.host.picture}
                />
        ))}
    {/* Composant pour rating */}
    {housing.filter(housing => housing.id === currentHousingId.housingId).map(x => 
        (
                <Rating
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
                        id={x.id} 
                        label={"Description"} 
                        content={x.description}
                />
        ))}
    {/* Composant pour le collabsible d'équipement */}
    {housing.filter(housing => housing.id === currentHousingId.housingId).map(x => 
        (
                <EquipCollaps
                    id={x.id} 
                    label={"Equipement"} 
                    content={x.equipments}
                />
        ))}
    </section>
</section>
  );
 }
export default FormHousing
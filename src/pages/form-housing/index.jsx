import React from "react"
import { housing } from "../../housing.js"
import { useParams } from "react-router-dom";

import Slide from "../../components/Page-specific-components/Slideshow"
import Location from "../../components/Page-specific-components/Location"
import Tags from "../../components/Page-specific-components/Tags"
import Host from "../../components/Page-specific-components/Host"
import Collapsible from "../../components/collapsible"

function FormHousing() {
  let {housingId} = useParams();
  let blabla ={housingId}
  return (
   <div>
    <h2>Now showing post {housingId}</h2>
    {/* Component pour la gallerie */}
    {housing.filter(housing => housing.id === blabla.housingId).map(x => 
        (
            <div id="Gallery">
                <Slide
                key={x.id}
                title={x.title}
                />
            </div>
        ))}
    {/* Composant pour la localisation */}
    {housing.filter(housing => housing.id === blabla.housingId).map(x => 
        (
            <div id="Location">
                <Location
                key={x.id}
                title={x.title}
                location={x.location}
                />
            </div>
        ))}
    {/* Composant pour les tags */}
    {housing.filter(housing => housing.id === blabla.housingId).map(x => 
        (
            <div id="Tags">
                <Tags
                key={x.id}
                tags={x.tags}
                location={x.location}
                />
            </div>
        ))}
    {/* Composant pour l'hôte/hôtesse */}
    {housing.filter(housing => housing.id === blabla.housingId).map(x => 
        (
            <div id="Host">
                <Host
                key={x.id}
                host={x.host.name}
                hostPic={x.host.picture}
                />
            </div>
        ))}
    {/* Composant pour le collabsible descriptif */}
    {housing.filter(housing => housing.id === blabla.housingId).map(x => 
        (
            <div id="Host">
                <Collapsible
                    key={x.id} 
                    label={x.description} 
                    content={x.content}
                />
            </div>
        ))}

   </div>
  );
 }
export default FormHousing
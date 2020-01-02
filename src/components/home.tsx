import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
    <React.Fragment>
        <h1>Bachata Science</h1>
        
        <p>Esta página pretende ser un catalogo de los pasos mas comunes de bachata, para aprender como se hacen, enseñarlos y sobretodo, establecer un nombre único para cada uno.</p>
            
        <p>Puede que los nombres no te gusten (acepto sugerencias mejores) o que eches de menos tu paso preferido (en cuyo caso, escríbeme a <b>capellas.carles@gmail.com</b> explicando como se hace y lo añadire).</p>
    
        <p>Verás que utilizo términos inventados para definir los pasos; tal vez te ayude echar un vistazo al <Link to="/glossary?$modena=bachata-science">glosario</Link></p>
    </React.Fragment>
);
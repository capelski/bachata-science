import React from 'react';
import { Link } from 'react-router-dom';

// tslint:disable-next-line:variable-name
export const Home: React.FC = () => (
    <React.Fragment>
        <p>
            Esta página pretende ser un catalogo de los pasos mas comunes de bachata, para recordar
            como se hacen, enseñarlos y sobretodo, establecer un nombre único para cada uno. Puede
            que los nombres no te gusten (acepto sugerencias mejores) o que eches de menos tu paso
            preferido (en cuyo caso, envíame un video del paso a <b>capellas.carles@gmail.com</b> y
            lo añadire).Verás que utilizo términos inventados para definir los pasos; tal vez te
            ayude echar un vistazo al <Link to="/glossary?$modena=bachata-science">glosario</Link>
        </p>

        <p>
            <b>Atención! Con esta página no aprenderás a bailar</b>. Lo mas que vas a lograr es
            convertirte en un bachatero robot. La única forma de aprender es practicar primero los
            pasos en la tranquilidad de una clase y consolidarlos luego en un social.
        </p>
    </React.Fragment>
);

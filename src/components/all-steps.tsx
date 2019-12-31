import React from 'react';
import { Step, StepProps } from './step';

const steps: StepProps[] = [
    {
        name: 'Basico lateral'
    },
    {
        name: 'Basico frontal'
    },
    {
        name: 'Basico en el sitio'
    },
    {
        name: 'Doble tiempo'
    },
    {
        name: 'Cuadrado'
    },
    {
        name: 'Giro en el sitio'
    },
    {
        name: 'Paso y pico'
    },
    {
        name: 'Slide'
    },
    {
        name: 'Vuelta de reloj'
    },
    {
        name: 'Vuelta de barriga'
    },
    {
        name: 'Vuelta de hombro'
    },
    {
        name: 'Vuelta con cambio de mano'
    },
    {
        name: 'Enrosque de cintura'
    },
    {
        name: 'Desnrosque de cintura'
    },
    {
        name: 'Caminar enroscado'
    },
    {
        name: 'Alternar enrosque'
    },
    {
        name: 'Mano al hombro'
    },
    {
        name: 'Salida de mano al hombro'
    },
    {
        name: 'Caminar con mano al hombro'
    },
    {
        name: 'Alternar mano al hombro'
    },
    {
        name: 'Vuelta de brazos cruzados'
    },
    {
        name: 'Bufanda'
    },
    {
        name: 'Lanzar brazos'
    },
    {
        name: 'Vuelta de baldufa'
    },
    {
        name: 'Vuelta de trazo'
    },
    {
        name: 'Peinado follower'
    },
    {
        name: 'Flecha'
    },
    {
        name: 'Vuelta doble sin soltar'
    },
    {
        name: 'Onda en doble tiempo'
    },
    {
        name: 'Onda con sentadilla'
    },
    {
        name: 'Onda frontal'
    },
    {
        name: 'Basico madrid'
    },
    {
        name: 'Boomerang'
    },
    {
        name: 'Abrebotellas'
    },
    {
        name: 'Catapulta'
    },
    {
        name: 'Tornado'
    },
    {
        name: 'Molinillo'
    },
    {
        name: 'Enrosque de cuello'
    },
    {
        name: 'Vuelta con finta'
    }
];

export const AllSteps = () => (
    <div className="all-steps">
        {steps.map((step, index) => <Step key={index} {...step} />)}
    </div>
);
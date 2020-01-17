import { Stage, StageId } from '../types/stages';
import { StepId } from '../types/steps';

export const stages: Stage[] = [
    {
        id: StageId.uno,
        steps: [StepId.basicoFrontal, StepId.basicoLateral, StepId.basicoSitio, StepId.dobleTiempo]
    },
    {
        id: StageId.dos,
        steps: [
            StepId.cuadrado,
            StepId.pasoPico,
            StepId.medioGiro,
            StepId.serpentina,
            StepId.parabrisas,
            StepId.desconexion
        ]
    },
    {
        id: StageId.tres,
        steps: [
            StepId.vueltaReloj,
            StepId.vueltaHombro,
            StepId.vueltaAbdomen,
            StepId.vueltaCambioMano
        ]
    },
    {
        id: StageId.cuatro,
        steps: [
            StepId.enrosqueCintura,
            StepId.desnrosqueCintura,
            StepId.caminarEnroscado,
            StepId.alternarEnrosqueCintura
        ]
    },
    {
        id: StageId.cinco,
        steps: [
            StepId.vueltaArriba,
            StepId.bufanda,
            StepId.lanzarBrazos,
            StepId.vueltaCintura,
            StepId.slide
        ]
    },
    {
        id: StageId.seis,
        steps: [
            StepId.manoHombro,
            StepId.salidaManoHombro,
            StepId.caminarManoHombro,
            StepId.alternarManoHombro
        ]
    },
    {
        id: StageId.siete,
        steps: [
            StepId.ondaDobleTiempo,
            StepId.ondaSentadilla,
            StepId.ondaFrontal,
            StepId.basicoMadrid
        ]
    },
    {
        id: StageId.ocho,
        steps: [StepId.vueltaTrazo, StepId.peinadoFollower, StepId.flecha, StepId.vueltaDoble]
    },
    {
        id: StageId.nueve,
        steps: [StepId.lancero, StepId.titanic, StepId.catapulta, StepId.tornado]
    },
    {
        id: StageId.diez,
        steps: [
            StepId.enrosqueCuello,
            StepId.desnrosqueCuello,
            StepId.vueltaBaldufa,
            StepId.molinillo,
            StepId.vueltaFinta
        ]
    }
];

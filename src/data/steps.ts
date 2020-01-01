import { PositionId, PositionTransition } from './positions';

export enum StepId {
    basicoLateral = 'basico-lateral',
    basicoFrontal = 'basico-frontal',
    basicoEnElSitio = 'basico-en-el-sitio',
    dobleTiempo = 'doble-tiempo',
    cuadrado = 'cuadrado',
    medioGiro = 'medio-giro',
    pasoYPico = 'paso-y-pico',
    slide = 'slide',
    vueltaDeReloj = 'vuelta-de-reloj',
    vueltaDeAbdomen = 'vuelta-de-abdomen',
    vueltaDeHombro = 'vuelta-de-hombro',
    vueltaConCambioDeMano = 'vuelta-con-cambio-de-mano',
    enrosqueDeCintura = 'enrosque-de-cintura',
    desnrosqueDeCintura = 'desnrosque-de-cintura',
    caminarEnroscado = 'caminar-enroscado',
    alternarEnrosque = 'alternar-enrosque',
    manoAlHombro = 'mano-al-hombro',
    salidaDeManoAlHombro = 'salida-de-mano-al-hombro',
    caminarConManoAlHombro = 'caminar-con-mano-al-hombro',
    alternarManoAlHombro = 'alternar-mano-al-hombro',
    vueltaDeBrazosCruzados = 'vuelta-de-brazos-cruzados',
    bufanda = 'bufanda',
    lanzarBrazos = 'lanzar-brazos',
    vueltaDeBaldufa = 'vuelta-de-baldufa',
    vueltaDeTrazo = 'vuelta-de-trazo',
    peinadoFollower = 'peinado-follower',
    flecha = 'flecha',
    vueltaDobleSinSoltar = 'vuelta-doble-sin-soltar',
    ondaEnDobleTiempo = 'onda-en-doble-tiempo',
    ondaConSentadilla = 'onda-con-sentadilla',
    ondaFrontal = 'onda-frontal',
    basicoMadrid = 'basico-madrid',
    lancero = 'lancero',
    titanic = 'titanic',
    catapulta = 'catapulta',
    tornado = 'tornado',
    molinillo = 'molinillo',
    enrosqueDeCuello = 'enrosque-de-cuello',
    vueltaConFinta = 'vuelta-con-finta',
}

export interface Step {
    description?: string;
    id: StepId;
    name: string;
    positions: PositionTransition[];
    ticks: number;
}

export interface StepProps {
    stepId: StepId;
}

export const steps: Step[] = [
    {
        id: StepId.basicoLateral,
        name: 'Basico lateral',
        positions: [
            PositionId.abierta,
            PositionId.ampersand,
            PositionId.cerradaConDosManos,
            PositionId.cerradaConUnaMano,
        ],
        ticks: 8
    },
    {
        id: StepId.basicoFrontal,
        name: 'Basico frontal',
        positions: [
            PositionId.abierta,
            PositionId.ampersand,
            PositionId.cerradaConDosManos,
            PositionId.cerradaConUnaMano,
        ],
        ticks: 8
    },
    {
        id: StepId.basicoEnElSitio,
        name: 'Basico en el sitio',
        positions: [
            PositionId.cerradaConDosManos,
            PositionId.cerradaConUnaMano,
        ],
        ticks: 8
    },
    {
        id: StepId.dobleTiempo,
        name: 'Doble tiempo',
        positions: [
            PositionId.cerradaConDosManos
        ],
        ticks: 8
    },
    {
        id: StepId.cuadrado,
        name: 'Cuadrado',
        positions: [
            PositionId.abierta,
            PositionId.ampersand,
            PositionId.cerradaConDosManos,
            PositionId.cerradaConUnaMano,
        ],
        ticks: 8
    },
    {
        id: StepId.medioGiro,
        name: 'Medio giro',
        positions: [
            PositionId.cerradaConDosManos,
            PositionId.cerradaConUnaMano,
        ],
        ticks: 4
    },
    {
        id: StepId.pasoYPico,
        name: 'Paso y pico',
        positions: [
            PositionId.abierta,
        ],
        ticks: 8
    },
    {
        id: StepId.slide,
        name: 'Slide',
        positions: [
            PositionId.cerradaConDosManos,
            PositionId.cerradaConUnaMano,
        ],
        ticks: 4
    },
    {
        id: StepId.vueltaDeReloj,
        name: 'Vuelta de reloj',
        positions: [
            PositionId.abierta,
            PositionId.cerradaConUnaMano,
        ],
        ticks: 4
    },
    {
        id: StepId.vueltaDeAbdomen,
        name: 'Vuelta de abdomen',
        positions: [
            {
                ending: PositionId.s,
                starting: PositionId.abierta,
            }
        ],
        ticks: 4
    },
    {
        id: StepId.vueltaDeHombro,
        name: 'Vuelta de hombro',
        positions: [
            {
                ending: PositionId.s,
                starting: PositionId.abierta,
            }
        ],
        ticks: 4
    },
    {
        id: StepId.vueltaConCambioDeMano,
        name: 'Vuelta con cambio de mano',
        positions: [
            {ending: PositionId.s, starting: PositionId.abierta},
        ],
        ticks: 4
    },
    {
        id: StepId.enrosqueDeCintura,
        name: 'Enrosque de cintura',
        positions: [
            {ending: PositionId.enrosqueDeCintura, starting: PositionId.abierta},
            {ending: PositionId.enrosqueDeCintura, starting: PositionId.cerradaConUnaMano},
        ],
        ticks: 4
    },
    {
        id: StepId.desnrosqueDeCintura,
        name: 'Desnrosque de cintura',
        positions: [
            {ending: PositionId.abierta, starting: PositionId.enrosqueDeCintura},
        ],
        ticks: 4
    },
    {
        id: StepId.caminarEnroscado,
        name: 'Caminar enroscado',
        positions: [ PositionId.enrosqueDeCintura ],
        ticks: 8
    },
    {
        id: StepId.alternarEnrosque,
        name: 'Alternar enrosque',
        positions: [ PositionId.enrosqueDeCintura ],
        ticks: 4
    },
    {
        id: StepId.manoAlHombro,
        name: 'Mano al hombro',
        positions: [
            {ending: PositionId.manoAlHombro, starting: PositionId.s},
        ],
        ticks: 4
    },
    {
        id: StepId.salidaDeManoAlHombro,
        name: 'Salida de mano al hombro',
        positions: [
            {ending: PositionId.s, starting: PositionId.manoAlHombro},
            {ending: PositionId.brazosCruzados, starting: PositionId.manoAlHombro},
        ],
        ticks: 4
    },
    {
        id: StepId.caminarConManoAlHombro,
        name: 'Caminar con mano al hombro',
        positions: [PositionId.manoAlHombro],
        ticks: 8
    },
    {
        id: StepId.alternarManoAlHombro,
        name: 'Alternar mano al hombro',
        positions: [PositionId.manoAlHombro],
        ticks: 4
    },
    {
        id: StepId.vueltaDeBrazosCruzados,
        name: 'Vuelta de brazos cruzados',
        positions: [
            { ending: PositionId.brazosCruzados, starting: PositionId.s}
        ],
        ticks: 4
    },
    {
        id: StepId.bufanda,
        name: 'Bufanda',
        positions: [
            { ending: PositionId.cerradaConDosManos, starting: PositionId.brazosCruzados}
        ],
        ticks: 4
    },
    {
        id: StepId.lanzarBrazos,
        name: 'Lanzar brazos',
        positions: [
            { ending: PositionId.manosEnCintura, starting: PositionId.brazosCruzados},
            { ending: PositionId.manosEnCintura, starting: PositionId.abierta} 
        ],
        ticks: 4
    },
    {
        id: StepId.vueltaDeBaldufa,
        name: 'Vuelta de baldufa',
        positions: [
            { ending: PositionId.manoALaEspalda, starting: PositionId.abierta},
        ],
        ticks: 4
    },
    {
        id: StepId.vueltaDeTrazo,
        name: 'Vuelta de trazo',
        positions: [
            { ending: PositionId.iman, starting: PositionId.abierta},
        ],
        ticks: 4
    },
    {
        id: StepId.peinadoFollower,
        name: 'Peinado follower',
        positions: [
            { ending: PositionId.arrastre, starting: PositionId.iman},
        ],
        ticks: 4
    },
    {
        id: StepId.flecha,
        name: 'Flecha',
        positions: [
            { ending: PositionId.ampersand, starting: PositionId.abierta},
        ],
        ticks: 4
    },
    {
        id: StepId.vueltaDobleSinSoltar,
        name: 'Vuelta doble sin soltar',
        positions: [
            { ending: PositionId.enrosqueDeCintura, starting: PositionId.ampersand},
        ],
        ticks: 4
    },
    {
        id: StepId.ondaEnDobleTiempo,
        name: 'Onda en doble tiempo',
        positions: [
            PositionId.enrosqueDeCintura,
            PositionId.manoAlHombro
        ],
        ticks: 4
    },
    {
        id: StepId.ondaConSentadilla,
        name: 'Onda con sentadilla',
        positions: [
            PositionId.enrosqueDeCintura,
            PositionId.manoAlHombro
        ],
        ticks: 8
    },
    {
        id: StepId.ondaFrontal,
        name: 'Onda frontal',
        positions: [ PositionId.cerradaConDosManos ],
        ticks: 4
    },
    {
        id: StepId.basicoMadrid,
        name: 'Basico madrid',
        positions: [ PositionId.abierta ],
        ticks: 8
    },
    {
        id: StepId.lancero,
        name: 'Lancero',
        positions: [
            { ending: PositionId.lancero, starting: PositionId.cerradaConUnaMano }
        ],
        ticks: 8
    },
    {
        id: StepId.titanic,
        name: 'Titanic',
        positions: [
            { ending: PositionId.titanic, starting: PositionId.cerradaConUnaMano },
            { ending: PositionId.titanic, starting: PositionId.cerradaConDosManos }
        ],
        ticks: 4
    },
    {
        id: StepId.catapulta,
        name: 'Catapulta',
        positions: [
            { ending: PositionId.cerradaConUnaMano, starting: PositionId.brazosCruzados }
        ],
        ticks: 4
    },
    {
        id: StepId.tornado,
        name: 'Tornado',
        positions: [
            { ending: PositionId.s, starting: PositionId.brazosCruzados }
        ],
        ticks: 4
    },
    {
        id: StepId.molinillo,
        name: 'Molinillo',
        positions: [
            { ending: PositionId.cerradaConUnaMano, starting: PositionId.abierta }
        ],
        ticks: 8
    },
    {
        id: StepId.enrosqueDeCuello,
        name: 'Enrosque de cuello',
        positions: [
            { ending: PositionId.enrosqueDeCuello, starting: PositionId.avance }
        ],
        ticks: 4
    },
    {
        id: StepId.vueltaConFinta,
        name: 'Vuelta con finta',
        positions: [
            { ending: PositionId.cerradaConUnaMano, starting: PositionId.avance }
        ],
        ticks: 4
    }
];

export const getStep = (id: StepId) => steps.find(s => s.id === id);
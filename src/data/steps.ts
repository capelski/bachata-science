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
    boomerang = 'boomerang',
    abrebotellas = 'abrebotellas',
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
    // TODO Make mandatory for all steps
    positions?: PositionTransition[];
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
        ticks: 4
    },
    {
        id: StepId.enrosqueDeCintura,
        name: 'Enrosque de cintura',
        positions: [
            PositionId.abierta,
            PositionId.cerradaConUnaMano,
        ],
        ticks: 4
    },
    {
        id: StepId.desnrosqueDeCintura,
        name: 'Desnrosque de cintura',
        ticks: 4
    },
    {
        id: StepId.caminarEnroscado,
        name: 'Caminar enroscado',
        ticks: 8
    },
    {
        id: StepId.alternarEnrosque,
        name: 'Alternar enrosque',
        ticks: 4
    },
    {
        id: StepId.manoAlHombro,
        name: 'Mano al hombro',
        ticks: 4
    },
    {
        id: StepId.salidaDeManoAlHombro,
        name: 'Salida de mano al hombro',
        ticks: 4
    },
    {
        id: StepId.caminarConManoAlHombro,
        name: 'Caminar con mano al hombro',
        ticks: 8
    },
    {
        id: StepId.alternarManoAlHombro,
        name: 'Alternar mano al hombro',
        ticks: 4
    },
    {
        id: StepId.vueltaDeBrazosCruzados,
        name: 'Vuelta de brazos cruzados',
        ticks: 4
    },
    {
        id: StepId.bufanda,
        name: 'Bufanda',
        ticks: 4
    },
    {
        id: StepId.lanzarBrazos,
        name: 'Lanzar brazos',
        ticks: 4
    },
    {
        id: StepId.vueltaDeBaldufa,
        name: 'Vuelta de baldufa',
        ticks: 4
    },
    {
        id: StepId.vueltaDeTrazo,
        name: 'Vuelta de trazo',
        ticks: 4
    },
    {
        id: StepId.peinadoFollower,
        name: 'Peinado follower',
        ticks: 4
    },
    {
        id: StepId.flecha,
        name: 'Flecha',
        ticks: 4
    },
    {
        id: StepId.vueltaDobleSinSoltar,
        name: 'Vuelta doble sin soltar',
        ticks: 4
    },
    {
        id: StepId.ondaEnDobleTiempo,
        name: 'Onda en doble tiempo',
        ticks: 4
    },
    {
        id: StepId.ondaConSentadilla,
        name: 'Onda con sentadilla',
        ticks: 8
    },
    {
        id: StepId.ondaFrontal,
        name: 'Onda frontal',
        ticks: 4
    },
    {
        id: StepId.basicoMadrid,
        name: 'Basico madrid',
        ticks: 8
    },
    {
        id: StepId.boomerang,
        name: 'Boomerang',
        ticks: 4
    },
    {
        id: StepId.abrebotellas,
        name: 'Abrebotellas',
        ticks: 4
    },
    {
        id: StepId.catapulta,
        name: 'Catapulta',
        ticks: 4
    },
    {
        id: StepId.tornado,
        name: 'Tornado',
        ticks: 4
    },
    {
        id: StepId.molinillo,
        name: 'Molinillo',
        ticks: 8
    },
    {
        id: StepId.enrosqueDeCuello,
        name: 'Enrosque de cuello',
        ticks: 4
    },
    {
        id: StepId.vueltaConFinta,
        name: 'Vuelta con finta',
        ticks: 4
    }
];

export const getStep = (id: StepId) => steps.find(s => s.id === id);
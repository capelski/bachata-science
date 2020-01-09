import { PositionId, PositionTransition } from './positions';

export enum StepId {
    alternarEnrosqueCintura = 'alternar-enrosque-cintura',
    alternarManoHombro = 'alternar-mano-hombro',
    basicoFrontal = 'basico-frontal',
    basicoLateral = 'basico-lateral',
    basicoMadrid = 'basico-madrid',
    basicoSitio = 'basico-sitio',
    bufanda = 'bufanda',
    caminarEnroscado = 'caminar-enroscado',
    caminarManoHombro = 'caminar-mano-hombro',
    catapulta = 'catapulta',
    cuadrado = 'cuadrado',
    desconexion = 'desconexion',
    desnrosqueCintura = 'desnrosque-cintura',
    desnrosqueCuello = 'desnrosque-cuello',
    dobleTiempo = 'doble-tiempo',
    enrosqueCintura = 'enrosque-cintura',
    enrosqueCuello = 'enrosque-cuello',
    flecha = 'flecha',
    lancero = 'lancero',
    lanzarBrazos = 'lanzar-brazos',
    manoHombro = 'mano-hombro',
    medioGiro = 'medio-giro',
    molinillo = 'molinillo',
    ondaDobleTiempo = 'onda-doble-tiempo',
    ondaFrontal = 'onda-frontal',
    ondaSentadilla = 'onda-sentadilla',
    parabrisas = 'parabrisas',
    pasoPico = 'paso-pico',
    peinadoFollower = 'peinado-follower',
    salidaManoHombro = 'salida-mano-hombro',
    serpentina = 'serpentina',
    slide = 'slide',
    titanic = 'titanic',
    tornado = 'tornado',
    vueltaAbdomen = 'vuelta-abdomen',
    vueltaBaldufa = 'vuelta-baldufa',
    vueltaBrazosCruzados = 'vuelta-brazos-cruzados',
    vueltaCambioMano = 'vuelta-cambio-mano',
    vueltaDoble = 'vuelta-doble',
    vueltaFinta = 'vuelta-finta',
    vueltaHombro = 'vuelta-hombro',
    vueltaMuelle = 'vuelta-muelle',
    vueltaReloj = 'vuelta-reloj',
    vueltaTrazo = 'vuelta-trazo'
}

export interface Step {
    dependencies?: StepId[];
    description?: string;
    id: StepId;
    name: string;
    positions: PositionTransition[];
    ticks: number;
    videoFile?: string;
}

export interface StepProps {
    stepId: StepId;
}

export const steps: Step[] = [
    {
        id: StepId.alternarEnrosqueCintura,
        name: 'Alternar enrosque de cintura',
        positions: [PositionId.enrosqueCintura],
        ticks: 4,
        videoFile: 'alternar-enrosque-cintura'
    },
    {
        id: StepId.alternarManoHombro,
        name: 'Alternar mano al hombro',
        positions: [PositionId.manoHombro],
        ticks: 4,
        videoFile: 'alternar-mano-hombro'
    },
    {
        id: StepId.basicoFrontal,
        name: 'Basico frontal',
        positions: [
            PositionId.abierta,
            PositionId.ampersand,
            PositionId.cerradaDosManos,
            PositionId.cerradaUnaMano
        ],
        ticks: 8,
        videoFile: 'basico-frontal'
    },
    {
        description:
            'Tambien se puede cruzar en vez de desplazar la pierna, pasando la pierna por delante o por detras en los tiempos 2 y 6',
        id: StepId.basicoLateral,
        name: 'Basico lateral',
        positions: [
            PositionId.abierta,
            PositionId.ampersand,
            PositionId.cerradaDosManos,
            PositionId.cerradaUnaMano
        ],
        ticks: 8,
        videoFile: 'basico-lateral'
    },
    {
        id: StepId.basicoMadrid,
        name: 'Basico madrid',
        positions: [PositionId.abierta],
        ticks: 8,
        videoFile: 'basico-madrid'
    },
    {
        id: StepId.basicoSitio,
        name: 'Basico en el sitio',
        positions: [PositionId.cerradaDosManos, PositionId.cerradaUnaMano],
        ticks: 8,
        videoFile: 'basico-sitio'
    },
    {
        id: StepId.bufanda,
        name: 'Bufanda',
        positions: [{ ending: PositionId.cerradaDosManos, starting: PositionId.brazosCruzados }],
        ticks: 4
    },
    {
        id: StepId.caminarEnroscado,
        name: 'Caminar enroscado',
        positions: [PositionId.enrosqueCintura],
        ticks: 8
    },
    {
        id: StepId.caminarManoHombro,
        name: 'Caminar con mano al hombro',
        positions: [PositionId.manoHombro],
        ticks: 8,
        videoFile: 'caminar-mano-hombro'
    },
    {
        id: StepId.catapulta,
        name: 'Catapulta',
        positions: [{ ending: PositionId.cerradaUnaMano, starting: PositionId.brazosCruzados }],
        ticks: 4,
        videoFile: 'catapulta'
    },
    {
        dependencies: [StepId.basicoFrontal, StepId.basicoLateral],
        description: 'Medio basico lateral más medio basico frontal',
        id: StepId.cuadrado,
        name: 'Cuadrado',
        positions: [
            PositionId.ampersand,
            PositionId.abierta,
            PositionId.cerradaDosManos,
            PositionId.cerradaUnaMano
        ],
        ticks: 8,
        videoFile: 'cuadrado'
    },
    {
        description:
            'Transición de posicion cerrada a abierta en que el leader se aleja del follower desplazando sus brazos por debajo de los del follower, imitando un movimiento de caricia. También se puede hacer con una onda de pecho',
        id: StepId.desconexion,
        name: 'Desconexión',
        positions: [
            { ending: PositionId.abierta, starting: PositionId.cerradaDosManos },
            { ending: PositionId.abierta, starting: PositionId.cerradaUnaMano }
        ],
        ticks: 4
    },
    {
        id: StepId.desnrosqueCintura,
        name: 'Desnrosque de cintura',
        positions: [{ ending: PositionId.abierta, starting: PositionId.enrosqueCintura }],
        ticks: 4,
        videoFile: 'enrosque-cintura'
    },
    {
        id: StepId.desnrosqueCuello,
        name: 'Desnrosque de cuello',
        positions: [{ ending: PositionId.abierta, starting: PositionId.enrosqueCuello }],
        ticks: 4,
        videoFile: 'enrosque-cuello'
    },
    {
        id: StepId.dobleTiempo,
        name: 'Doble tiempo',
        positions: [PositionId.cerradaDosManos],
        ticks: 8
    },
    {
        id: StepId.enrosqueCintura,
        name: 'Enrosque de cintura',
        positions: [
            { ending: PositionId.enrosqueCintura, starting: PositionId.abierta },
            { ending: PositionId.enrosqueCintura, starting: PositionId.cerradaUnaMano }
        ],
        ticks: 4,
        videoFile: 'enrosque-cintura'
    },
    {
        id: StepId.enrosqueCuello,
        name: 'Enrosque de cuello',
        positions: [{ ending: PositionId.enrosqueCuello, starting: PositionId.avance }],
        ticks: 4,
        videoFile: 'enrosque-cuello'
    },
    {
        id: StepId.flecha,
        name: 'Flecha',
        positions: [{ ending: PositionId.ampersand, starting: PositionId.abierta }],
        ticks: 4,
        videoFile: 'flecha'
    },
    {
        id: StepId.lancero,
        name: 'Lancero',
        positions: [{ ending: PositionId.lancero, starting: PositionId.cerradaUnaMano }],
        ticks: 8,
        videoFile: 'lancero'
    },
    {
        id: StepId.lanzarBrazos,
        name: 'Lanzar brazos',
        positions: [
            { ending: PositionId.cerradaDosManos, starting: PositionId.brazosCruzados },
            { ending: PositionId.cerradaDosManos, starting: PositionId.abierta },
            { ending: PositionId.manosCintura, starting: PositionId.brazosCruzados },
            { ending: PositionId.manosCintura, starting: PositionId.abierta }
        ],
        ticks: 4,
        videoFile: 'lanzar-brazos'
    },
    {
        id: StepId.manoHombro,
        name: 'Mano al hombro',
        positions: [{ ending: PositionId.manoHombro, starting: PositionId.s }],
        ticks: 4,
        videoFile: 'mano-hombro'
    },
    {
        id: StepId.medioGiro,
        name: 'Medio giro',
        positions: [PositionId.cerradaDosManos, PositionId.cerradaUnaMano],
        videoFile: 'medio-giro',
        ticks: 4
    },
    {
        id: StepId.molinillo,
        name: 'Molinillo',
        positions: [{ ending: PositionId.cerradaUnaMano, starting: PositionId.abierta }],
        ticks: 8,
        videoFile: 'molinillo'
    },
    {
        id: StepId.ondaDobleTiempo,
        name: 'Onda en doble tiempo',
        positions: [PositionId.enrosqueCintura, PositionId.manoHombro, PositionId.titanic],
        ticks: 4,
        videoFile: 'onda-doble-tiempo'
    },
    {
        id: StepId.ondaFrontal,
        name: 'Onda frontal',
        positions: [PositionId.cerradaDosManos],
        ticks: 4,
        videoFile: 'onda-frontal'
    },
    {
        id: StepId.ondaSentadilla,
        name: 'Onda con sentadilla',
        positions: [PositionId.enrosqueCintura, PositionId.manoHombro, PositionId.titanic],
        ticks: 8,
        videoFile: 'onda-sentadilla'
    },
    {
        dependencies: [StepId.serpentina],
        description:
            'Serpentina doble, desplazando un brazo en los dos primeros tiempos y el otro brazo en los dos ultimos',
        id: StepId.parabrisas,
        name: 'Parabrisas',
        positions: [{ ending: PositionId.cerradaDosManos, starting: PositionId.abierta }],
        ticks: 4,
        videoFile: 'parabrisas'
    },
    {
        // TODO a.k.a. abre y cierra
        id: StepId.pasoPico,
        name: 'Paso y pico',
        positions: [PositionId.abierta],
        ticks: 8,
        videoFile: 'paso-pico'
    },
    {
        id: StepId.peinadoFollower,
        name: 'Peinado follower',
        positions: [{ ending: PositionId.arrastre, starting: PositionId.iman }],
        ticks: 4,
        videoFile: 'peinado-follower'
    },
    {
        id: StepId.salidaManoHombro,
        name: 'Salida de mano al hombro',
        positions: [
            { ending: PositionId.s, starting: PositionId.manoHombro },
            { ending: PositionId.brazosCruzados, starting: PositionId.manoHombro }
        ],
        ticks: 4,
        videoFile: 'salida-mano-hombro'
    },
    {
        description:
            'Transición de posición abierta a cerrada con una mano, en que el leader desliza su brazo por debajo del brazo del follower, llevando a la mano hacia la espalda del follower. También se puede hacer para pasar de cerrada con una mano a cerrada con dos manos.',
        id: StepId.serpentina,
        name: 'Serpentina',
        positions: [
            { ending: PositionId.cerradaUnaMano, starting: PositionId.abierta },
            { ending: PositionId.cerradaDosManos, starting: PositionId.cerradaUnaMano }
        ],
        ticks: 4
    },
    {
        id: StepId.slide,
        name: 'Slide',
        positions: [PositionId.cerradaDosManos, PositionId.cerradaUnaMano],
        ticks: 4,
        videoFile: 'slide'
    },
    {
        id: StepId.titanic,
        name: 'Titanic',
        positions: [
            { ending: PositionId.titanic, starting: PositionId.cerradaUnaMano },
            { ending: PositionId.titanic, starting: PositionId.cerradaDosManos }
        ],
        ticks: 4,
        videoFile: 'titanic'
    },
    {
        id: StepId.tornado,
        name: 'Tornado',
        positions: [{ ending: PositionId.s, starting: PositionId.brazosCruzados }],
        ticks: 8
    },
    {
        id: StepId.vueltaAbdomen,
        name: 'Vuelta de abdomen',
        positions: [
            {
                ending: PositionId.s,
                starting: PositionId.abierta
            }
        ],
        ticks: 4
    },
    {
        id: StepId.vueltaBaldufa,
        name: 'Vuelta de baldufa',
        positions: [{ ending: PositionId.manoEspaldaFollower, starting: PositionId.abierta }],
        ticks: 4,
        videoFile: 'vuelta-baldufa'
    },
    {
        id: StepId.vueltaBrazosCruzados,
        name: 'Vuelta de brazos cruzados',
        positions: [{ ending: PositionId.brazosCruzados, starting: PositionId.s }],
        ticks: 4
    },
    {
        description:
            'El leader suelta la mano de avance en el primer tiempo y empieza una vuelta. Cuando el leader esta de espaldas al follower (en el segundo/tercer tiempo), coge la mano de arrastre del follower con su mano de avance, antes de completar la vuelta. El follower se desplaza con un basico lateral',
        id: StepId.vueltaCambioMano,
        name: 'Vuelta con cambio de mano',
        positions: [{ ending: PositionId.s, starting: PositionId.abierta }],
        ticks: 4
    },
    {
        id: StepId.vueltaDoble,
        name: 'Vuelta doble',
        positions: [{ ending: PositionId.enrosqueCintura, starting: PositionId.ampersand }],
        ticks: 4,
        videoFile: 'vuelta-doble'
    },
    {
        id: StepId.vueltaFinta,
        name: 'Vuelta con finta',
        positions: [{ ending: PositionId.cerradaUnaMano, starting: PositionId.avance }],
        ticks: 4,
        videoFile: 'vuelta-finta'
    },
    {
        id: StepId.vueltaHombro,
        name: 'Vuelta de hombro',
        positions: [
            {
                ending: PositionId.s,
                starting: PositionId.abierta
            }
        ],
        ticks: 4,
        videoFile: 'vuelta-hombro'
    },
    {
        id: StepId.vueltaMuelle,
        name: 'Vuelta de muelle',
        positions: [{ ending: PositionId.iman, starting: PositionId.abierta }],
        ticks: 4,
        videoFile: 'vuelta-muelle'
    },
    {
        description:
            'El leader suelta la mano de avance y marca una vuelta al follower con la mano de arrastre, poniendola palma con palma con la mano del follower, en una posición similar a la de mirar el reloj. Cuando es el leader quien da la vuelta, no se la marca al follower',
        id: StepId.vueltaReloj,
        name: 'Vuelta de reloj',
        positions: [PositionId.abierta, PositionId.cerradaUnaMano],
        ticks: 4,
        videoFile: 'vuelta-reloj'
    },
    {
        id: StepId.vueltaTrazo,
        name: 'Vuelta de trazo',
        positions: [{ ending: PositionId.iman, starting: PositionId.abierta }],
        ticks: 4,
        videoFile: 'vuelta-trazo'
    }
];

export const getStep = (id: StepId) => steps.find(s => s.id === id);

export const getInputSteps = (positionId: PositionId) =>
    steps.filter(step => {
        return step.positions.find(p => typeof p !== 'string' && p.ending === positionId);
    });

export const getOutputSteps = (positionId: PositionId) =>
    steps.filter(step => {
        return step.positions.find(p => typeof p !== 'string' && p.starting === positionId);
    });

export const getPositionSteps = (positionId: PositionId) =>
    steps.filter(step => {
        return step.positions.find(p => typeof p === 'string' && p === positionId);
    });

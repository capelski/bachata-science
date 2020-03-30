import { PositionId } from '../types/positions';
import { Step, StepId } from '../types/steps';

export const steps: Step[] = [
    {
        dependencies: [StepId.enrosqueCintura],
        description:
            'El leader suelta la mano de avance en el ultimo tiempo anterior y coge al follower por la cintura. Despues lleva al follower de su lado a su otro lado en 4 tiempos, para devolverlo al mismo lado al que estaba inicialmente en los 4 tiempos siguientes',
        id: StepId.alternarEnrosqueCintura,
        name: 'Alternar enrosque de cintura',
        positions: [PositionId.enrosqueCintura],
        ticks: 8,
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
            PositionId.abiertaDosManos,
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
            PositionId.abiertaDosManos,
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
        positions: [PositionId.abiertaDosManos],
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
        description:
            'Teniendo los brazos cruzados, el leader pasa suavemente las manos del follower por encima de la cabeza del follower y las deja, cogiendo al follower con las dos manos en la espalda. Tambien puede pasar las manos por encima de su cabeza (la del leader)',
        id: StepId.bufanda,
        name: 'Bufanda',
        positions: [{ ending: PositionId.cerradaDosManos, starting: PositionId.brazosCruzados }],
        ticks: 4
    },
    {
        dependencies: [StepId.enrosqueCintura, StepId.basicoFrontal],
        description:
            'Basico frontal en posicion de enrosque (el follower abre con su pierna habitual). Se puede adornar el cuarto tiempo punteando en cruzado, o se pueden fusionar los tiempos 4 y 5 en un solo movimiento prolongado sin llegar a puntear',
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
        positions: [{ ending: PositionId.abiertaUnaMano, starting: PositionId.brazosCruzados }],
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
            PositionId.abiertaDosManos,
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
            { ending: PositionId.abiertaDosManos, starting: PositionId.cerradaDosManos },
            { ending: PositionId.abiertaDosManos, starting: PositionId.cerradaUnaMano }
        ],
        ticks: 4
    },
    {
        dependencies: [StepId.enrosqueCintura],
        description:
            'Movimiento inverso al enrosque de cintura, en el que el leader marca la vuelta de salida con la mano de avance sin soltar la mano de la cintura del follower. También se puede hacer soltando la mano de avance y marcando la vuelta de salida del enrosque con la mano de la cintura',
        id: StepId.desnrosqueCintura,
        name: 'Desnrosque de cintura',
        positions: [{ ending: PositionId.abiertaDosManos, starting: PositionId.enrosqueCintura }],
        ticks: 4,
        videoFile: 'enrosque-cintura'
    },
    {
        id: StepId.desnrosqueCuello,
        name: 'Desnrosque de cuello',
        positions: [{ ending: PositionId.abiertaDosManos, starting: PositionId.enrosqueCuello }],
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
        dependencies: [StepId.vueltaReloj],
        description:
            'El leader marca una vuelta de reloj manteniendo cogida la mano de avance del follower, llevandola a la altura de la cintura del follower',
        id: StepId.enrosqueCintura,
        name: 'Enrosque de cintura',
        positions: [
            { ending: PositionId.enrosqueCintura, starting: PositionId.abiertaDosManos },
            { ending: PositionId.enrosqueCintura, starting: PositionId.cerradaUnaMano }
        ],
        ticks: 4,
        videoFile: 'enrosque-cintura'
    },
    {
        id: StepId.enrosqueCuello,
        name: 'Enrosque de cuello',
        positions: [{ ending: PositionId.enrosqueCuello, starting: PositionId.abiertaUnaMano }],
        ticks: 4,
        videoFile: 'enrosque-cuello'
    },
    {
        id: StepId.flecha,
        name: 'Flecha',
        positions: [{ ending: PositionId.ampersand, starting: PositionId.abiertaDosManos }],
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
            { ending: PositionId.cerradaDosManos, starting: PositionId.abiertaDosManos },
            { ending: PositionId.manosCintura, starting: PositionId.brazosCruzados },
            { ending: PositionId.manosCintura, starting: PositionId.abiertaDosManos }
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
        positions: [{ ending: PositionId.abiertaUnaMano, starting: PositionId.abiertaDosManos }],
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
        positions: [{ ending: PositionId.cerradaDosManos, starting: PositionId.abiertaDosManos }],
        ticks: 4,
        videoFile: 'parabrisas'
    },
    {
        // TODO a.k.a. abre y cierra
        id: StepId.pasoPico,
        name: 'Paso y pico',
        positions: [PositionId.abiertaDosManos],
        ticks: 8,
        videoFile: 'paso-pico'
    },
    {
        id: StepId.peinadoFollower,
        name: 'Peinado follower',
        positions: [{ ending: PositionId.s, starting: PositionId.iman }],
        ticks: 4,
        videoFile: 'peinado-follower'
    },
    {
        id: StepId.ponerAbrigo,
        name: 'Poner abrigo',
        positions: [{ ending: PositionId.cuchara, starting: PositionId.lancero }],
        ticks: 4,
        videoFile: 'poner-abrigo'
    },
    {
        id: StepId.quitarAbrigo,
        name: 'Quitar abrigo',
        positions: [{ ending: PositionId.brazosCruzados, starting: PositionId.cuchara }],
        ticks: 4,
        videoFile: 'quitar-abrigo'
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
            { ending: PositionId.cerradaUnaMano, starting: PositionId.abiertaDosManos },
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
        description:
            'El leader suelta la mano de arrastre y empieza a dar una vuelta por dentro, al tiempo que lleva la mano de avance del follower a su abdomen. A la mitad de la vuelta el leader suelta la mano (el follower deja su mano en el abdomen del leader), y al completar la vuelta, pide la mano del abdomen con su mano opuesta. Se puede terminar otra vez en posicion abierta pasandose la mano de avance del follower a la mano de avance del leader',
        id: StepId.vueltaAbdomen,
        name: 'Vuelta de abdomen',
        positions: [
            {
                ending: PositionId.s,
                starting: PositionId.abiertaUnaMano
            },
            {
                ending: PositionId.s,
                starting: PositionId.abiertaDosManos
            }
        ],
        ticks: 4
    },
    {
        description:
            'El leader marca una vuelta al follower con su mano de arrastre, llevando su mano de avance tambien por encima de la cabeza del follower',
        id: StepId.vueltaArriba,
        name: 'Vuelta por arriba',
        positions: [
            { ending: PositionId.brazosCruzados, starting: PositionId.abiertaDosManos },
            PositionId.brazosCruzados,
            { ending: PositionId.brazosCruzados, starting: PositionId.s }
        ],
        ticks: 4
    },
    {
        id: StepId.vueltaBaldufa,
        name: 'Vuelta de baldufa',
        positions: [
            { ending: PositionId.manoEspaldaFollower, starting: PositionId.abiertaDosManos }
        ],
        ticks: 4,
        videoFile: 'vuelta-baldufa'
    },
    {
        description:
            'El leader suelta la mano de avance en el primer tiempo y empieza una vuelta. Cuando el leader esta de espaldas al follower (en el segundo/tercer tiempo), coge la mano de arrastre del follower con su mano de avance, antes de completar la vuelta. El follower se desplaza con un basico lateral',
        id: StepId.vueltaCambioMano,
        name: 'Vuelta con cambio de mano',
        positions: [{ ending: PositionId.s, starting: PositionId.abiertaDosManos }],
        ticks: 4
    },
    {
        id: StepId.vueltaCintura,
        name: 'Vuelta por cintura',
        positions: [
            { ending: PositionId.cerradaDosManos, starting: PositionId.manosCintura },
            { ending: PositionId.cerradaUnaMano, starting: PositionId.manosCintura }
        ],
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
        positions: [{ ending: PositionId.abiertaDosManos, starting: PositionId.abiertaUnaMano }],
        ticks: 4,
        videoFile: 'vuelta-finta'
    },
    {
        description:
            'El leader suelta la mano de arrastre y empieza a dar una vuelta por dentro, al tiempo que lleva la mano de avance del follower a su hombro. A la mitad de la vuelta el leader suelta la mano (el follower deja su mano en el hombro del leader), y al completar la vuelta, pide la mano del hombro con su mano opuesta. Se puede terminar otra vez en posicion abierta pasandose la mano de avance del follower a la mano de avance del leader',
        id: StepId.vueltaHombro,
        name: 'Vuelta de hombro',
        positions: [
            {
                ending: PositionId.s,
                starting: PositionId.abiertaDosManos
            },
            {
                ending: PositionId.s,
                starting: PositionId.abiertaUnaMano
            }
        ],
        ticks: 4,
        videoFile: 'vuelta-hombro'
    },
    {
        id: StepId.vueltaMuelle,
        name: 'Vuelta de muelle',
        positions: [{ ending: PositionId.iman, starting: PositionId.abiertaDosManos }],
        ticks: 4,
        videoFile: 'vuelta-muelle'
    },
    {
        description:
            'El leader suelta la mano de avance y marca una vuelta al follower con la mano de arrastre, poniendola palma con palma con la mano del follower, en una posición similar a la de mirar el reloj. Cuando es el leader quien da la vuelta, no se la marca al follower',
        id: StepId.vueltaReloj,
        name: 'Vuelta de reloj',
        positions: [PositionId.abiertaUnaMano, PositionId.cerradaUnaMano],
        ticks: 4,
        videoFile: 'vuelta-reloj'
    },
    {
        id: StepId.vueltaTrazo,
        name: 'Vuelta de trazo',
        positions: [{ ending: PositionId.iman, starting: PositionId.abiertaDosManos }],
        ticks: 4,
        videoFile: 'vuelta-trazo'
    }
];

export const getStep = (id: StepId) => steps.find(s => s.id === id)!;

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

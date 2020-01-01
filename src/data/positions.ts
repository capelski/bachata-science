export enum PositionId {
    abierta = 'abierta',
    cerradaConUnaMano = 'cerrada-con-una-mano',
    cerradaConDosManos = 'cerrada-con-dos-manos',
    avance = 'avance',
    arrastre = 'arrastre',
    iman = 'iman',
    ampersand = 'ampersand',
    s = 's',
    enrosqueDeCintura = 'enrosque-de-cintura',
    manoAlHombro = 'mano-al-hombro',
    brazosCruzados = 'brazos-cruzados',
    manosEnCintura = 'manos-en-cintura',
    manoALaEspalda = 'mano-a-la-espalda',
    titanic = 'titanic',
    enrosqueDeCuello = 'enrosque-de-cuello',
    lancero = 'lancero',
}

export interface Position {
    description?: string;
    id: PositionId;
    name: string;
}

export interface PositionProps {
    positionId: PositionId;
}

export type PositionTransition = PositionId | {
    ending: PositionId;
    starting: PositionId;
};

export const positions: Position[] = [
    {
        id: PositionId.abierta,
        name: 'Abierta'
    },
    {
        id: PositionId.cerradaConUnaMano,
        name: 'Cerrada con una mano'
    },
    {
        id: PositionId.cerradaConDosManos,
        name: 'Cerrada con dos manos'
    },
    {
        id: PositionId.avance,
        name: 'Avance'
    },
    {
        id: PositionId.arrastre,
        name: 'Arrastre'
    },
    {
        id: PositionId.iman,
        name: 'Iman'
    },
    {
        id: PositionId.ampersand,
        name: 'Ampersand'
    },
    {
        id: PositionId.s,
        name: 'S'
    },
    {
        id: PositionId.enrosqueDeCintura,
        name: 'Enrosque de cintura'
    },
    {
        id: PositionId.manoAlHombro,
        name: 'Mano al hombro'
    },
    {
        id: PositionId.brazosCruzados,
        name: 'Brazos cruzados'
    },
    {
        id: PositionId.manosEnCintura,
        name: 'Manos en cintura'
    },
    {
        id: PositionId.manoALaEspalda,
        name: 'Mano a la espalda'
    },
    {
        id: PositionId.titanic,
        name: 'Titanic'
    },
    {
        id: PositionId.enrosqueDeCuello,
        name: 'Enrosque de cuello'
    },
    {
        id: PositionId.lancero,
        name: 'Lancero'
    },
];

export const getPosition = (id: PositionId) => positions.find(p => p.id === id);

export enum PositionId {
    abierta = 'abierta',
    cerradaConUnaMano = 'cerrada-con-una-mano',
    cerradaConDosManos = 'cerrada-con-dos-manos',
    avance = 'avance',
    arrastre = 'arrastre',
    iman = 'iman',
    ampersand = 'ampersand',
    s = 's',
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
];

export const getPosition = (id: PositionId) => positions.find(p => p.id === id);

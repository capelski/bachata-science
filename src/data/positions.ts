export enum PositionId {
    abierta = 'abierta',
    ampersand = 'ampersand',
    arrastre = 'arrastre',
    avance = 'avance',
    brazosCruzados = 'brazos-cruzados',
    cerradaDosManos = 'cerrada-dos-manos',
    cerradaUnaMano = 'cerrada-una-mano',
    enrosqueCintura = 'enrosque-cintura',
    enrosqueCuello = 'enrosque-cuello',
    iman = 'iman',
    lancero = 'lancero',
    manoEspaldaFollower = 'mano-espalda-follower',
    manoHombro = 'mano-hombro',
    manosCintura = 'manos-cintura',
    s = 's',
    titanic = 'titanic'
}

export interface Position {
    description?: string;
    id: PositionId;
    name: string;
}

export interface PositionProps {
    positionId: PositionId;
}

export type PositionTransition =
    | PositionId
    | {
          ending: PositionId;
          starting: PositionId;
      };

export const positions: Position[] = [
    {
        id: PositionId.abierta,
        name: 'Abierta'
    },
    {
        id: PositionId.ampersand,
        name: 'Ampersand'
    },
    {
        id: PositionId.arrastre,
        name: 'Arrastre'
    },
    {
        id: PositionId.avance,
        name: 'Avance'
    },
    {
        id: PositionId.brazosCruzados,
        name: 'Brazos cruzados'
    },
    {
        id: PositionId.cerradaDosManos,
        name: 'Cerrada con dos manos'
    },
    {
        id: PositionId.cerradaUnaMano,
        name: 'Cerrada con una mano'
    },
    {
        id: PositionId.enrosqueCintura,
        name: 'Enrosque de cintura'
    },
    {
        id: PositionId.enrosqueCuello,
        name: 'Enrosque de cuello'
    },
    {
        id: PositionId.iman,
        name: 'Iman'
    },
    {
        id: PositionId.lancero,
        name: 'Lancero'
    },
    {
        id: PositionId.manoEspaldaFollower,
        name: 'Mano a espalda follower'
    },
    {
        id: PositionId.manoHombro,
        name: 'Mano al hombro'
    },
    {
        id: PositionId.manosCintura,
        name: 'Manos en cintura'
    },
    {
        id: PositionId.s,
        name: 'S'
    },
    {
        id: PositionId.titanic,
        name: 'Titanic'
    }
];

export const getPosition = (id: PositionId) => positions.find(p => p.id === id);

import { Position, PositionId } from '../types/positions';

export const positions: Position[] = [
    {
        id: PositionId.abiertaDosManos,
        imageFile: 'abierta-dos-manos.jpg',
        name: 'Abierta con dos manos'
    },
    {
        id: PositionId.abiertaUnaMano,
        imageFile: 'abierta-una-mano.jpg',
        name: 'Abierta con una mano'
    },
    {
        id: PositionId.ampersand,
        imageFile: 'ampersand.jpg',
        name: 'Ampersand'
    },
    {
        id: PositionId.brazosCruzados,
        imageFile: 'brazos-cruzados.jpg',
        name: 'Brazos cruzados'
    },
    {
        id: PositionId.cerradaDosManos,
        imageFile: 'cerrada-dos-manos.jpg',
        name: 'Cerrada con dos manos'
    },
    {
        id: PositionId.cerradaUnaMano,
        imageFile: 'cerrada-una-mano.jpg',
        name: 'Cerrada con una mano'
    },
    {
        id: PositionId.enrosqueCintura,
        imageFile: 'enrosque-cintura.jpg',
        name: 'Enrosque de cintura'
    },
    {
        id: PositionId.enrosqueCuello,
        imageFile: 'enrosque-cuello.jpg',
        name: 'Enrosque de cuello'
    },
    {
        id: PositionId.iman,
        imageFile: 'iman.jpg',
        name: 'Iman'
    },
    {
        id: PositionId.lancero,
        imageFile: 'lancero.jpg',
        name: 'Lancero'
    },
    {
        id: PositionId.manoEspaldaFollower,
        imageFile: 'mano-espalda-follower.jpg',
        name: 'Mano a espalda follower'
    },
    {
        id: PositionId.manoHombro,
        imageFile: 'mano-al-hombro.jpg',
        name: 'Mano al hombro'
    },
    {
        id: PositionId.manosCintura,
        name: 'Manos en cintura'
    },
    {
        id: PositionId.s,
        imageFile: 's.jpg',
        name: 'S'
    },
    {
        id: PositionId.titanic,
        imageFile: 'titanic.jpg',
        name: 'Titanic'
    },
    {
        id: PositionId.cuchara,
        imageFile: 'cuchara.jpg',
        name: 'Cuchara'
    }
];

export const getPosition = (id: PositionId) => positions.find(p => p.id === id)!;

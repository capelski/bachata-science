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
        name: 'Cerrada con dos manos'
    },
    {
        id: PositionId.cerradaUnaMano,
        name: 'Cerrada con una mano'
    },
    {
        id: PositionId.enrosqueCintura,
        imageFile: 'enrosque-cintura.jpg',
        name: 'Enrosque de cintura'
    },
    {
        id: PositionId.enrosqueCuello,
        name: 'Enrosque de cuello'
    },
    {
        id: PositionId.iman,
        imageFile: 'iman.jpg',
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

export const getPosition = (id: PositionId) => positions.find(p => p.id === id)!;

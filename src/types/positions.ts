export enum PositionId {
    abiertaDosManos = 'abierta-dos-manos',
    abiertaUnaMano = 'abierta-una-mano',
    ampersand = 'ampersand',
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
    imageFile?: string;
    name: string;
}

export type PositionTransition =
    | PositionId
    | {
          ending: PositionId;
          starting: PositionId;
      };

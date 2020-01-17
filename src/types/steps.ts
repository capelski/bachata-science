import { PositionTransition } from './positions';

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
    vueltaArriba = 'vuelta-arriba',
    vueltaBaldufa = 'vuelta-baldufa',
    vueltaCambioMano = 'vuelta-cambio-mano',
    vueltaCintura = 'vuelta-cintura',
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

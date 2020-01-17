import { StepId } from './steps';

// TODO Eventually come up with better names
export enum StageId {
    uno = 1,
    dos = 2,
    tres = 3,
    cuatro = 4,
    cinco = 5,
    seis = 6,
    siete = 7,
    ocho = 8,
    nueve = 9,
    diez = 10
}

export interface Stage {
    id: StageId;
    steps: StepId[];
}

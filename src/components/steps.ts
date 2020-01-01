export interface Step {
    id: StepIds;
    description?: string;
    name: string;
    ticks: number;
}

enum StepIds {
    basicoLateral = 'basico-lateral',
    basicoFrontal = 'basico-frontal',
    basicoEnElSitio = 'basico-en-el-sitio',
    dobleTiempo = 'doble-tiempo',
    cuadrado = 'cuadrado',
    medioGiro = 'medio-giro',
    pasoYPico = 'paso-y-pico',
    slide = 'slide',
    vueltaDeReloj = 'vuelta-de-reloj',
    vueltaDeBarriga = 'vuelta-de-barriga',
    vueltaDeHombro = 'vuelta-de-hombro',
    vueltaConCambioDeMano = 'vuelta-con-cambio-de-mano',
    enrosqueDeCintura = 'enrosque-de-cintura',
    desnrosqueDeCintura = 'desnrosque-de-cintura',
    caminarEnroscado = 'caminar-enroscado',
    alternarEnrosque = 'alternar-enrosque',
    manoAlHombro = 'mano-al-hombro',
    salidaDeManoAlHombro = 'salida-de-mano-al-hombro',
    caminarConManoAlHombro = 'caminar-con-mano-al-hombro',
    alternarManoAlHombro = 'alternar-mano-al-hombro',
    vueltaDeBrazosCruzados = 'vuelta-de-brazos-cruzados',
    bufanda = 'bufanda',
    lanzarBrazos = 'lanzar-brazos',
    vueltaDeBaldufa = 'vuelta-de-baldufa',
    vueltaDeTrazo = 'vuelta-de-trazo',
    peinadoFollower = 'peinado-follower',
    flecha = 'flecha',
    vueltaDobleSinSoltar = 'vuelta-doble-sin-soltar',
    ondaEnDobleTiempo = 'onda-en-doble-tiempo',
    ondaConSentadilla = 'onda-con-sentadilla',
    ondaFrontal = 'onda-frontal',
    basicoMadrid = 'basico-madrid',
    boomerang = 'boomerang',
    abrebotellas = 'abrebotellas',
    catapulta = 'catapulta',
    tornado = 'tornado',
    molinillo = 'molinillo',
    enrosqueDeCuello = 'enrosque-de-cuello',
    vueltaConFinta = 'vuelta-con-finta',
}

export const steps: Step[] = [
    {
        id: StepIds.basicoLateral,
        name: 'Basico lateral',
        ticks: 8
    },
    {
        id: StepIds.basicoFrontal,
        name: 'Basico frontal',
        ticks: 8
    },
    {
        id: StepIds.basicoEnElSitio,
        name: 'Basico en el sitio',
        ticks: 8
    },
    {
        id: StepIds.dobleTiempo,
        name: 'Doble tiempo',
        ticks: 8
    },
    {
        id: StepIds.cuadrado,
        name: 'Cuadrado',
        ticks: 8
    },
    {
        id: StepIds.medioGiro,
        name: 'Medio giro',
        ticks: 4
    },
    {
        id: StepIds.pasoYPico,
        name: 'Paso y pico',
        ticks: 8
    },
    {
        id: StepIds.slide,
        name: 'Slide',
        ticks: 4
    },
    {
        id: StepIds.vueltaDeReloj,
        name: 'Vuelta de reloj',
        ticks: 4
    },
    {
        id: StepIds.vueltaDeBarriga,
        name: 'Vuelta de barriga',
        ticks: 4
    },
    {
        id: StepIds.vueltaDeHombro,
        name: 'Vuelta de hombro',
        ticks: 4
    },
    {
        id: StepIds.vueltaConCambioDeMano,
        name: 'Vuelta con cambio de mano',
        ticks: 4
    },
    {
        id: StepIds.enrosqueDeCintura,
        name: 'Enrosque de cintura',
        ticks: 4
    },
    {
        id: StepIds.desnrosqueDeCintura,
        name: 'Desnrosque de cintura',
        ticks: 4
    },
    {
        id: StepIds.caminarEnroscado,
        name: 'Caminar enroscado',
        ticks: 8
    },
    {
        id: StepIds.alternarEnrosque,
        name: 'Alternar enrosque',
        ticks: 4
    },
    {
        id: StepIds.manoAlHombro,
        name: 'Mano al hombro',
        ticks: 4
    },
    {
        id: StepIds.salidaDeManoAlHombro,
        name: 'Salida de mano al hombro',
        ticks: 4
    },
    {
        id: StepIds.caminarConManoAlHombro,
        name: 'Caminar con mano al hombro',
        ticks: 8
    },
    {
        id: StepIds.alternarManoAlHombro,
        name: 'Alternar mano al hombro',
        ticks: 4
    },
    {
        id: StepIds.vueltaDeBrazosCruzados,
        name: 'Vuelta de brazos cruzados',
        ticks: 4
    },
    {
        id: StepIds.bufanda,
        name: 'Bufanda',
        ticks: 4
    },
    {
        id: StepIds.lanzarBrazos,
        name: 'Lanzar brazos',
        ticks: 4
    },
    {
        id: StepIds.vueltaDeBaldufa,
        name: 'Vuelta de baldufa',
        ticks: 4
    },
    {
        id: StepIds.vueltaDeTrazo,
        name: 'Vuelta de trazo',
        ticks: 4
    },
    {
        id: StepIds.peinadoFollower,
        name: 'Peinado follower',
        ticks: 4
    },
    {
        id: StepIds.flecha,
        name: 'Flecha',
        ticks: 4
    },
    {
        id: StepIds.vueltaDobleSinSoltar,
        name: 'Vuelta doble sin soltar',
        ticks: 4
    },
    {
        id: StepIds.ondaEnDobleTiempo,
        name: 'Onda en doble tiempo',
        ticks: 4
    },
    {
        id: StepIds.ondaConSentadilla,
        name: 'Onda con sentadilla',
        ticks: 8
    },
    {
        id: StepIds.ondaFrontal,
        name: 'Onda frontal',
        ticks: 4
    },
    {
        id: StepIds.basicoMadrid,
        name: 'Basico madrid',
        ticks: 8
    },
    {
        id: StepIds.boomerang,
        name: 'Boomerang',
        ticks: 4
    },
    {
        id: StepIds.abrebotellas,
        name: 'Abrebotellas',
        ticks: 4
    },
    {
        id: StepIds.catapulta,
        name: 'Catapulta',
        ticks: 4
    },
    {
        id: StepIds.tornado,
        name: 'Tornado',
        ticks: 4
    },
    {
        id: StepIds.molinillo,
        name: 'Molinillo',
        ticks: 8
    },
    {
        id: StepIds.enrosqueDeCuello,
        name: 'Enrosque de cuello',
        ticks: 4
    },
    {
        id: StepIds.vueltaConFinta,
        name: 'Vuelta con finta',
        ticks: 4
    }
];
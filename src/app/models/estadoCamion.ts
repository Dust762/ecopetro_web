export class EstadoCamion{

    constructor(public idEstadoCamion: number, public nombreEstadoCamion: string) {}
    public get getNombreEstadoCamion(){
        return this.nombreEstadoCamion;
    }
  }
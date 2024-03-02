export class Project {
id: number;
model: string;
engine: string;
interior: string;
exterior: string;
suspension: string;

constructor(
  id: number = 0,
  model: string = '',
  engine: string = '',
  interior: string = '',
  exterior: string = '',
  suspension: string = ''
  ) {
this.id=id;
this.model=model;
this.engine=engine;
this.interior=interior;
this.exterior=exterior;
this.suspension=suspension;

}
}

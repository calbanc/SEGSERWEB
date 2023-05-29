export class User
{
  constructor(
    public ID:string,
    public USERNAME:string,
    public PASSWORD:string,
    public EMAIL:string,
    public IDCOMPANYUSER:string|null,
    public NAME:string,
    public PRIMARYNAME:string,
    public LASTNAME:string,
    public IDROLE:string,
    public IDCLIENT:string
  ){

  }
}

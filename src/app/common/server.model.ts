export class Server {
  public name: string;
  public type: string;
  public content: string;
  public localtemp: string;

  constructor(name: string, type: string, content: string, localtemp: string) {
    this.name = name;
    this.type = type;
    this.content = content;
    this.localtemp = localtemp;
  }
}

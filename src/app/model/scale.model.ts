export class Scale {
    public canvasHeight: number;
    public canvasWidth: number;
    public distance: number;
    public width: number;
    public height: number;

    constructor(canvasWidth: number, canvasHeight: number, count: number) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.width = canvasHeight * 0.25 / count;
        this.distance = this.width * 1.6;
        this.height = this.width * 2.2;
    }
}

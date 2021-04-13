import { WaveGroup } from "./waveGroup.js";

class App {
    constructor () {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);

        this.waveGroup = new WaveGroup();

        window.addEventListener('resize', this.resize.bind(this), false);
        // 리사이즈 이벤트에선 캔버스를 더블 사이즈로 지정해서 레티나 디스플레이에서 잘 보일 수 있게 함.
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2,2);

        this.waveGroup.resize(this.stageWidth, this.stageHeight);
    }

    animate(t) {
        this.ctx.clearRect(0,0,this.stageWidth, this.stageHeight); // 캔버스 클리어
        
        this.waveGroup.draw(this.ctx)

        requestAnimationFrame(this.animate.bind(this));
    }
}

window.onload = () => {
    console.log('loaded')
    new App();
}
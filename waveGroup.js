import { Wave } from './wave.js';

export class WaveGroup {
    constructor () {
        console.log('created Wave Group')
        this.totalWaves = 3;
        this.totalPoints = 6;

        this.color = ['rgba(0, 199,245,0.4)', 'rgba(0, 145,199,0.4)', 'rgba(0, 87,158,0.4)'];

        this.waves = [];

        for( let i =0; i < this.totalWaves ; i++) {
            const wave = new Wave (
                i,
                this.totalPoints,
                this.color[i]
            );
            this.waves[i] = wave;
        }
    }

    resize ( stageWidth, stageHeight) {
        for( let i =0; i< this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);

        }
    }
     draw(ctx) {
        //  console.log('waveGroup draw')
         for(let i=0; i< this.totalWaves; i++ ) {
             const wave = this.waves[i];
             wave.draw(ctx);
         }
     }
}
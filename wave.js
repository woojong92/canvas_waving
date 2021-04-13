import { Point } from './point.js';

export class Wave {
    constructor (index, totalPoints,  color )  {
        console.log('created Wave')
        this.index = index;
        this.totalPoints = totalPoints;
        this.color = color;
        this.points = [];
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth /2 ;
        this.centerY = stageHeight /2 ;

        this.pointGap = this.stageWidth/ (this.totalPoints -1)

        this.init();
    }

    init () {
        // this.point = new Point(
        //     this.centerX,
        //     this.centerY
        // )

        this.points = [];
        
        for( let i = 0 ; i < this.totalPoints ;  i++ ){
            const point = new Point(
                this.index + i,
                this.pointGap * i,
                this.centerY,
            );
            this.points[i] = point;
        }
    }

    draw(ctx) {
        // console.log('draw')
        // ctx.beginPath();
        // ctx.fillStyle = '#ff0000';

        // this.point.update();

        // ctx.arc(this.point.x, this.point.y, 30, 0, 2 *Math.PI);
        // ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = this.color;

        let prevX = this.points[0].x;
        let prevY = this.points[0].y;

        ctx.moveTo(prevX, prevY);

        for( let i = 1 ;i<this.totalPoints; i++) {
            if( i<this.totalPoints - 1 ){
                this.points[i].update();
            }
        
            const cx = (prevX + this.points[i].x) / 2;
            const cy = (prevY + this.points[i].y) / 2;
            
            ctx.lineTo(cx, cy); 
            // ctx.quadraticCurveTo(prevX, prevY, cx, cy);

            prevX = this.points[i].x;
            prevY = this.points[i].y;
        }

        ctx.lineTo(prevX, prevY); 
        ctx.lineTo(this.stageWidth, this.stageHeight);
        ctx.lineTo(this.points[0].x, this.stageHeight);
        ctx.fill();
        ctx.closePath();
    }
}

// 애니매이션에서 내가 그리고자 하는 애니메이션의 좌표값을 가지고 오는 것이 가장 중요
// 그러기 위해서는 애니메이션의 크기를 알아야 함
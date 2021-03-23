class Chart {
    
    constructor(width, height) {
    this.width = width;
        this.height = height;
    }

    drawLine() {
        console.log('draw line');
    }
}

// Chart클래스를 상속받음.
class BarChart extends Chart {
    constructor(width, height) {
        super(width, height); // 부모(즉, Chart)의 생성자 함수를 가리킴.
    }

    draw() {
        this.drawLine();
        console.log(`draw ${this.width} X ${this.height} barChart`);
    }
}

const barchart1 = new BarChart(100, 100);
barchart1.draw();
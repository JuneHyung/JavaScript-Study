class Product {
    // 난수를 아이디로 하는 상품 인스턴스를 반환함.
    static build(name, price) {
        const id = Math.floor(Math.random() * 1000);
        return new Product(id, name, price);
    }

    // 세금을 계산하여 반환하는 getTaxPrice 정적 메소드
    static getTaxPrice(product) {
        return (product.price * 0.1) + product.price;
    }

    // 상품 클래스의 생성자 함수
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// 폐기가 가능한 상품 클래스
// 정적메소드 또한 상속함.
class DeposableProduct extends Product {
    depose() {
        this.deposed = true;
    }
}

const gum = Product.build('껌', 1000);
console.log(gum);

const clothes = new DeposableProduct(1, '옷', 2000);
const taxPrice = DeposableProduct.getTaxPrice(clothes);
console.log(taxPrice);

/*********************************************************************/
class ProductWithCode {
    // codePrefix 정적 속성을 정의
    // 정적 속성 static get을 이용해 정의
    static get CODE_PREFIX() {
        return "PRODUCT-"
    }

    constructor(id) {
        this.id;
        this.code = ProductWithCode.CODE_PREFIX + id;
    }
}

const product1 = new ProductWithCode('001');
console.log(ProductWithCode.CODE_PREFIX);
console.log(product1.code);
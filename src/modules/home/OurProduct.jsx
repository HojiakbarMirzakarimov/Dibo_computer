import Laptop from '../../assets/icons/laptop.svg';
import iphone from '../../assets/icons/iphone.svg';
export default function OurProduct() {
    return (
        <section className="section__our__product">
            <div className="container">
                <div className="products-list">
                    <div className='product-item'>
                        <img src={Laptop} alt="Laptop icon" />
                        <h2>Kompyuterlar</h2>
                    </div>
                    <div className='product-item'>
                        <img src={iphone} alt="Laptop icon" />
                        <h2>Kompyuterlar</h2>
                    </div>
                </div>
            </div>
        </section>

    )
}

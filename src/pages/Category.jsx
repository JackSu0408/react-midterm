import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async"
import _ from 'lodash';
import Header from "../components/Header"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import ProductList from '../components/ProductList';
import products from '../json/products.json';

function Category() {
    const { categoryName } = useParams();
    const _products = products.filter(
        x => x?.category.toUpperCase() === categoryName.toUpperCase()
    );

    const title = _.startCase(categoryName);
    console.log('categoryName:', categoryName);
    console.log('matched products:', _products);

    return (
         <div>
        <div className="flex flex-col">
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Header
                title={title}
                slogan="The best place to buy your favorite products"
            />
            <Navbar />
            <ProductList products={_products} className="content" />
            
        </div>
        <Footer className="footer" />
        </div>
    );
}

            export default Category;
import { useParams } from 'react-router';
import { Helmet } from "react-helmet-async"
import _ from 'lodash';
import Header from "../components/Header"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import ProductList from '../components/ProductList';
import products from '../json/products.json';
import { motion, AnimatePresence } from "framer-motion"; // 新增

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
            <div className="container mx-auto main-layout min-h-screen">
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                <Header title={title} />
                <Navbar />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={categoryName}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ProductList products={_products} className="content" />
                  </motion.div>
                </AnimatePresence>
            </div>
            <Footer className="footer" />
        </div>
    );
}

export default Category;
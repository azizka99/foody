import Layout from "@/components/Layout/Layout";
import style from "@/styles/product.module.css";
import ProductCart from "@/components/ProductCart/ProductCart";
import HeadBar from "@/components/HeadBar/HeadBar";
import {useIntl} from "react-intl";

function Products(props) {
    const itl = useIntl();
    return (
       <Layout title={'Products'}>
           <div className={style.product}>
               <HeadBar hasDropDown={true} title={itl.formatMessage({id:"layoutPage_Menu_Products"})}/>
               <div className={style.productWrap}>
                   <ProductCart image={'/images/pizza.svg'} name={'Marqarita'} restaurant={'Papa John’s'} price={16}/>
                   <ProductCart image={'/images/pizza.svg'} name={'Marqarita'} restaurant={'Papa John’s'} price={16}/>
                   <ProductCart image={'/images/pizza.svg'} name={'Marqarita'} restaurant={'Papa John’s'} price={16}/>
                   <ProductCart image={'/images/pizza.svg'} name={'Marqarita'} restaurant={'Papa John’s'} price={16}/>
                   <ProductCart image={'/images/pizza.svg'} name={'Marqarita'} restaurant={'Papa John’s'} price={16}/>
                   <ProductCart image={'/images/pizza.svg'} name={'Marqarita'} restaurant={'Papa John’s'} price={16}/>
                   <ProductCart image={'/images/pizza.svg'} name={'Marqarita'} restaurant={'Papa John’s'} price={16}/>
               </div>
           </div>
       </Layout>
    );
}

export default Products;
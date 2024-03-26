import styleMenu from './menu.module.css';
import Image from "next/image";
import {useIntl} from "react-intl";
import {useRouter} from "next/router";
function Menu({style}) {
    const intl = useIntl();
    const router = useRouter();
    return (
        <div className={style}>
            <div className={styleMenu.up}>
                <ul>
                    <li onClick={()=>{router.push('/home')}}>
                        <Image src={'/images/icons/dashboard.svg'} alt={'dashboard'} width={18} height={18}/>
                        {intl.formatMessage({id: 'layoutPage_Menu_Dashboard'})}
                    </li>
                    <li onClick={()=>{router.push('/products')}}>
                        <Image src={'/images/icons/products.svg'} alt={'Products'} width={18} height={18}/>
                        {intl.formatMessage({id: 'layoutPage_Menu_Products'})}
                    </li>
                    <li onClick={()=>{router.push('/restaurants')}}>
                        <Image src={'/images/icons/restaurants.svg'} alt={'restaurants'} width={18} height={18}/>
                        {intl.formatMessage({id: 'layoutPage_Menu_Restaurants'})}
                    </li>
                    <li onClick={()=>{router.push('/category')}}>
                        <Image src={'/images/icons/category.svg'} alt={'Category'} width={18} height={18}/>
                        {intl.formatMessage({id: 'layoutPage_Menu_Category'})}
                    </li>
                    <li onClick={()=>{router.push('/orders')}}>
                        <Image src={'/images/icons/orders.svg'} alt={'Orders'} width={18} height={18}/>
                        {intl.formatMessage({id: 'layoutPage_Menu_Orders'})}
                    </li>
                    <li>
                        <Image src={'/images/icons/offer.svg'} alt={'Offers'} width={18} height={18}/>
                        {intl.formatMessage({id: 'layoutPage_Menu_Offers'})}
                    </li>
                    <li>
                        <Image src={'/images/icons/logout.svg'} alt={'logout'} width={18} height={18}/>
                        {intl.formatMessage({id: 'layoutPage_Menu_Logout'})}
                    </li>

                </ul>
            </div>

            <div className={styleMenu.down}>
                <div>
                    <Image src={'/images/eaCamp.svg'} alt={'EACamp'} width={25} height={25}/>
                    <h4>EACAMP</h4>
                </div>
                <p>Version: 1.0.2024</p>
            </div>
        </div>
    );
}

export default Menu;
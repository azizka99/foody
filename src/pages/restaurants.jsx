import React from 'react';
import Layout from "@/components/Layout/Layout";
import HeadBar from "@/components/HeadBar/HeadBar";
import RestaurantCart from "@/components/RestaurantCart/RestaurantCart";
import style from '@/styles/restaurant.module.css';
import {useIntl} from "react-intl";

function Restaurants(props) {
    const itl = useIntl();
    return (
        <Layout>
            <HeadBar hasDropDown={true} hasButton={true} buttonText={'ADD RESTAURANT '} title={itl.formatMessage({id:"layoutPage_Menu_Restaurants"})}/>
            <div className={style.resWrapper}>
                <RestaurantCart image={'/images/papaJhons.svg'} title={'Papa John’s'} type={'Pizza'}/>
                <RestaurantCart image={'/images/burgerKing.svg'} title={'Papa John’s'} type={'Pizza'}/>
                <RestaurantCart image={'/images/papaJhons.svg'} title={'Papa John’s'} type={'Pizza'}/>
                <RestaurantCart image={'/images/burgerKing.svg'} title={'Papa John’s'} type={'Pizza'}/>
                <RestaurantCart image={'/images/papaJhons.svg'} title={'Papa John’s'} type={'Pizza'}/>
                <RestaurantCart image={'/images/burgerKing.svg'} title={'Papa John’s'} type={'Pizza'}/>
                <RestaurantCart image={'/images/papaJhons.svg'} title={'Papa John’s'} type={'Pizza'}/>
                <RestaurantCart image={'/images/burgerKing.svg'} title={'Papa John’s'} type={'Pizza'}/>
                <RestaurantCart image={'/images/papaJhons.svg'} title={'Papa John’s'} type={'Pizza'}/>
                <RestaurantCart image={'/images/burgerKing.svg'} title={'Papa John’s'} type={'Pizza'}/>
                <RestaurantCart image={'/images/papaJhons.svg'} title={'Papa John’s'} type={'Pizza'}/>
            </div>
        </Layout>
    );
}

export default Restaurants;
import React from 'react';
import Layout from "@/components/Layout/Layout";
import HeadBar from "@/components/HeadBar/HeadBar";
import {useIntl} from "react-intl";

function Orders(props) {
    const itl = useIntl();
    return (
        <Layout>
            <HeadBar title={itl.formatMessage({id:"layoutPage_Menu_Orders"})}/>
        </Layout>
    );
}

export default Orders;
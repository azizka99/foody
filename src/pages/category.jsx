import React from 'react';
import Layout from "@/components/Layout/Layout";
import HeadBar from "@/components/HeadBar/HeadBar";
import Table from "@/components/Table/Table";
import {useIntl} from "react-intl";

function Category(props) {
    const itl = useIntl();
    return (
        <Layout>
            <HeadBar  hasButton={true} buttonText={'ADD CATEGORY'} title={itl.formatMessage({id:"layoutPage_Menu_Category"})}/>
            <Table/>
        </Layout>
    );
}

export default Category;
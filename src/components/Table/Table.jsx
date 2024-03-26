import React from 'react';
import {useIntl} from "react-intl";
import Image from "next/image";
import style from '../../styles/myTable.module.css';

function Table({}) {
    const itl = useIntl();

    const header = [{id:"ID"}, {string:"Image"}, {string:"Name"}, {string:"Name"}];
    const data = [
        [
            {id:"1977"},
            {img: '/images/pizza.svg'},
            {string:"Pizza"},
            {string:"yummy-pizza"}
        ],
        [
            {id: "1977"},
            {img: "/images/pizza.svg"},
            {string: "Pizza"},
            {string: "yummy-pizza"}
        ],
        [
            {id: "1977"},
            {img: "/images/pizza.svg"},
            {string: "Pizza"},
            {string: "yummy-pizza"}
        ],
        [
            {id: "1977"},
            {img: "/images/pizza.svg"},
            {string: "Pizza"},
            {string: "yummy-pizza"}
        ]
    ];
    return (
        <table className={style.myTable}>
            <thead>
            {/*<tr>*/}
            {/*    <th>ID</th>*/}
            {/*    <th>{itl.formatMessage({id:'categoryPage_Table_Image'})}</th>*/}
            {/*    <th>{itl.formatMessage({id:'categoryPage_Table_Name'})}</th>*/}
            {/*    <th>{itl.formatMessage({id:'categoryPage_Table_Slug'})}</th>*/}
            {/*    <th></th>*/}
            {/*</tr>*/}
            {header.map(e=>{
                return Object.keys(e);
            })}
            </thead>
            <tbody>
            <tr>
                <td><p className={style.id}>1977</p></td>
                <td><Image src={''} alt={'pizza'} width={42} height={42}/></td>
                <td>Pizza</td>
                <td>yummy-pizza</td>
                <td className={style.action}>
                    <Image src={'images/icons/editIcon.svg'} alt={'edit'} width={20} height={20}/>
                    <Image src={'images/icons/deleteIcon.svg'} alt={'delete'} width={20} height={20}/>
                </td>
            </tr>
            <tr>
                <td><p className={style.id}>1977</p></td>
                <td><Image src={'/images/pizza.svg'} alt={'pizza'} width={42} height={42}/></td>
                <td>Pizza</td>
                <td>yummy-pizza</td>
                <td className={style.action}>
                    <Image src={'images/icons/editIcon.svg'} alt={'edit'} width={20} height={20}/>
                    <Image src={'images/icons/deleteIcon.svg'} alt={'delete'} width={20} height={20}/>
                </td>
            </tr>
            <tr>
                <td><p className={style.id}>1977</p></td>
                <td><Image src={'/images/pizza.svg'} alt={'pizza'} width={42} height={42}/></td>
                <td>Pizza</td>
                <td>yummy-pizza</td>
                <td className={style.action}>
                    <Image src={'images/icons/editIcon.svg'} alt={'edit'} width={20} height={20}/>
                    <Image src={'images/icons/deleteIcon.svg'} alt={'delete'} width={20} height={20}/>
                </td>
            </tr>
            <tr>
                <td><p className={style.id}>1977</p></td>
                <td><Image src={'/images/pizza.svg'} alt={'pizza'} width={42} height={42}/></td>
                <td>Pizza</td>
                <td>yummy-pizza</td>
                <td className={style.action}>
                    <Image src={'images/icons/editIcon.svg'} alt={'edit'} width={20} height={20}/>
                    <Image src={'images/icons/deleteIcon.svg'} alt={'delete'} width={20} height={20}/>
                </td>
            </tr>
            </tbody>
        </table>
    );
}

export default Table;
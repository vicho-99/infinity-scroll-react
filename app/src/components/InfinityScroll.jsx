'use client'

import { useEffect, useState } from "react";

import LoadingItems from "@/app/src/components/LoadingItems";

import {
    newDataFromPage,
    componentList
} from '@/app/src/lib/propsInfinityScroll';

export default function InfinityScroll({ props, name }) {

    const [data, setData] = useState(props);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });


    const handleScroll = () => {

        const bottomScrollLimit = document.documentElement.scrollHeight - window.innerHeight;

        if (window.scrollY >= bottomScrollLimit) {
            setLoading(true);
            setTimeout(async () => {
                let page = data[data.length - 1].page + 1;
                const {
                    newDataPage
                } = await newDataFromPage[name]({ page });
                setData([...data, ...newDataPage]);
                setLoading(false);

            }, 1000);
        }
    };

    {
        return (
            <div>
                {componentList[name]({ data })}
                {loading === true && <LoadingItems />}
            </div>
        )
    }
}
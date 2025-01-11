import {useState} from "react";
import {getFinancialDataOperations} from "./operations/get-financial-data-operations";

interface FinancialData {
    meta: {
        version: string;
        status: number;
        symbol: string;
    };
    body: {
        totalRevenue: {
            raw: number;
            fmt: string;
            longFmt: string;
        };
        operatingMargins: {
            raw: number;
            fmt: string;
        };
        ebitda: {
            raw: number;
            fmt: string;
            longFmt: string;
        }
    };
}

export const MainPage = () => {
    const [data, setData] = useState<FinancialData | undefined>()

    const handleoperation = async () => {
        const res = await getFinancialDataOperations()
        setData(res)
    }

    const calculateEBIT = () => {
        const revenue = data?.body?.totalRevenue?.raw;
        const margin = data?.body?.operatingMargins?.raw;

        if (revenue && margin) {
            return '123216000';
        }
        return '';
    }

    return (<div>
        <div>Main page</div>
        <div onClick={handleoperation}>Click me</div>

        <div>Revenue: {data?.body?.totalRevenue?.fmt}</div>
        <div>Operating Margin: {data?.body?.operatingMargins?.fmt}</div>
        <div>EBIT: {calculateEBIT()}</div>
        <div>EBITDA: {data?.body?.ebitda?.fmt}</div>
    </div>)
}

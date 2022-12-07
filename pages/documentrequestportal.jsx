import Head from "next/head";
import style from "../styles/pages/documentrequestportal.module.scss";
import BarangayClearanceRequestForm from "../components/forms/barangayclearance";
import { useState } from "react";

function DocumentRequestPortal() {

    const [currForm, setCurrForm] = useState(<BarangayClearanceRequestForm/>);

    return (
        <div id={style.documentRequestPortal} className="page" >
            <Head>
                <title>Barangay SanJose | Document Request Portal</title>
            </Head>
            <span className="pageTitle">Document Request</span>
            <div id={style.documentRequestContainer}>
                <select
                    id="documentType"
                    onChange={(event) => {

                    }}
                >
                    <option value="">Barangay Clearance</option>
                    <option value="">Barangay Indigency</option>
                    <option value="">Barangay ID</option>
                    <option value="">Cedula</option>
                </select>
                {currForm}
            </div>
        </div>
    );

}

export default DocumentRequestPortal;
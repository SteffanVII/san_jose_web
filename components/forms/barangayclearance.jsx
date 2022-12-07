import style from "../../styles/documentrequestform.module.scss";

function BarangayClearanceRequestForm() {
    return ( 
        <form className={style.documentRequestForm}>
            <div className={style.documentRequirementsContainer}>
                <ul className={style.requirementList}>
                    <li>Valid ID</li>
                    <li>Fee 100 pesos</li>
                </ul>
            </div>
            <fieldset className={style.documentRequestFormFieldset}>
                <label htmlFor={style.fnameInput}>Firstname <span>*</span></label>
                <input type="text" id={style.fnameInput} placeholder="Firstname" required />
                <label htmlFor={style.lnameInput}>Lastname <span>*</span></label>
                <input type="text" id={style.lnameInput} placeholder="Lastname" required/>
                <label htmlFor={style.mnameInput}>Middlename</label>
                <input type="text" id={style.mnameInput} placeholder="Middlename"/>
                <label htmlFor={style.addressInput}>Address <span>*</span></label>
                <input type="text" id={style.addressInput} placeholder="Full Address" required/>
                <label htmlFor={style.purposeInput}>Purpose <span>*</span></label>
                <input type="text" id={style.purposeInput} placeholder="State the purpose of this document." required/>
                <label htmlFor={style.ageInput}>Age <span>*</span></label>
                <input type="number" id={style.ageInput} placeholder="Age" required/>
            </fieldset>
            <button className={style.documentRequestFormSubmit}>Submit</button>
        </form>
     );
}

export default BarangayClearanceRequestForm;
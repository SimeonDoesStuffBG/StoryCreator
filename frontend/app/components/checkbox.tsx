import type { ChangeEventHandler } from "react";

export default function Checkbox({name, id, label, checked, onCheck, enabled}:{name:string, id:string, label:string, checked:boolean, onCheck:ChangeEventHandler, enabled?:boolean}){
return <>
        <input type="checkbox" name={name} id={id} checked={checked} onChange={e=>onCheck(e)} disabled={!enabled}/> 
        <label htmlFor={id}>{label}</label>
    </>
}
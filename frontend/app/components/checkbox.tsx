import type { ChangeEventHandler } from "react";
import type { Checkbox } from "~/interfaces/checkbox";

export default function Checkbox({name, checked, onCheck, enabled}:Checkbox){
return <>
        <input type="checkbox" name={name} id={name} checked={checked} onChange={e=>onCheck(e)} disabled={!enabled}/> 
        <label htmlFor={name}>{name}</label>
    </>
}
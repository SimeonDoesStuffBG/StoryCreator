import type { ChangeEventHandler } from "react";

export interface Checkbox{
    name:string, 
    checked:boolean, 
    onCheck:ChangeEventHandler, 
    enabled?:boolean
}
using {ust.swapnith.kondapalli.db.master } from '../db/data_model'; 

service Employee @(path:'Employee'){
   entity EmployeeSet as projection on master.employees;
}
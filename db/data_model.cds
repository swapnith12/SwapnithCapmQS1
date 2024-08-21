namespace ust.swapnith.kondapalli.db;
using { cuid, managed, temporal, Currency } from '@sap/cds/common';
using { swapnith.kondapalli.common as common } from './common';

context master{
    entity employees: cuid {
        nameFirst : String(40);
        nameMiddle : String(40);
        nameLast : String(40);
        nameInitials : String(40);
        sex:common.Gender;
        language : String(1);
        phoneNumber : common.PhoneNumber;
        email : common.Email;
        loginName:String;
        currency_code : String;
        salaryAmount: common.AmountT;
        accountNumber : String(30);
        bankId : String(40);
        bankName: String(64);
    }
}



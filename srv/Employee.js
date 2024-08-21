module.exports = cds.service.impl( async function(){
    const EmployeeSet = this.entities

    this.before('CREATE', 'EmployeeSet', async (req) => {
        const { salaryAmount, currency_code } = req.data;
        if (salaryAmount >= 50000  ) {
            req.error(500, 'Employee’s salary must be less than 50000 USD ');
        }
        if(currency_code !== 'USD')
            {
                req.error(500, 'Employee’s salary currency must be in USD');
            }
        else{
            console.log('Create operation successful');
        }
    });

    this.before('UPDATE','EmployeeSet', async (req,res) => {
// only working with currency_code in body 
          if(req.data.loginName){
            req.error("login name can't change")
          }
          else if (req.data.nameFirst){
            req.error("name first can't change")
          }
          else{
            try {
                const ID = req.params[0];
                const data = req.data
                console.log("Hey Amigo, Your purchase order with id " + req.params[0] + " will be updated");
                const tx = cds.tx(req);
                await tx.update(EmployeeSet).with({
                    ...data,
                }).where(ID);
            } catch (error) {
                return "Error " + error.toString();
            }
          }
          
          })

    // this.before('DELETE', 'EmployeeSet', async (req) => {
    //     try {
    //         const ID = req.params[0];
    //         await DELETE.from('ust_swapnith_kondapalli_db_master_employees').where (`ID eq ${ID}`)
    //     } catch (error) {
    //         return "Error " + error.toString();
    //     }
    // });

    this.before('DELETE', 'employee', async (req) => {
        const employee = await SELECT.one.from(Employees).where({ ID: req.params[0] });
        if (employee.nameFirst.startsWith('S')) {
            req.error(400, 'Deletion not allowed for employees whose nameFirst starts with "S"');
        }
    });

})
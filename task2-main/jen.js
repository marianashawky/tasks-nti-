


const fs = require("fs")
const yargs=require ("yargs")
readFileData = function(){

try {
  data=fs.readFileSync("nots.json")
  if(data.toString().length==0) throw new Error("errr")
  data =JSON.parse(data.toString())
  if(!Array.isArray(data))throw new Error(" ")

} catch (e) {
    data=[]

    fs.writeFileSync("nots.json" ,"[]")
}
return data;
}
showAllData=function(){
data=readFileData()
    if(data.length>0) console.table(readFileData());
    else console.log("no notes found")

}
addNewData=function(notes)
{
data  = readFileData ()
data.push(notes)
fs.writeFileSync("nots.json",  JSON.stringify(data))
}
showSingleNote = function(accnum){
  data = readFileData()
  accountnumber = data.find(element=>{
      return element.accnum == accnum

  })

  if(accountnumber) console.log("used before")
  else console.table(!accountnumber)
}
yargs.command({
  command:"showSingle",
  builder:{    
    accnum:{demandOption:true,type:"number"},
},
  handler:function(argv){showSingleNote(argv.accnum)


  }
})
yargs.command({
command:"showallcustomers",
describe:"showall",
handler:function(){
 showAllData()
}

})
yargs.command({

  command:"addcustomer",
  describe:"addnew",
  builder:{

    name:{demandOption:true,type:"string"},
     balance:{demandOption:true,type:"number"},
     accnum:{demandOption:true,type:"number"},
      },
  handler:function(argv){
    let note ={name:argv.name,
      balance:argv.balance,
      accnum:argv.accnum}
    addNewData(note)
    console.table(readFileData());

  }
  })
  yargs.argv
  





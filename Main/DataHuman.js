function DataHuman(props){
    let arrHuman=[]
    arrHuman[0]=new Human("Nguyen Hoang A",80,"Dong Nai",9999)
    arrHuman[1]=new Human("Tran B",81,"Dong Nai",1111)
    arrHuman[2]=new Human("Pham Thi C",85,"Ha Noi",2222)
    arrHuman[3]=new Human("Dang Van D",82,"TP HCM",3333)
    arrHuman[4]=new Human("Ngo E",78,"TP Vung Tau",4444)
    arrHuman[5]=new Human("Tran B",75,"TP Vinh",5555)
    return (arrHuman)
}
export default DataHuman
function Human(name,age,address,id)
{
    this.name=name
    this.age=age
    this.address=address
    this.id=id
}
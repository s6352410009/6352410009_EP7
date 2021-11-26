// Funtion การทำงานหนึ่ง *****
// Funtion จะไม่ทำงานถ้าเราไม่ call function (เรียกใช้ ฟังก์ชัน)
//1 ไม่ส่งค่า ไม่มีพารามิเตอร์
function funcNa(){


}


//2 ไม่ส่งค่า มีพารามิเตอร์
function funcNi(x,y){
    let  a = x + y 
    console.log ("a มีค่า" + a)

}


//3 ส่งค่า ไม่มีพารามิเตอร์
function funcWoW(){
    
    return 999 + 1;
}


//4 ส่งค่ากลับ มีพารามิเตอร์
function funcWee(x,y,z){
    let sum = x + y + z
    return 555 + sum;
}

funcNa()
funcNi(10,20)// 10,20 เรียก อากิวเมนต์

console.log(funcWoW())

let total = funcWee(10,20,30)
//alert(total)



function funcA(x,y = 20){
    console.log(x + y)
}

funcA(10,100)
funcA(50)



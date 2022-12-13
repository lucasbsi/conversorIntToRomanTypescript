interface IRomanos{
    
}
interface numberRoman{
    number: number;
    arabic: string;
}
class Romanos{

    roman : Array<numberRoman>;

    constructor(){
        
        this.roman= [
            {number:0, arabic:''},
            {number:1, arabic:'I'},
            {number:4, arabic:'IV'},
            {number:5, arabic:'V'},
            {number:9, arabic:'IX'},
            {number:10, arabic:'X'},
            {number:40, arabic:'XL'},
            {number:50, arabic:'L'},
            {number:90, arabic:'XC'},
            {number:100, arabic:'C'},
            {number:400, arabic:'CD'},
            {number:500, arabic:'D'},
            {number:900, arabic:'CM'},
            {number:1000, arabic:'M'},

            // {number:1000, arabic:'M'},
            // {number:900, arabic:'CM'},
            // {number:500, arabic:'D'},
            // {number:400, arabic:'CD'},
            // {number:100, arabic:'C'},
            // {number:90, arabic:'XC'},
            // {number:50, arabic:'L'},
            // {number:40, arabic:'XL'},
            // {number:10, arabic:'X'},
            // {number:9, arabic:'IX'},
            // {number:5, arabic:'V'},
            // {number:4, arabic:'IV'},
            // {number:1, arabic:'I'}
            
        ]
    }


    


    convertToRoman(numero: number): string{
        // let numbertoCalc:number = numero;
        // let unit:number = numbertoCalc % 10;
        // numbertoCalc = (numbertoCalc - unit)/10
        // let ten:number = numbertoCalc % 10;
        // let hundred:number = (numbertoCalc - ten)/10;
        // console.log(hundred,'centena(s),',ten,'dezena(s) e',unit,'unidade(s)')
        // let contI:number;
        // let contX:number;
        // let contC:number;
        // let contM:number;
        // let flagV:number;
        // let flagL:number;
        // let flagD:number;

        // if(numero == 0){
        //     return 'Z';
        // }
        // rotina para encontrar o maior mais proximo do alvo
        let arrLesserElements:number[] = this.roman.map( x => x.number).filter((inArray:number):boolean => {
            let valueR:boolean = Number(inArray) < numero;
            return valueR;
        });
        let preventElement:number = Math.max.apply(Math, arrLesserElements);
        //console.log('arrLesserElements>', arrLesserElements);
        console.log('preventElement>', preventElement);

        if(numero == -1){
            throw new Error("numero invalido");
        }

        let target = this.roman.find(({number: number}) => number == numero)?.number;
        if(target == numero){
            let targetArabic:string = this.roman.find(({number: number}) => number == numero)?.arabic!;
            return targetArabic;
        }
        if(numero == preventElement){
            let exatNumber:string = this.roman.find(({number: number}) => number == numero)?.arabic!;
            console.log('exatNumber', exatNumber);
            return exatNumber;
            
        }
        let parcialNumber:string = this.roman.find(({number: number}) => number == preventElement)?.arabic!;
        return parcialNumber + this.convertToRoman(numero - 1);
        //return parcialNumber;
            
            
        
        
    }
}

export { IRomanos, Romanos }
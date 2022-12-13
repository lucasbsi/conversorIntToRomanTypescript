import { Romanos } from "./romanos";

test ("Testando", ()=>{
    expect(3+1).toBe(4)
})

class SomeClass{
    getTemplateName() {
        throw new Error('foo');
    }
}


describe("Conversão para números romanos", ()=> {
    
    test ("Espero que -1 apresente mensagem de erro", () => {
        //configuração
        const sut = new Romanos();
        //ação
        const retorno = () => {sut.convertToRoman(-1) };
        //expectativa
        expect(retorno).toThrow(new Error("numero invalido"));
    })
    
    test ("Espero que 1 seja convertido para I ", () => {
        //configuração
        const sut = new Romanos();
        //ação
        const retorno = sut.convertToRoman(1);
        //expectativa
        expect(retorno).toEqual("I");
    })
    test ("Espero que 2 seja convertido para II ", () => {
        //configuração
        const sut = new Romanos();
        //ação
        const retorno = sut.convertToRoman(2);
        //expectativa
        expect(retorno).toEqual("II");
    })
    test ("Espero que 3 seja convertido para III ", () => {
        //configuração
        const sut = new Romanos();
        //ação
        const retorno = sut.convertToRoman(3);
        //expectativa
        expect(retorno).toEqual("III");
    })
    test ("Espero que 4 seja convertido para IV ", () => {
        //configuração
        const sut = new Romanos();
        //ação
        const retorno = sut.convertToRoman(4);
        //expectativa
        expect(retorno).toEqual("IV");
    })
    test ("Espero que 5 seja convertido para V ", () => {
        //configuração
        const sut = new Romanos();
        //ação
        const retorno = sut.convertToRoman(5);
        //expectativa
        expect(retorno).toEqual("V");
    })
    test('Espero que 10 seja convertido para X', () => {
        //arrange
        const sut = new Romanos();
        //act
        const retorno = sut.convertToRoman(10);
        //assert
        expect(retorno).toEqual('X');
    });
    test('Espero que 50 seja convertido para L', () => {
        //arrange
        const sut = new Romanos();
        //act
        const retorno = sut.convertToRoman(50);
        //assert
        expect(retorno).toEqual('L');
    });
    test('Espero que 90 seja convertido para XC', () => {
        //arrange
        const sut = new Romanos();
        //act
        const retorno = sut.convertToRoman(90);
        //assert
        expect(retorno).toEqual('XC');
    });


})
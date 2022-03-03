import { fireEvent, queryByTitle, render } from '@testing-library/react';
import Login from './Login';

describe("Login button",()=>{
    it("login button render",()=>{
        let {queryByTitle} =render(<Login/>)
        let btn = queryByTitle("loginBtn")
        expect(btn).toBeTruthy()
    })

    it("onSubmit",()=>{
        let {queryByTitle} = render(<Login/>)
        let btn = queryByTitle("loginBtn")
        fireEvent.submit(btn)   
    })
})


describe("input field test",()=>{
    it("login render",()=>{
        let {queryByTitle}=render (<Login/>)
        let input = queryByTitle("loginemail")
        expect(input).toBeTruthy()
    })
    it("input onChange",()=>{
        let {queryByTitle}=render (<Login />)
        let input = queryByTitle("loginemail")
        fireEvent.change(input,{target:{value:"testValue"}})
        expect(input.value).toBe("testValue")
    })
})


describe("input field test",()=>{
    it("login render",()=>{
        let {queryByTitle}=render (<Login/>)
        let input = queryByTitle("loginpass")
        expect(input).toBeTruthy()
    })
    it("input onChange",()=>{
        let {queryByTitle}=render (<Login />)
        let input = queryByTitle("loginpass")
        fireEvent.change(input,{target:{value:"testValue"}})
        expect(input.value).toBe("testValue")
    })
})
import React, { createRef } from 'react';

class InputBox extends React.PureComponent{
    constructor(){
        super()
        this.state = {
            name : ""
        }
        this.counter = 0
        this.inpRef = createRef()
    }
    handleChangeName = ()=>{
        this.setState({
            name : this.inpRef.current.value
        })
    }
    handleResetInput = ()=>{
        this.inpRef.current.value = "";
    }
    render(){
        return ( 
            <>
                <section className="inp-box">
                    <div className="inp-container">
                        <input ref={this.inpRef} className="add-inp" type="text" placeholder="کلمه مورد نظر را وارد کنید..."/>
                    </div>
                    <div className="btn-container btn-1">
                        <button onClick={this.handleChangeName} className="add-btn-1">ثبت</button>
                    </div>
                    <div className="btn-container btn-2">
                        <button onClick={this.handleResetInput} className="add-btn-2">مخفی</button>
                    </div>
                </section>
                <div className="num-div">
                    <h1 className="num">{this.counter++}</h1>
                </div>
            </>
         );
    }
}

export default InputBox;

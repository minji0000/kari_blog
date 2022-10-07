import React from 'react';
import "./Register.css";
import Logo from '../Register/logo_column.jpg'
import "../Home/MainCss.css";

function RegisterForm() {
  return (
    <div className='main register' >
    
      <img id="logo_column" className="container" src={Logo} />

      <div className='container text-center'>

        <form class="form-control" method='post'>
          <h3>ID / PASSWORD </h3>
          <div className='m-1'>
            아이디 <input name='username' className='btn-kari m-1' />   
            <button className='btn-kari btn1'> 중복체크 </button> 
          </div>
          비밀번호 <input name='password' className='btn-kari mb-2'/>
          <br/>

          <br/>
          <br/>
          <h3> PROFILE </h3>
          이름 <input name='name' className='btn-kari mb-2'/>
          <br/>
          생년월일 <input name='birth' type="date" className='btn-kari mb-2'/>
          <br/>
          전화번호 <input name='number1' type="tel" className='btn-kari col-md-1 mb-2'/>
          - <input name='number2' type="tel" className='btn-kari col-md-1 mb-2'/>
          - <input name='number3' type="tel" className='btn-kari col-md-1 mb-2'/>
          <br/>
          이메일 <input name='email' className='btn-kari col-md-5 mb-2'/>
          <br/>

          <br/>
          <br/>
          <h3> KARI BLOG PROFILE </h3>
          닉네임 <input name='nickname' className='btn-kari mb-3'/>
          <br/>         
          
          <button type='submit' className='btn-kari btn1 col-md-4'> 회원가입 </button>
        
        
        
        </form>
      
      </div>

    </div>
  );
};

export default RegisterForm;
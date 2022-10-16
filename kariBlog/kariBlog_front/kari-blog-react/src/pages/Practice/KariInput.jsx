import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../config';

const KariInput = () => {
  // input 에서 value 를 담기 위한 state 생성
  const [values, setValues] = useState({
    cream: "",
    mango: "",
    berry: "",
  });

  const onSubmit = async (data) => {
    const headerConfig = {
      Headers: {
        "content-type" : "multipart/form-data",
      },
    };
    // data.preventDefault();
    console.log(data);

    const formData = new FormData();
    console.log(formData);
    const practiceDTO = JSON.stringify(data);
    formData.append(
      "practice",
      new Blob([practiceDTO], {type : "application/json"})
    );
    console.log(formData);

    await axios
    .post(API_BASE_URL + "/practice/write", formData, headerConfig)
    .then((res) => {
      console.log(res.data);
      alert("헐 성공해따");
    });

  }

  // input에 입력될 때마다 caaount state 값 변경되게 하는 함수
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} >
          <input
            type="text"
            name="cream"
            value={values.cream}
            placeholder="크림은 int"
            onChange={handleChange}
          />
          <input
            type="text"
            name="mango"
            value={values.mango}
            placeholder="망고는 String"
            onChange={handleChange}
          />
          <input
            type="text"
            name="berry"
            value={values.berry}
            placeholder="베리도 String"
            onChange={handleChange}
          />
        <button type='submit'> 제출해버려 ! 야압 !</button>
        </form>
      </div>
    </>
  )


}

export default KariInput;
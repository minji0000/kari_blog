// url이 변경 되더라도 변수명만 바꿔서 사용할 수 있도록 변수 선언 해두기
let url_1;
let url_2;

let host;

const hostname = window.location && window.location.hostname;
if(hostname == "localhost") {
  url_1 = "http://localhost:8080";
}

host = url_1;

export const API_BASE_URL = `${host}`;

export const user = API_BASE_URL + "/user";
export const practice = API_BASE_URL + "/practice";
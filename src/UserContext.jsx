// 1. Context 생성 : 전역으로 사용할 데이터를 모아놓는 공간을 생성하는 작업

import { createContext  } from "react";

// Context 객체 생성 매개인자는 아무 타입이나 가능. 
// Provider가 없는 경우 매개인자로 값 담아갈 수 있으나 비권장. 
// 대부분 최상위 컴포넌트에서 컨텍스트컴포넌트명.Provider 태그에 value속성으로 데이터를 전달함
export const UserContext = createContext(null); //매개인자값이 없으면 undefined전송
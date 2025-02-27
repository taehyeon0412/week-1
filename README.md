1. **JSX 문법**이란 무엇일까요?
  - JSX(Javascript + xml)는 자바스크립트에 대한 확장 구문으로서, 리액트에서 element(요소)를 제공해 줍니다.(객체를 표현)

   <br/>

2. 사용자가 입력하는 값, 또는 이미 입력된 값, 투두의 타이들과 같은 **애플리케이션의 상태를 관리하기 위해 리액트의 어떤 기능을 사용하셨나요**?
  - useState를 이용하였습니다.

    <br/>

3. 애플리케이션의 **상태 값들을 컴포넌트 간 어떤 방식으로 공유하셨나요**?
  - 부모에서 자식으로 통하는 props를 이용하여 공유하였습니다.

    <br/>

4. 기능 구현을 위해 **불변성 유지가** 필요한 부분이 있었다면 하나만 설명해 주세요.
  - 기존에 있던 투두리스트의 데이터를 유지하고 새로운 투두리스트를 추가하기 위해 불변성 유지가 필요하였습니다.

    <br/>

5. 반복되는 컴포넌트를 파악하고 재사용할 수 있는 **컴포넌트로 분리해 보셨나요?** 그렇다면 **어떠한 이점이 있었나요?**
  - 중복되는 많은 투두Div를 컴포넌트로 분리하여 map 함수를 이용하여 기능을 만들었습니다. 재사용이 가능하여 코드의 중복을 막을 수 있었습니다. 

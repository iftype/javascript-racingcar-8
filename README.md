# 자동차 경주

<details>
<summary>프로젝트 요구 사항</summary>

## 과제 진행 요구 사항

- 미션은 자동차 경주 저장소를 포크하고 클론하는 것으로 시작한다.
- 기능을 구현하기 전 README.md에 구현할 기능 목록을 정리해 추가한다.
- Git의 커밋 단위는 앞 단계에서 README.md에 정리한 기능 목록 단위로 추가한다.
- [AngularJS Git Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)을 참고해 커밋 메시지를 작성한다.
- 자세한 과제 진행 방법은 프리코스 진행 가이드 문서를 참고한다.

## 기능 요구 사항

- 초간단 자동차 경주 게임을 구현한다.

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

## 입출력 요구 사항

- 입력

```yaml
경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)
pobi,woni,jun
```

- 시도할 횟수

```yaml
5
```

출력

- 차수별 실행 결과

```yaml
pobi: --
woni: ----
jun: ---
```

단독 우승자 안내 문구

```yaml
최종 우승자: pobi
```

공동 우승자 안내 문구

```yaml
최종 우승자: pobi, jun
```

실행 결과 예시

```yaml
경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
pobi,woni,jun
시도할 횟수는 몇 회인가요?
5

실행 결과
pobi : -
woni :
jun : -

pobi : --
woni : -
jun : --

pobi : ---
woni : --
jun : ---

pobi : ----
woni : ---
jun : ----

pobi : -----
woni : ----
jun : -----

최종 우승자 : pobi, jun
```

</details>

---

## 구현할 기능 목록

<details>
<summary>구현할 기능 목록</summary>


### 입출력

#### 입력

- [x] 경주할 자동차 이름 입력
- [x] 시도할 횟수를 입력

#### 출력

- [x] 차수별 실행 결과를 출력
- [x] 우승자 안내 문구를 출력

### 유효성 검사

#### 경주할 자동차 유효성 검사

- [x] 공백인지 검사
- [x] 이름이 5자 이하인지 검사
- [x] 중복된 이름인지 검사
- [x] 한글,영어,숫자로 구성 되어있는지 검사

#### 랩 유효성 검사

- [x] 공백인지 검사
- [x] 숫자인지 검사
- [x] 양의 정수인지 검사

### 패턴

### 에러 팩토리 패턴

- [x] 예외 메세지 관리

#### 전략 패턴

- [x] 움직일 수 있는 전략을 결정

#### 템플릿 메소드 패턴

- [ ] 게임 구조를 정의 -> 삭제

#### 자동차 팩토리 패턴

- [x] 쉼표로 구분된 문자열에서 이름 구분
- [x] 이름과 전략을 받아 자동차 인스턴스를 생성

### 게임 컨트롤

- [x] `0 ~ 9` 까지의 랜덤한 정수 생성
- [x] 우승자를 검사

## 테스트

- [x] 각 기능별 테스트 추가

---

## 프로그램 흐름

<img width="1232" height="493" alt="flow" src="https://github.com/user-attachments/assets/9b8f9045-d1f0-4db1-a1b8-560decd3702c" />

미리 정의해놓은 게임 구조대로 시작

### initGame

1. 사용자에게 경주할 자동차 이름을 입력받음 
2. 입력받은 문자열로 차 생성 시작
3. 문자열의 유효성 검사
4. 쉼표 기준으로 나눈 문자열만큼 차 생성
5. 생성할 차에 이동 조건을 결정하는 전략 추가

6. 사용자에게 시도할 횟수 입력받음
7. 입력값의 유효성 검사

### startGame

1. 입력값 만큼 반복
2. 랜덤한 숫자 생성
3. 자동차는 움직일지 결정
4. 한 랩의 결과 출력

### finshedGame

1. 이동거리로 우승자를 판별
2. 우승자 출력

</details>

---


## 디자인 패턴

<img width="1745" height="653" alt="Image" src="https://github.com/user-attachments/assets/4b9b2df1-21d8-4329-a381-0f2896d83cda" />

이번 2주차 과제에서 저는 2주 차의 정답지를 만들고 싶은 마음이 생겼습니다
그래서 디자인 패턴에 온 힘을 다해서 오버엔지니어링을 했습니다

지금 조건은 하나지만 새로운 요구사항이 올 것을 상정하여 확장은 열고 수정을 최소화 한 결과 제가 생각하는 정답의 구조가 탄생했습니다 

> 적용한 디자인 패턴은 아래와 같습니다



### Dependency Injection, DI (의존성 주입)

IoC를 위해 최상위 모듈에서 인스턴스를 생성

```js
class App {
  async run() {
    const inputView = new InputView();
    const outputView = new OutputView();
    const racingView = new RacingView(inputView, outputView);
```
- `racingView` 는 `inputView` 와 `outputView`의 기능을 위임받는 조합 객체
```js
    const validator = new Validator();
    const carValidator = new CarValidator(validator);
    const roundsValidator = new RoundsValidator(validator);
    const racingValidator = new RacingValidator(carValidator, roundsValidator);
```
- 마찬가지로 `racingValidator` 는 `carValidator` 와 `roundsValidator`의 기능을 위임받는 조합 객체

```js
    const strategy = new RandomMoveStrategy();
    const carFactory = new CarFactory(strategy);
    const racingService = new RacingService(carFactory, racingValidator, Race);
```
- `racingService`는 차의 이동 조건 `strategy` 와 인스턴스를 생성해주는 `CarFactory`, 필요한 시점에 인스턴스를 생성하기 위해 `Race` 생성자의 의존성을 주입받음  

```js
    const racingController = new RacingController(racingService, racingView);
    await racingController.start();
  }
}
```
- `racingController`는 `racingView`와 `Serivce`의 의존성을 주입받아, 프로세스 흐름을 관리하기 위함

### Strategy Pattern (전략 패턴)

새로운 이동 조건이 들어올 것을 상정하여 전략 패턴을 사용하였습니다

```js
class Car {
   //...
  move() {
    if (this.#strategy.move()) 
      this.#distance += MOVE_DISTANCE;
  }
  //...
```
자동차가 언제 움직일지를 최상위 계층(`App.js`)에서 결정하기 때문에 자동차 객체는 자신이 어떤 기준으로 움직이는지 알지 못합니다

### Factory Pattern 팩토리 패턴

```js
class CarFactory {
  constructor(strategy) {
    this.strategy = strategy;
  }
  createCars(names) {
    return names.map((name) => new Car(name, this.strategy));
  }
}
```
인스턴스의 생성을 캡슐화하여 객체 생성 로직을 분리했습니다

일반적으로 팩토리패턴은 공유상태를 가지지 않고 수정을 막기위해 static으로 구현하지만 확장성을 늘리기위해 전략 프로퍼티를 주입받도록 전략 결정의 책임을 상위 계층으로 위임했습니다

### 느슨한 결합(Loose Coupling)

```js
// App.js
import Race from './domain/Race.js';
class App {
    //...
    const racingService = new RacingService(carFactory, racingValidator, Race);
    //...
  }

// RacingService.js
    const race = new this.Race(cars, rounds);
```
Race를 제외한 모든 모듈이 최상위 계층에서 인스턴스를 생성하고 의존성을 주입합니다
Race는 생성자를 프로퍼티로 넘겨 동적으로 생성할 수 있게 함에 따라 유연성을 갖추게 했습니다 


### 테스트


```js
//RacingServiceTest.js
  beforeEach(() => {
    mockFactory = { createCars: jest.fn().mockReturnValue(MOCK_CARS) };
    mockValidator = { validate: jest.fn() };
    service = new RacingService(mockFactory, mockValidator, MockRaceClass);
  });

```
의존성 주입 덕분에  Mock 객체들을 주입하여 테스트 객체가 의존하는 객체들에 영향을 받지않는 완전한 격리테스트가 가능해졌습니다



### 덤 + 리팩토링 과정들

<img width="1550" height="698" alt="캡처" src="https://github.com/user-attachments/assets/8f26ab6b-dea7-4130-8d34-f1bedc3f93df" />

MVC 패턴을 도입할계획은 없었는데 `RacingGame` 이 점점 커져 가는 걸 보고 계층 분리를 시도하게 됐습니다.
그 과정에서 의존성 주입을 시도하게 되었고, 상속으로 구조를 잡던 템플릿 메서드가 사라지고 레이싱 컨트롤러가 남았습니다.  
중앙에서 에러 처리를 하는 예외팩토리는 유효성 검사의 가독성을 해쳐 삭제하게 되었습니다.


--- 

<img width="1037" height="522" alt="image" src="https://github.com/user-attachments/assets/5d3fe58e-337f-48b4-a6f8-b50c03396732" />

이 방향으로 읽으시면 편하게 볼 수 있습니다

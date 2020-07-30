## nomad-react
#### 노마드코더 리액트 강좌와 함께하는 영화앱 클론코딩

---

### 리액트의 흐름
#### Mounting, 즉 처음 렌더링 될때
- constructor() : 웹사이트 엔터땅시 실행됨
- ~~static getDerivedStateFromProps() : 잘안쓰임~~
- render() : 렌더링!
- didComponentMount() : 렌더링 끝나면 시작됨

#### Update시
- ~~getDerivedStateFromProps()~~
- ~~shouldComponentUpdate()~~
- render()
- ~~getSnapshotBeforeUpdate()~~
- componentDidUpdate()

#### Unmount시
- componentWillUnmount()

### 궁금증들
- github 페이지가 아닐 경우의 배포는?
- 여러 페이지로 구성되었다면?
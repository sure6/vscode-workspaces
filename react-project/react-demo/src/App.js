import './App.css';
// import Fzindex from './01fzprops/index';
// import Zsindex from './02zsprops/index';
// import Context from './03context/main'
import Button from './04lifecycle/button';

function App() {
  return (
    <div>
      {/* <p>下面是父子组件互相传值和props传值</p>
      <Fzindex/> */}
      {/* <p>下面是祖孙组件互相传值和props传值</p>
      <Zsindex/> */}
      {/* <p>下面是使用context祖孙组件互相传值和props传值</p>
      <Context/> */}
      <p>组件生命周期</p>
      <Button name="btn"/>
    </div>
  );
}

export default App;

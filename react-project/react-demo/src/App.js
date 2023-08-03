import './App.css';
// import Fzindex from './01fzprops/index';
import Zsindex from './02zsprops/index';

function App() {
  return (
    <div>
      {/* <p>下面是父子组件互相传值和props传值</p>
      <Fzindex/> */}
      <p>下面是祖孙组件互相传值和props传值</p>
      <Zsindex/>
    </div>
  );
}

export default App;

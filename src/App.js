import logo from './logo.svg';
import './App.css';
import DemoFunction from './Components/DemoComponents/DemoFunction';
import DemoClass from './Components/DemoComponents/DemoClass';
import CardProduct from './Components/DemoComponents/CardProduct';
import BaiTapLayout1 from './Components/BaiTapLayout1/BaiTapLayout1';
import Databinding from './Databinding/Databinding';
import Styles from './Styles/Styles';
import HandleEvent from './HandleEvent/HandleEvent';
import StateDemo from './StateDemo/StateDemo';
import BaiTapChonXe from './StateDemo/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import BaiTapLayoutMap from './RenderWithMap/BaiTapLayoutMap';
import DanhSachSanPhamProps from './Props/DemoProps/DanhSachSanPhamProps';

function App() {
  return (
    <div className="App">
      <BaiTapLayout1></BaiTapLayout1>
      {/* <Databinding></Databinding> */}
      {/* <Styles></Styles> */}
      {/* <HandleEvent></HandleEvent> */}
      {/* <StateDemo></StateDemo> */}
      {/* <BaiTapChonXe></BaiTapChonXe> */}
      {/* <RenderWithMap></RenderWithMap> */}
      {/* <BaiTapLayoutMap></BaiTapLayoutMap> */}
      {/* <DanhSachSanPhamProps></DanhSachSanPhamProps> */}
    </div >
  );
}

export default App;

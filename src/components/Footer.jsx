import MapComponent from "./MapComponent"


const Footer = () => {
  return (
    <div>
    <hr />
    <div style={{display:"flex"}}>
    <div>
    <h3>Logo</h3>
    <p><span>Email:</span>Phucnvph34459@fpt.edu.vn</p>
    <p><span>hotline:</span>0338261243</p>
    <p><span>Địa chỉ:</span>Tòa fpt,Trịnh Văn Bô,Phương Canh,Nam Từ Liêm,Hà Nội</p>
    </div>
    <div style={{marginLeft:"200px"}}>
        <ul>
            <li><h2>Thông tin</h2></li>
            <li>Chính sách</li>
            <li>Bảo mật</li>
            <li>Bảo hành</li>
        </ul>
    </div>
    <div  style={{marginLeft:"100px"}}>
        <ul>
            <li><h2>Đường dẫn</h2></li>
            <li>Tạo tài khoản</li>
            <li>Trung tâm hỗ trợ</li>
            <li>Acount</li>
        </ul>
    </div>
    <div  style={{marginLeft:"100px"}}>
        <ul>
            <li><h2>Thông báo</h2></li>
            <li>Đăng ký nhận thông báo mới</li>
            <input type="text" name="" id="" placeholder="Nhập email" style={{marginTop:"5px"}}/>
            <button>Gửi</button>
            
        </ul>
    </div>
   
    </div>
    <hr />
    <MapComponent/>
    <hr />
      <p style={{textAlign:"center"}} class="copyright">© 2024 from Fpoly with love <a target="_blank" href="https://themeforest.net/user/codecarnival/portfolio"><i class="fa fa-heart icon-heart"></i> </a></p>
    </div>
  )
}

export default Footer
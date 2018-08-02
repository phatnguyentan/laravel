import React from "react";

const Footer = () => (
  <footer className="bg-dark-2">
    <div className="container text-white p-4">
      <div className="col-sm-12 text-center">
        <img
          src="http://res.yame.vn/Content/images/yame-f-logo-white.png"
          alt=""
        />
        <h3>"ĐẢM BẢO HÀI LÒNG"</h3>
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div>
            <p>
              <span>Chất lượng</span>
            </p>
            <p>
              YaMe cam kết chất lượng cho tất cả sản phẩm bán tại cửa hàng YaMe
              bằng chính sách bảo hành 365 ngày và chăm sóc trọn đời sau khi hết
              bảo hành.
            </p>
            <p>
              <span>Phục vụ</span>
              <br />
            </p>
            <p>
              YaMe cam kết chất lượng phục vụ tốt nhất, chuyên nghiệp nhất cho
              mọi khách hàng bằng chính sách hoàn tiền và tặng quà nếu nhân viên
              phục vụ quí khách không chu đáo.
            </p>

            <p>
              <span>Hỗ trợ</span>
            </p>
            <p>
              Nếu bạn gặp rắc rối về sản phẩm hay chất lượng dịch vụ của YaMe,
              hãy gọi ngay đến số 090909.1441 hoặc inbox ở fanpage
              <a href="//facebook.com/www.yame.vn">facebook.com/www.yame.vn</a>
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="row">
            <div className="col-md-6">
              <p>&nbsp;</p>
              <div className="left-aligned">
                <p>Đặt hàng và thu tiền tận nơi toàn quốc</p>
                <h5 className="boxed-content-title">(028) 7307 1441</h5>
              </div>
              <br />
              <h4>Thông tin</h4>
              <ul>
                <li>
                  <a href="/page/gioi-thieu-ve-yame">Giới thiệu về YaMe.vn</a>
                </li>
                <li>
                  <a href="/page/tuyen-dung">Tuyển dụng</a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeH7mfQMmLLV_dlGKrf-X5Y8CRlxr4shJ_un7JWsG_qaLmcSg/viewform"
                  >
                    Gửi góp ý/Than phiền
                  </a>
                </li>
                <li>.</li>
                <li>
                  <a href="/page/quy-che-hoat-dong">Quy chế hoạt động</a>
                </li>
                <li>
                  <a href="/page/dieu-khoan-mua-ban-hang-hoa">
                    Điều khoản mua bán
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <p>&nbsp;</p>
              <div className="left-aligned">
                <h5>CSKH</h5>
                <p>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeH7mfQMmLLV_dlGKrf-X5Y8CRlxr4shJ_un7JWsG_qaLmcSg/viewform"
                    target="_blank"
                  >
                    Than phiền/Chăm sóc khách hàng
                  </a>
                </p>
              </div>
              <br />
              <h4>FAQ</h4>
              <ul>
                <li>
                  <a href="/page/van-chuyen">Vận chuyển</a>
                </li>
                <li>
                  <a href="/page/chinh-sach-doi-tra">Chính sách đổi trả</a>
                </li>
                <li>
                  <a href="/page/chinh-sach-bao-hanh">Chính sách bảo hành</a>
                </li>
                <li>
                  <a href="/page/khach-hang-vip">Khách hàng VIP</a>
                </li>
                <li>
                  <a href="/page/doi-tac-cung-cap">Đối tác cung cấp</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

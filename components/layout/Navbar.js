import MyLink from "../common/MyLink";
export default function Navbar() {
  return (
    <nav className="bg-[#c80000] text-white">
      <ul className="mx-auto flex justify-center font-semibold">
        <li>
          <MyLink href="/">
            <a className="menu-item ">Trang chủ</a>
          </MyLink>
        </li>
        <li>
          <MyLink href="/gioi-thieu">
            <a href="" className="menu-item ">
              Giới thiệu
            </a>
          </MyLink>
        </li>
        <li className="group relative">
          <MyLink href="/san-pham">
            <a
              href=""
              className="menu-item group-hover:border-yellow-400 group-hover:text-yellow-400"
            >
              Sản phẩm
            </a>
          </MyLink>
          <ul className="invisible absolute left-0 z-50 mt-14 w-max bg-[#c80000] opacity-0 transition-all duration-500 group-hover:visible group-hover:mt-0 group-hover:opacity-100">
            <li className="sub-dropdown border-li relative">
              <a href="" className="menu-sub-item">
                Cửa sổ
              </a>
              <ul className="sub-dropdown-content invisible absolute left-full top-full w-max bg-[#c80000] opacity-0 transition-all duration-500 ">
                <li className="border-li">
                  <a href="" className="menu-sub-item">
                    Cửa sổ mở hất
                  </a>
                </li>
                <li className="border-li">
                  <a href="" className="menu-sub-item">
                    Cửa số mở quay
                  </a>
                </li>
                <li className="border-li">
                  <a href="" className="menu-sub-item">
                    Cửa số trượt
                  </a>
                </li>
              </ul>
            </li>
            <li className=" border-li">
              <a href="" className="menu-sub-item">
                Cửa đi
              </a>
            </li>
            <li className="sub-dropdown border-li relative">
              <a href="" className="menu-sub-item">
                Sản phẩm kính
              </a>
              <ul className="sub-dropdown-content invisible absolute left-full top-full w-max bg-[#c80000] opacity-0 transition-all duration-500 ">
                <li className="border-li">
                  <a href="" className="menu-sub-item">
                    Cầu thang kính
                  </a>
                </li>
                <li className="border-li">
                  <a href="" className="menu-sub-item">
                    Phòng tắm kính
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <MyLink href="/hinh-anh">
            <a href="" className=" menu-item ">
              Hình ảnh công ty
            </a>
          </MyLink>
        </li>
        <li>
          <MyLink href="/quy-dinh-va-bao-hanh">
            <a href="" className=" menu-item ">
              Quy định và bảo hành
            </a>
          </MyLink>
        </li>
        <li>
          <MyLink href="/tin-tuc">
            <a href="" className=" menu-item ">
              Tin tức
            </a>
          </MyLink>
        </li>
        <li>
          <MyLink href="/tuyen-dung">
            <a href="" className=" menu-item ">
              Tuyển dụng
            </a>
          </MyLink>
        </li>
        <li>
          <MyLink href="/lien-he">
            <a href="" className=" menu-item ">
              Liên hệ
            </a>
          </MyLink>
        </li>
      </ul>
    </nav>
  );
}

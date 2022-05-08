import React from "react";
import Title from "../components/common/Title";
import { MainLayout } from "../components/layout/MainLayout";

export default function Contact() {
  return (
    <MainLayout>
      <Title title={"LIÊN HỆ"} />
      <section className="flex flex-col items-center md:flex-row md:space-x-6">
        <div className="w-full md:w-1/2">
          <div className="mb-4 space-y-2">
            <div className="text-[17px] font-bold text-primary md:text-2xl">
              CÔNG TY TNHH XD&TM HÙNG PHONG
            </div>
            <div>Địa chỉ: Khu phố 1, Phường Thạnh Mỹ Lợi, Quận 2, TP.HCM</div>

            <div>Email: japanwindowjsc@gmail.com</div>
            <div>Điện thoại : 0906 002 001 - 0903 448 947</div>
          </div>
          <div className="mt-2">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow">
                <div className="space-y-1 bg-white px-4 py-5">
                  <div className="grid grid-rows-1 md:grid-cols-12 ">
                    <div className="col-span-2 flex items-center">
                      <label className="block text-sm font-medium text-gray-700">
                        Họ và tên: <span className="text-[#ff0000]">*</span>
                      </label>
                    </div>
                    <div className="col-span-10">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="mt-1 block w-full rounded-md border border-gray-300 p-1.5 shadow-sm  "
                      />
                    </div>
                  </div>

                  <div className="grid grid-rows-1 md:grid-cols-12 ">
                    <div className="col-span-2 flex items-center">
                      <label className="block text-sm font-medium text-gray-700">
                        Địa chỉ:<span className="text-[#ff0000]">*</span>
                      </label>
                    </div>
                    <div className="col-span-10">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="mt-1 block w-full rounded-md border border-gray-300 p-1.5 shadow-sm  "
                      />
                    </div>
                  </div>

                  <div className="grid grid-rows-1 md:grid-cols-12 ">
                    <div className="col-span-2 flex items-center">
                      <label className="block text-sm font-medium text-gray-700">
                        Điện thoại:<span className="text-[#ff0000]">*</span>
                      </label>
                    </div>
                    <div className="col-span-10">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="mt-1 block w-full rounded-md border border-gray-300 p-1.5 shadow-sm  "
                      />
                    </div>
                  </div>
                  <div className="grid  grid-rows-1 md:grid-cols-12">
                    <div className="col-span-2 flex items-center">
                      <label className="block text-sm font-medium text-gray-700">
                        Email:<span className="text-[#ff0000]">*</span>
                      </label>
                    </div>
                    <div className="col-span-10">
                      <input
                        type="email"
                        name="email_address"
                        id="email_address"
                        className="mt-1 block w-full rounded-md border border-gray-300 p-1.5 shadow-sm  "
                      />
                    </div>
                  </div>
                  <div className="grid  grid-rows-1 md:grid-cols-12">
                    <div className="col-span-2 flex items-center">
                      <label className="block text-sm font-medium text-gray-700">
                        Chủ đề:<span className="text-[#ff0000]">*</span>
                      </label>
                    </div>
                    <div className="col-span-10">
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="mt-1 block w-full rounded-md border border-gray-300 p-1.5 shadow-sm  "
                      />
                    </div>
                  </div>
                  <div className="grid grid-rows-1 pt-2 md:grid-cols-12">
                    <div className="col-span-2 ">
                      <label className="block text-sm font-medium text-gray-700">
                        Nội dung:<span className="text-[#ff0000]">*</span>
                      </label>
                    </div>
                    <div className="col-span-10">
                      <textarea
                        id="message"
                        rows="4"
                        className=" mt-1 block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500  dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder=""
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 ">
                  <button
                    type="submit"
                    className="hover:c80011 inline-flex justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none "
                  >
                    Gửi
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 w-full md:mt-0 md:w-1/2">
          <div className="w-full">
            <iframe
              width="100%"
              height="500"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=27,%20Nguy%E1%BB%85n%20B%E1%BA%A3o,%20H%C3%B2a%20Ch%C3%A2u,%20H%C3%B2a%20Vang,%20%C4%90%C3%A0%20N%E1%BA%B5ng+(H%C3%B9ng%20Phong)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/marine-gps/">navigation gps</a>
            </iframe>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

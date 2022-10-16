import {
  EmailOutlined,
  Facebook,
  Instagram,
  LocalPhoneOutlined,
  LocationOnOutlined,
  Phone,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import React from "react";

const Footer = () => {
  const socialStyle = "m-3 rounded-full cursor-pointer p-2 text-white";
  return (
    <div className="flex items-center justify-around p-2 mobile:flex-col mobile:items-start">
      <div className="flex-1 self-end flex flex-col flex-wrap p-2">
        <h1 className="text-[25px] mb-2 self-start">تجهيزات عسكرية</h1>
        <p style={{ direction: "rtl" }} className="self-end mr-0">
          اللغز الذي نبحث عن مكانه، الحياة ذاك الشيء البعيد الذي نعيش به ولأجله،
          ولكننا غير مدركين السر الذي سيوصلنا للنجاة، لمعنى أن نصبح أُناساً
          قادرين على مواجهتها بقوة وحزم أشد، لكنني دائماً على ثقة تامة بأنها
          وجدت لنتحداها، لنثبت أننا خلقنا لأمر ما عظيم ذي شأن أعظم، فكل إنسان
          على هذه الأرض مستخلف لمهمة ما عليه إنجازها، لا يهم متى، بأول العمر أو
          آخره، طالما بوصلته نحو الطريق الصحيح. إقرأ المزيد على موضوع.كو
        </p>
        <div className="flex items-center self-start justify-center mt-3 self-start">
          <div className={socialStyle + ` bg-blue-700`}>
            <Facebook />
          </div>
          <div className={socialStyle + ` bg-orange-500`}>
            <Instagram />
          </div>
          <div className={socialStyle + ` bg-sky-400`}>
            <Twitter />
          </div>
          <div className={socialStyle + ` bg-red-600`}>
            <Pinterest />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-2">
        <div className="flex m-3">
          <LocationOnOutlined className="text-green-900" />
          <p className="pl-3">Iraq Baghdad</p>
        </div>
        <div className="flex m-3">
          <LocalPhoneOutlined className="text-green-900" />
          <p className="pl-3">+9647737122445</p>
        </div>
        <div className="flex m-3">
          <EmailOutlined className="text-green-900" />
          <p className="pl-3">mohsinalish87@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

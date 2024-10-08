import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 mt-12 py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-3 flex flex-col items-center justify-between">
          <div className="text-gray-800 mb-2 text-2xl font-bold dark:text-white">
            Mesoya | 메소야
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://open.kakao.com/o/smC5TBLg"
              target="_blank"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/kakaoLogo.png"
                width={35}
                height={35}
                style={{ objectFit: "none" }}
                alt="KakaoTalk"
              />
            </Link>
            <Link
              href="mailto:contact@mesoya.com"
              className="transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/mailLogo.png"
                width={35}
                height={35}
                alt="mail"
              />
            </Link>
          </div>
        </div>
        <div className="text-gray-600 dark:text-gray-400 mb-4 text-center text-sm">
          contact@mesoya.kr
        </div>
        <hr className="border-gray-300 dark:border-gray-700 mb-4" />
        <div className="text-gray-600 dark:text-gray-400 flex flex-col items-center text-sm">
          <span>&copy; 2024 Mesoya. All rights reserved.</span>
          <span className="mt-2 md:mt-0">
            Mesoya is not associated with NEXON Korea. Data based on NEXON Open
            API.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

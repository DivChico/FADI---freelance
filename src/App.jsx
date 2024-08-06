import moment from "moment";
import "./App.css";
import "../src/assets/fonts/ScheherazadeNew-Regular.ttf";
import {
  EmailShare,
  FacebookMessengerShare,
  FacebookShare,
  TelegramShare,
  TwitterShare,
  WhatsappShare,
} from "react-share-kit";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import DateCounter from "./components/DateCounter";

function App() {
  const allDoa = [
    "(اللهم أنت ربها، وأنت خلقتها، وأنت هديتها للإسلام، وأنت قبضت روحها، وأنت أعلم بسرها وعلانيتها، جئنا شفعاء فاغفر له)",
    "(اللَّهمَّ اغْفِرْ لحيِّنا وميِّتِنا وشاهدنا وغائِبنا وصَغيرنا وَكبيرنا وذَكرِنا وأُنثانا اللَّهمَّ مَنْ أحييتَه مِنَّا فأحيِه علَى الإسلامِ ومن تَوَفَّيتَه مِنَّا فتَوفَّهُ علَى الإيمانِ اللَّهمَّ لا تحرمنا أجرَه ولا تُضلَّنا بعدَه)",
    "(اللَّهُمَّ، اغْفِرْ له وَارْحَمْهُ، وَاعْفُ عنْه وَعَافِهِ، وَأَكْرِمْ نُزُلَهُ، وَوَسِّعْ مُدْخَلَهُ، وَاغْسِلْهُ بمَاءٍ وَثَلْجٍ وَبَرَدٍ، وَنَقِّهِ مِنَ الخَطَايَا كما يُنَقَّى الثَّوْبُ الأبْيَضُ مِنَ الدَّنَسِ، وَأَبْدِلْهُ دَارًا خَيْرًا مِن دَارِهِ، وَأَهْلًا خَيْرًا مِن أَهْلِهِ، وَزَوْجًا خَيْرًا مِن زَوْجِهِ، وَقِهِ فِتْنَةَ القَبْرِ وَعَذَابَ النَّارِ)",
  ];
  let oneDoa = allDoa[Math.floor(Math.random() * allDoa.length)];

  return (
    <div className="  ">
      <div className="container  min-h-screen mx-auto space-y-3 flex flex-col items-center">
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className=" font-semibold"
        >
          <p
            className=" font-semibold"
            style={{ fontFamily: "ScheherazadeNew" }}
          >
            تاريخ الوفاة{" "}
          </p>
          <p
            className=" font-semibold"
            style={{ fontFamily: "ScheherazadeNew" }}
          >
            الثالث من شهر مارس سنة 2023 الساعة الثالثة عصرا و 23 دقيقة
          </p>
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <p
            className=" font-semibold"
            style={{ fontFamily: "ScheherazadeNew" }}
          ></p>
          <DateCounter />
        </motion.div>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className=" font-semibold"
          style={{ fontFamily: "ScheherazadeNew" }}
        >
          الدعاء لروح المرحومة باذن الله تعالى
        </motion.p>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className=" font-semibold"
          style={{ fontFamily: "ScheherazadeNew" }}
        >
          ثناء جميل شعبان
        </motion.p>
        {/* 
        <motion.img
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
          src="../src/assets/images/photo_2024-08-06_18-14-59.jpg"
          alt=""
          className=" w-52"
        /> */}

        <motion.img
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
          src="../src/assets/images/photo_2024-08-06_18-18-29.jpg"
          alt=""
          className=" w-52"
        />
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
          className=" font-bold text-2xl"
          style={{ fontFamily: "ScheherazadeNew" }}
        >
          {oneDoa}
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 3 }}
          className=" space-y-2"
        >
          <p>شارك تؤحر</p>
          <div className=" flex gap-2 flex-wrap items-center justify-center">
            <FacebookShare
              url={"https://do3a.onrender.com/"}
              quote={"دعاء لروح المروحمة باذن الله"}
            />

            <TwitterShare
              url={"https://do3a.onrender.com/"}
              title={"دعاء لروح المروحمة باذن الله"}
            />
            <WhatsappShare
              url={"https://do3a.onrender.com/"}
              title={"دعاء لروح المروحمة باذن الله"}
              separator=":: "
            />

            <TelegramShare url={"https://do3a.onrender.com/"} />

            <FacebookMessengerShare
              url="https://do3a.onrender.com/"
              redirectUri="https://do3a.onrender.com/"
              appId={"dmm4kj9djk203k4liuf994p"}
            />
            <EmailShare
              url={"https://do3a.onrender.com/"}
              subject={"دعاء لروح المروحمة باذن الله"}
              body="body"
            />
          </div>
        </motion.div>
      </div>
      <div className=" w-52 h-2 bg-black absolute top-0 -right-9 rotate-45"></div>
    </div>
  );
}

export default App;

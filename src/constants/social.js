import { BsTelegram, BsWhatsapp, BsGithub, BsLinkedin } from "react-icons/bs";

export const social = [
  {
    id: 1,
    arialLabel: "Github ",
    href: "https://github.com/Mehdiw8",
    icon: <BsGithub fontSize={"large"} />,
  },
  {
    id: 2,
    arialLabel: "Linkdin ",
    href: "https://www.linkedin.com/in/mehdi-mirzaei-246477201/",
    icon: <BsLinkedin fontSize={"large"} />,
  },
  {
    id: 3,
    arialLabel: "Telegram ",
    href: "https://t.me/urtloaa",
    icon: <BsTelegram fontSize={"large"} />,
  },
  {
    id: 4,
    arialLabel: "WhatsApp ",
    href: "https://api.whatsapp.com/send/?phone=%2B989179240869&text&type=phone_number&app_absent=0",
    icon: <BsWhatsapp fontSize={"large"} />,
  },
];

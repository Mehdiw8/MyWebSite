import {
  MdPerson,
  MdHome,
  MdTextSnippet,
  MdOutlineAccessibility,
  MdTopic,
} from 'react-icons/md';

const TabsData = () => {
  const tabs = [
    { label: 'صفحه اصلی', icon: <MdHome fontSize="large" /> },
    {
      label: 'درباره من',
      icon: <MdPerson fontSize="large" />,
    },
    {
      label: 'رزومه من',
      icon: <MdTextSnippet fontSize="large" />,
    },
    {
      label: 'نمونه کار ها',
      icon: <MdTopic fontSize="large" />,
    },
    {
      label: 'ارتباط با من',
      icon: <MdOutlineAccessibility fontSize="large" />,
    },
  ];
  return tabs;
};
export default TabsData;

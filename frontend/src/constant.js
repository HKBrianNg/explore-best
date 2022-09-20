import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AbcIcon from '@mui/icons-material/Abc';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import CabinIcon from '@mui/icons-material/Cabin';


export const SysMsg = [
    "000-No topic data. System fails to start.",
    "001-Please decode video Id first.",
    "002-No user data.",
    "003-Please select a category for topic."
]

export const defaultNewsCategories = [
    { id: '0', name: '世界' },
    { id: '1', name: '中国' },
    { id: '2', name: '台湾' },
    { id: '3', name: '香港' },
    { id: '4', name: '英国' },
    { id: '5', name: '美国' },
    { id: '6', name: '欧盟' },
    { id: '7', name: '乌克兰' },
    { id: '8', name: '俄罗斯' },
    { id: '9', name: '日本' },
    { id: '10', name: '韩国' },
    { id: '11', name: '德国' },
    { id: '12', name: '法国' },
    { id: '13', name: '澳洲' },
    { id: '14', name: '加拿大' },
    { id: '15', name: '墨西哥' },
    { id: '16', name: '意大利' },
    { id: '17', name: '西班牙' },
    { id: '18', name: '葡萄牙' },
    { id: '19', name: '巴西' },
    { id: '20', name: 'Technology' },
    { id: '21', name: 'Sport' },
    { id: '22', name: 'Fashion' },
    { id: '23', name: 'Science' },
    { id: '24', name: 'Politics' },
    { id: '25', name: 'Health' },
    { id: '26', name: 'Food' },
    { id: '27', name: 'School' },
    { id: '28', name: 'War' }
]

export const allCategories = [
    {
        id: "1",
        label: "IT",
        name: "IT",
        icon: <ImportantDevicesIcon />,
        bannericon: "/images/banner/dog.png",
        title: "Awesome Programming You Should Know",
        description: "Fullstack in web development - React, nodeJs, MongoDB, Firebase,...."
    },
    {
        id: "2",
        label: "Fitness",
        name: "Fitness",
        icon: <FitnessCenterIcon />,
        bannericon: "/images/banner/gym.jfif",
        title: "Awesome Exercise You Should Know",
        description: "Explore the most effective exercise"
    },
    {
        id: "3",
        label: "English",
        name: "English",
        icon: <AbcIcon />,
        bannericon: "/images/banner/English.jpg",
        title: "Awesome English Lessons You Should Know",
        description: "Explore the most effective English learning"
    },
    {
        id: "4",
        label: "Golf",
        name: "Golf",
        icon: <GolfCourseIcon />,
        bannericon: "/images/banner/Golf.jpg",
        title: "Awesome Golf Courses You Should Know",
        description: "Explore the most beautiful golf courses"
    },
    {
        id: "5",
        label: "Car",
        name: "Car",
        icon: <ElectricCarIcon />,
        bannericon: "/images/banner/Car.jpg",
        title: "Awesome Car You Should Know",
        description: "Explore the famous cars"
    },
    {
        id: "6",
        label: "House",
        name: "House",
        icon: <CabinIcon />,
        bannericon: "/images/banner/house.jpg",
        title: "Awesome House You Should Know",
        description: "Explore the beautiful houses"
    }
]
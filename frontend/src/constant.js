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
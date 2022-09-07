import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AbcIcon from '@mui/icons-material/Abc';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import CabinIcon from '@mui/icons-material/Cabin';


export const SysMsg = [
    "000-No topic data. System fails to start.",
    "001-Please decode video Id first.",
    "002-No user data."
]

export const allCategories = [
    {
        id: "1",
        label: "IT",
        icon: <ImportantDevicesIcon />,
        bannericon: "/images/banner/dog.png",
        title: "Awesome Programming You Should Know",
        description: "Fullstack in web development - React, nodeJs, MongoDB, Firebase,...."
    },
    {
        id: "2",
        label: "Fitness",
        icon: <FitnessCenterIcon />,
        bannericon: "/images/banner/gym.jfif",
        title: "Awesome Exercise You Should Know",
        description: "Explore the most effective exercise"
    },
    {
        id: "3",
        label: "English",
        icon: <AbcIcon />,
        bannericon: "/images/banner/English.jpg",
        title: "Awesome English Lessons You Should Know",
        description: "Explore the most effective English learning"
    },
    {
        id: "4",
        label: "Golf",
        icon: <GolfCourseIcon />,
        bannericon: "/images/banner/Golf.jpg",
        title: "Awesome Golf Courses You Should Know",
        description: "Explore the most beautiful golf courses"
    },
    {
        id: "5",
        label: "Car",
        icon: <ElectricCarIcon />,
        bannericon: "/images/banner/Car.jpg",
        title: "Awesome Car You Should Know",
        description: "Explore the famous cars"
    },
    {
        id: "6",
        label: "House",
        icon: <CabinIcon />,
        bannericon: "/images/banner/house.jpg",
        title: "Awesome House You Should Know",
        description: "Explore the beautiful houses"
    }
]


export const allSubCategories = [
    {
        category: "IT",
        subCategory: [
            { id: "1", label: "AppService" },
            { id: "2", label: "DevOps" },
            { id: "3", label: "CICD" },
            { id: "4", label: "IDE" },
            { id: "5", label: "GitHub" },
            { id: "6", label: "Docker" },
            { id: "7", label: "React" },
            { id: "8", label: "MERN" },
            { id: "9", label: "Microservices" },
            { id: "10", label: "Firebase" }
        ]
    },
    {
        category: "Fitness",
        subCategory: [
            { id: "1", label: "Fitness1" }
        ]
    },
    {
        category: "English",
        subCategory: [
            { id: "1", label: "English1" }
        ]
    },
    {
        category: "Golf",
        subCategory: [
            { id: "1", label: "Golf1" }
        ]
    },
    {
        category: "Car",
        subCategory: [
            { id: "1", label: "Car1" }
        ]
    },
    {
        category: "House",
        subCategory: [
            { id: "1", label: "House1" }
        ]
    }
]

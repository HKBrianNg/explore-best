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

export const defaultWorldCategories = [
    { id: '0', name: '世界', ename: 'World' },
    { id: '1', name: '联合国', ename: 'United Nations' },
    { id: '2', name: '亚洲', ename: 'Asia' },
    { id: '3', name: '欧洲', ename: 'Europe' },
    { id: '4', name: '北美洲', ename: 'North America' },
    { id: '5', name: '南美洲', ename: 'South America' },
    { id: '6', name: '非洲', ename: 'Africa' },
    { id: '7', name: '大洋洲', ename: 'Atlantic' },
    { id: '8', name: '南极', ename: 'Antarctica' },
    { id: '9', name: '北极', ename: 'Arctic' }
]

export const defaultAsiaCategories = [
    { id: '11', name: '中国', ename: 'China' },
    { id: '12', name: '台湾', ename: 'Taiwan' },
    { id: '13', name: '香港', ename: 'Hong Kong' },
    { id: '14', name: '澳门', ename: 'Macau' },
    { id: '15', name: '日本', ename: 'Japan' },
    { id: '16', name: '韩国', ename: 'Korea' },
    { id: '17', name: '朝鲜', ename: 'North Korea' },
    { id: '18', name: '越南', ename: 'Vietname' },
    { id: '19', name: '柬埔寨', ename: 'Cambodia' },
    { id: '20', name: '泰国', ename: 'Thailand' },
    { id: '21', name: '缅甸', ename: 'Myanmar' },
    { id: '22', name: '寮国', ename: 'Laos' },
    { id: '23', name: '孟加拉', ename: 'Bengal' },
    { id: '24', name: '印度', ename: 'India' },
    { id: '25', name: '巴基斯坦', ename: 'Pakistan' },
    { id: '26', name: '印尼', ename: 'Indonesia' },
    { id: '27', name: '马来西亚', ename: 'Malaysia' },
    { id: '28', name: '新加坡', ename: 'Singapore' },
    { id: '29', name: '文莱', ename: 'Brunei' },
    { id: '30', name: '蒙古', ename: 'Mongolia' },
    { id: '40', name: '菲律宾', ename: 'Philippines' },
    { id: '41', name: '阿富汗', ename: 'Afghanistan' },
    { id: '42', name: '伊朗', ename: 'Iran' },
    { id: '43', name: '叙利亚', ename: 'Syria' },
    { id: '44', name: '约旦', ename: 'Jordan' },
    { id: '45', name: '以色列', ename: 'Israel' },
    { id: '46', name: '土耳其', ename: 'Turkey' },
    { id: '47', name: '伊拉克', ename: 'Iraq' },
    { id: '48', name: '科威特', ename: 'Kuwait' },
    { id: '49', name: '沙特阿拉伯', ename: 'Saudi Arabia' },
    { id: '50', name: '也门', ename: 'Yemen' },
    { id: '51', name: '阿曼', ename: 'Oman' },
    { id: '52', name: '黎巴嫩', ename: 'Lebanon' },
    { id: '53', name: '巴林', ename: 'Bahrain' },
    { id: '54', name: '埃及', ename: 'Egypt' },
    { id: '55', name: '卡塔尔', ename: 'Qatar' }
]

export const defaultEuropeCategories = [
    { id: '100', name: '欧盟', ename: 'EU' },
    { id: '101', name: '英国', ename: 'UK' },
    { id: '102', name: '法国', ename: 'France' },
    { id: '103', name: '荷兰', ename: 'Netherlands' },
    { id: '104', name: '德国', ename: 'Germany' },
    { id: '105', name: '瑞士', ename: 'Switzerland' },
    { id: '106', name: '瑞典', ename: 'Sweden' },
    { id: '107', name: '比利时', ename: 'Belgium' },
    { id: '108', name: '挪威', ename: 'Norway' },
    { id: '109', name: '芬兰', ename: 'Finland' },
    { id: '110', name: '丹麦', ename: 'Denmark' },
    { id: '111', name: '意大利', ename: 'Italy' },
    { id: '112', name: '希腊', ename: 'Greece' },
    { id: '113', name: '西班牙', ename: 'Spain' },
    { id: '114', name: '葡萄牙', ename: 'Portugal' },
    { id: '115', name: '捷克', ename: 'Czech' },
    { id: '116', name: '匈牙利', ename: 'Hungary' },
    { id: '117', name: '波兰', ename: 'Poland' },
    { id: '118', name: '南斯拉夫', ename: 'Yugoslavia' },
    { id: '119', name: '俄罗斯', ename: 'Russia' },
    { id: '120', name: '白俄罗斯', ename: 'Belarus' },
    { id: '121', name: '乌克兰', ename: 'Ukraine' },
    { id: '122', name: '立陶宛', ename: 'Lithuania' },
    { id: '123', name: '爱沙尼亚', ename: 'Estonia' },
    { id: '124', name: '斯洛伐克', ename: 'Slovakia' },
    { id: '125', name: '克罗地亚', ename: 'Croatia' },
    { id: '126', name: '拉脱维亚', ename: 'Latvia' },
    { id: '127', name: '保加利亚', ename: 'Bulgaria' },
    { id: '128', name: '罗马尼亚', ename: 'Romania' },
    { id: '129', name: '塞浦路斯', ename: 'Cyprus' },
    { id: '130', name: '斯洛文尼亚', ename: 'Slovenia' },
    { id: '131', name: '马耳他', ename: 'Malta' },
    { id: '132', name: '爱尔兰', ename: 'Ireland' },
    { id: '133', name: '奥地利', ename: 'Austria' },
    { id: '134', name: '卢森堡', ename: 'Luxembourg' }
]

export const defaultAmericaCategories = [
    { id: '200', name: '美国', ename: 'US' },
    { id: '201', name: '加拿大', ename: 'Canada' },
    { id: '202', name: '墨西哥', ename: 'Mexico' },
    { id: '203', name: '巴西', ename: 'Brazil' },
    { id: '204', name: '阿根廷', ename: 'Argentina' },
    { id: '205', name: '智利', ename: 'Chile' },
    { id: '206', name: '乌拉圭', ename: 'Uruguay' },
    { id: '207', name: '巴拿马', ename: 'Panama' },
    { id: '208', name: '巴哈马', ename: 'Bahamas' },
    { id: '209', name: '秘鲁', ename: 'Peru' },
    { id: '210', name: '哥伦比亚', ename: 'Colombia' },
    { id: '211', name: '哥斯达黎加', ename: 'Costa Rica' },
    { id: '212', name: '多明尼加', ename: 'Dominican Republic' },
    { id: '213', name: '海地', ename: 'Haiti' },
    { id: '214', name: '古巴', ename: 'Cuba' }
]

export const defaultAtlanticCategories = [
    { id: '300', name: '澳洲', ename: 'Australia' },
    { id: '301', name: '纽西兰', ename: 'new zealand' },
    { id: '302', name: '巴布新几内亚', ename: 'Papua New Guinea' }
]
// { id: '20', name: 'Technology' },
// { id: '21', name: 'Sport' },
// { id: '22', name: 'Fashion' },
// { id: '23', name: 'Science' },
// { id: '24', name: 'Politics' },
// { id: '25', name: 'Health' },
// { id: '26', name: 'Food' },
// { id: '27', name: 'School' },
// { id: '28', name: 'War' }


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
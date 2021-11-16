
import IconDashboard from '@material-ui/icons/Dashboard';
import IconShoppingCart from '@material-ui/icons/ShoppingCart';
import IconDirectionsBike from '@material-ui/icons/DirectionsBike';
import IconEventAvailable from '@material-ui/icons/EventAvailable';
// import AddAlertIcon from '@material-ui/icons/AddAlert';
// //import IconFingerprint from '@material-ui/icons/Fingerprint';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import IconPeople from '@material-ui/icons/People'
import IconBarChart from '@material-ui/icons/BarChart'

//import IconLibraryBooks from '@material-ui/icons/LibraryBooks'



const tileData = [
    {
      id:1,
      image: "/assets/images/admin/Dashboard.png",
      ico: IconDashboard,
      title: 'Dashboard',
      author: 'Good Eten',
      link:'/admin',
      
    },
    {
        id:2,
        image: "/assets/images/admin/Home.png",
        ico: HomeIcon,
        title: 'Home',
        author: 'Good Eten',
        link:'/home',
   
    },
    {
        id:3,
        image: "/assets/images/admin/Dishes.png",
        ico: LocalDiningIcon,
        title: 'Dishes',
        author: 'Good Eten',
        link:'/admin/dish',
   
    },
    
    {
        id:4,
        image: "/assets/images/admin/Cooks.png",
        ico: PeopleIcon,
        title: 'Cooks',
        author: 'author unknown',
        link:'/admin/cook',
      },
    {
        id:5,
        image: "/assets/images/admin/Delivery.png",
        ico: IconDirectionsBike,
        title: 'Delivery',
        author: 'Good Eten',
        link:'/admin/delivery',
   
    },
    {
        id:6,
        image: "/assets/images/admin/Calendar.png",
        ico: IconEventAvailable,
        title: 'Planning',
        author: 'Good Eten',
        link:'/admin/planning',
        
    },
    {
        id:7,
        image: "/assets/images/admin/Orders.png",
        title: 'Orders',
        ico: IconShoppingCart,
        author: 'Good Eten',
        link:'/admin/orders',
   
    },
    {
        id:8,
        image: "/assets/images/admin/Customers.png",
        ico: IconPeople,
        title: 'Customers',
        author: 'Good Eten',
        link:'/admin/customer',
   
    },
    {
        id:9,
        image: "/assets/images/admin/Reports.png",
        ico: IconBarChart,
        title: 'Reports',
        author: 'Good Eten',
        link:'/admin/reports',
   
    }
    
  ];
  export default tileData
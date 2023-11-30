// components/Sidebar.tsx
"use client"
import Link from 'next/link';
import { fetchUser, updateUser } from "@/backend/actions/user.actions";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
// import { UserState } from '../redux/store'; // Import your RootState type
// import { UserAuth } from '@/context/MyContext';
import { usePathname } from "next/navigation";
import { useEffect } from 'react';
import  {OrganizationSwitcher, SignOutButton, SignedIn} from "@clerk/nextjs"


const LeftSidebar = () => {

  // const { user, googleSignIn, logOut } = UserAuth() ?? { user: null };
  const pathname = usePathname()
  const router = useRouter();


  // useEffect(() => {
  //   //  652287d8c485eea588ded931
  //   const dynamicFetch = async () =>{
  //          fetchUser(user?.uid).then((res)=>{
  
  //           console.log(res)
  //         console.log("bi",res?.books[0]) 
  //         const a = res?.books[0]
         
  //           setBookId(a);
  //           setLoading(false)
  //         }).catch((error)=>{
  
  //           console.error('Failed to fetch data: ', error);
  //           setLoading(false)
  //         });
  //       }
  // if(user){
  //       dynamicFetch()
  // }
  //   //  console.log(pathname)
  //   }, [user]);
  
    
  
    // const handleSignIn = async ()=>{
      // console.log("ff")
      // if(googleSignIn){
      // try {
      //   const res = await googleSignIn() 
      //   // console.log(res)
      //   const googleUser = (res as any).user
      //   console.log("hell",googleUser)
        
       
        // const mongoDbUser = await fetchUser(googleUser.uid) //check if the user from google is present in our database
        // if(!mongoDbUser){
        //   await updateUser( {
        //     userId:googleUser.uid,
        //     name:googleUser?.displayName,
        //     email:googleUser.email,
            // authProvider:googleUser.providerData,
            // objectId:mongoDbUser?._id,
            // username:userInfo?.username || user?.username,
            // bio:userInfo?.bio || "",
            // image:userInfo?.image || user?.imageUrl
            
    //     })
    //     console.log("created")
    //     }
    //     else{
    //       //  router.push("/book");
    //       console.log("hello")
    //     }
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
    // }
    // const handleSignOut = async (e:any)=>{
    //   if (logOut) {
    //     try {
    //       await logOut();
    //       // Successfully signed out
    //     } catch (error) {
    //       console.error("Error signing out:", error);
    //     }
    //   }
    // }
  
  




  return (
    <aside className=" text-black p-4 space-y-4 min-h-screen flex flex-col items-center w-[201px]">
      <Link href={'/'}>
      <div className="flex flex-col items-center text-3xl font-bold">Seguidor</div>
      </Link>
      {/* Button with Icon */} 
        <div className='sidebarUnderline w-full'></div>
            <div className='flex flex-col gap-[20px]'>
                <Link href="/jobs/create">
                    <button>
                        <svg width="136" height="40" viewBox="0 0 136 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_53_18892)">
                            <rect width="136" height="40" rx="8" fill="#3637EE"/>
                            <path d="M31 20.75H25.75V26H24.25V20.75H19V19.25H24.25V14H25.75V19.25H31V20.75Z" fill="white"/>
                            <path d="M49.3088 21.7598H51.0178C50.9631 22.4115 50.7808 22.9925 50.4709 23.5029C50.161 24.0088 49.7258 24.4076 49.1652 24.6992C48.6047 24.9909 47.9234 25.1367 47.1213 25.1367C46.5061 25.1367 45.9523 25.0273 45.4602 24.8086C44.968 24.5853 44.5464 24.2708 44.1955 23.8652C43.8446 23.4551 43.5757 22.9606 43.3889 22.3818C43.2066 21.8031 43.1154 21.1559 43.1154 20.4404V19.6133C43.1154 18.8978 43.2089 18.2507 43.3957 17.6719C43.5871 17.0931 43.8605 16.5986 44.216 16.1885C44.5715 15.7738 44.9976 15.457 45.4943 15.2383C45.9956 15.0195 46.5585 14.9102 47.1828 14.9102C47.9758 14.9102 48.6457 15.056 49.1926 15.3477C49.7395 15.6393 50.1633 16.0426 50.4641 16.5576C50.7694 17.0726 50.9562 17.6628 51.0246 18.3281H49.3156C49.2701 17.8997 49.1698 17.5329 49.0148 17.2275C48.8645 16.9222 48.6411 16.6898 48.3449 16.5303C48.0487 16.3662 47.6613 16.2842 47.1828 16.2842C46.7909 16.2842 46.4491 16.3571 46.1574 16.5029C45.8658 16.6488 45.6219 16.863 45.426 17.1455C45.23 17.4281 45.0819 17.7767 44.9816 18.1914C44.8859 18.6016 44.8381 19.071 44.8381 19.5996V20.4404C44.8381 20.9417 44.8814 21.3975 44.968 21.8076C45.0591 22.2132 45.1958 22.5618 45.3781 22.8535C45.565 23.1452 45.802 23.3708 46.0891 23.5303C46.3762 23.6898 46.7202 23.7695 47.1213 23.7695C47.6089 23.7695 48.0031 23.6921 48.3039 23.5371C48.6092 23.3822 48.8394 23.1566 48.9943 22.8604C49.1538 22.5596 49.2587 22.1927 49.3088 21.7598ZM54.1666 19.0117V25H52.5191V17.6035H54.0914L54.1666 19.0117ZM56.4293 17.5557L56.4156 19.0869C56.3154 19.0687 56.206 19.055 56.0875 19.0459C55.9736 19.0368 55.8596 19.0322 55.7457 19.0322C55.4632 19.0322 55.2148 19.0732 55.0006 19.1553C54.7864 19.2327 54.6064 19.3467 54.4605 19.4971C54.3193 19.6429 54.2099 19.8206 54.1324 20.0303C54.0549 20.2399 54.0094 20.4746 53.9957 20.7344L53.6197 20.7617C53.6197 20.2969 53.6653 19.8662 53.7564 19.4697C53.8476 19.0732 53.9843 18.7246 54.1666 18.4238C54.3535 18.123 54.5859 17.8883 54.8639 17.7197C55.1464 17.5511 55.4723 17.4668 55.8414 17.4668C55.9417 17.4668 56.0488 17.4759 56.1627 17.4941C56.2812 17.5124 56.3701 17.5329 56.4293 17.5557ZM60.6855 25.1367C60.1387 25.1367 59.6442 25.0479 59.2021 24.8701C58.7646 24.6878 58.3909 24.4349 58.0811 24.1113C57.7757 23.7878 57.541 23.4072 57.377 22.9697C57.2129 22.5322 57.1309 22.0605 57.1309 21.5547V21.2812C57.1309 20.7025 57.2152 20.1784 57.3838 19.709C57.5524 19.2396 57.7871 18.8385 58.0879 18.5059C58.3887 18.1686 58.7441 17.9111 59.1543 17.7334C59.5645 17.5557 60.0088 17.4668 60.4873 17.4668C61.0159 17.4668 61.4785 17.5557 61.875 17.7334C62.2715 17.9111 62.5996 18.1618 62.8594 18.4854C63.1237 18.8044 63.3197 19.1849 63.4473 19.627C63.5794 20.069 63.6455 20.5566 63.6455 21.0898V21.7939H57.9307V20.6113H62.0186V20.4814C62.0094 20.1852 61.9502 19.9072 61.8408 19.6475C61.736 19.3877 61.5742 19.1781 61.3555 19.0186C61.1367 18.859 60.8451 18.7793 60.4805 18.7793C60.207 18.7793 59.9632 18.8385 59.749 18.957C59.5394 19.071 59.3639 19.2373 59.2227 19.4561C59.0814 19.6748 58.972 19.9391 58.8945 20.249C58.8216 20.5544 58.7852 20.8984 58.7852 21.2812V21.5547C58.7852 21.8783 58.8284 22.179 58.915 22.457C59.0062 22.7305 59.1383 22.9697 59.3115 23.1748C59.4847 23.3799 59.6943 23.5417 59.9404 23.6602C60.1865 23.7741 60.4668 23.8311 60.7812 23.8311C61.1777 23.8311 61.5309 23.7513 61.8408 23.5918C62.1507 23.4323 62.4196 23.2067 62.6475 22.915L63.5156 23.7559C63.3561 23.9883 63.1488 24.2116 62.8936 24.4258C62.6383 24.6354 62.3262 24.8063 61.957 24.9385C61.5924 25.0706 61.1686 25.1367 60.6855 25.1367ZM69.2006 23.5166V19.9893C69.2006 19.7249 69.1527 19.4971 69.057 19.3057C68.9613 19.1143 68.8155 18.9661 68.6195 18.8613C68.4281 18.7565 68.1866 18.7041 67.8949 18.7041C67.626 18.7041 67.3936 18.7497 67.1977 18.8408C67.0017 18.932 66.849 19.055 66.7396 19.21C66.6303 19.3649 66.5756 19.5404 66.5756 19.7363H64.935C64.935 19.4447 65.0056 19.1621 65.1469 18.8887C65.2881 18.6152 65.4932 18.3714 65.7621 18.1572C66.031 17.943 66.3523 17.7744 66.726 17.6514C67.0997 17.5283 67.5189 17.4668 67.9838 17.4668C68.5398 17.4668 69.032 17.5602 69.4604 17.7471C69.8933 17.9339 70.2328 18.2165 70.4789 18.5947C70.7296 18.9684 70.8549 19.4378 70.8549 20.0029V23.291C70.8549 23.6283 70.8777 23.9313 70.9232 24.2002C70.9734 24.4645 71.044 24.6947 71.1352 24.8906V25H69.4467C69.3692 24.8223 69.3077 24.5967 69.2621 24.3232C69.2211 24.0452 69.2006 23.7764 69.2006 23.5166ZM69.4398 20.502L69.4535 21.5205H68.2709C67.9656 21.5205 67.6967 21.5501 67.4643 21.6094C67.2318 21.6641 67.0381 21.7461 66.8832 21.8555C66.7283 21.9648 66.612 22.097 66.5346 22.252C66.4571 22.4069 66.4184 22.5824 66.4184 22.7783C66.4184 22.9743 66.4639 23.1543 66.5551 23.3184C66.6462 23.4779 66.7784 23.6032 66.9516 23.6943C67.1293 23.7855 67.3435 23.8311 67.5941 23.8311C67.9314 23.8311 68.2253 23.7627 68.476 23.626C68.7312 23.4847 68.9317 23.3138 69.0775 23.1133C69.2234 22.9082 69.3008 22.7145 69.31 22.5322L69.8432 23.2637C69.7885 23.4505 69.6951 23.651 69.5629 23.8652C69.4307 24.0794 69.2576 24.2845 69.0434 24.4805C68.8337 24.6719 68.5808 24.8291 68.2846 24.9521C67.9929 25.0752 67.6557 25.1367 67.2729 25.1367C66.7898 25.1367 66.3591 25.041 65.9809 24.8496C65.6026 24.6536 65.3064 24.3916 65.0922 24.0635C64.878 23.7308 64.7709 23.3548 64.7709 22.9355C64.7709 22.5436 64.8438 22.1973 64.9896 21.8965C65.14 21.5911 65.3588 21.3359 65.6459 21.1309C65.9376 20.9258 66.293 20.7708 66.7123 20.666C67.1316 20.5566 67.6101 20.502 68.1479 20.502H69.4398ZM76.0682 17.6035V18.8066H71.8982V17.6035H76.0682ZM73.1014 15.792H74.7488V22.9561C74.7488 23.1839 74.7807 23.3594 74.8445 23.4824C74.9129 23.6009 75.0063 23.6807 75.1248 23.7217C75.2433 23.7627 75.3823 23.7832 75.5418 23.7832C75.6557 23.7832 75.7651 23.7764 75.8699 23.7627C75.9747 23.749 76.059 23.7354 76.1229 23.7217L76.1297 24.9795C75.993 25.0205 75.8335 25.057 75.6512 25.0889C75.4734 25.1208 75.2684 25.1367 75.0359 25.1367C74.6577 25.1367 74.3227 25.0706 74.0311 24.9385C73.7394 24.8018 73.5115 24.5807 73.3475 24.2754C73.1834 23.9701 73.1014 23.5645 73.1014 23.0586V15.792ZM80.7004 25.1367C80.1535 25.1367 79.659 25.0479 79.217 24.8701C78.7795 24.6878 78.4058 24.4349 78.0959 24.1113C77.7906 23.7878 77.5559 23.4072 77.3918 22.9697C77.2277 22.5322 77.1457 22.0605 77.1457 21.5547V21.2812C77.1457 20.7025 77.23 20.1784 77.3986 19.709C77.5673 19.2396 77.802 18.8385 78.1027 18.5059C78.4035 18.1686 78.759 17.9111 79.1691 17.7334C79.5793 17.5557 80.0236 17.4668 80.5021 17.4668C81.0308 17.4668 81.4934 17.5557 81.8898 17.7334C82.2863 17.9111 82.6145 18.1618 82.8742 18.4854C83.1385 18.8044 83.3345 19.1849 83.4621 19.627C83.5943 20.069 83.6604 20.5566 83.6604 21.0898V21.7939H77.9455V20.6113H82.0334V20.4814C82.0243 20.1852 81.965 19.9072 81.8557 19.6475C81.7508 19.3877 81.5891 19.1781 81.3703 19.0186C81.1516 18.859 80.8599 18.7793 80.4953 18.7793C80.2219 18.7793 79.9781 18.8385 79.7639 18.957C79.5542 19.071 79.3788 19.2373 79.2375 19.4561C79.0962 19.6748 78.9868 19.9391 78.9094 20.249C78.8365 20.5544 78.8 20.8984 78.8 21.2812V21.5547C78.8 21.8783 78.8433 22.179 78.9299 22.457C79.021 22.7305 79.1532 22.9697 79.3264 23.1748C79.4995 23.3799 79.7092 23.5417 79.9553 23.6602C80.2014 23.7741 80.4816 23.8311 80.7961 23.8311C81.1926 23.8311 81.5458 23.7513 81.8557 23.5918C82.1656 23.4323 82.4344 23.2067 82.6623 22.915L83.5305 23.7559C83.371 23.9883 83.1636 24.2116 82.9084 24.4258C82.6532 24.6354 82.341 24.8063 81.9719 24.9385C81.6073 25.0706 81.1835 25.1367 80.7004 25.1367ZM92.8906 22.0127V15.0469H94.5996V22.0127C94.5996 22.6735 94.4583 23.2363 94.1758 23.7012C93.8932 24.166 93.5081 24.5215 93.0205 24.7676C92.5329 25.0137 91.9792 25.1367 91.3594 25.1367C90.7259 25.1367 90.1631 25.0296 89.6709 24.8154C89.1833 24.6012 88.8005 24.2731 88.5225 23.8311C88.2445 23.389 88.1055 22.8285 88.1055 22.1494H89.8281C89.8281 22.5413 89.8896 22.8581 90.0127 23.0996C90.1403 23.3366 90.318 23.5098 90.5459 23.6191C90.7783 23.724 91.0495 23.7764 91.3594 23.7764C91.6556 23.7764 91.9176 23.7103 92.1455 23.5781C92.3779 23.4414 92.5602 23.2432 92.6924 22.9834C92.8245 22.7191 92.8906 22.3955 92.8906 22.0127ZM96.1967 21.3838V21.2266C96.1967 20.6934 96.2742 20.1989 96.4291 19.7432C96.584 19.2829 96.8074 18.8841 97.099 18.5469C97.3952 18.2051 97.7553 17.9408 98.1791 17.7539C98.6075 17.5625 99.0906 17.4668 99.6283 17.4668C100.171 17.4668 100.654 17.5625 101.078 17.7539C101.506 17.9408 101.868 18.2051 102.164 18.5469C102.461 18.8841 102.686 19.2829 102.841 19.7432C102.996 20.1989 103.074 20.6934 103.074 21.2266V21.3838C103.074 21.917 102.996 22.4115 102.841 22.8672C102.686 23.3229 102.461 23.7217 102.164 24.0635C101.868 24.4007 101.508 24.665 101.084 24.8564C100.661 25.0433 100.18 25.1367 99.642 25.1367C99.0997 25.1367 98.6143 25.0433 98.1859 24.8564C97.7621 24.665 97.4021 24.4007 97.1059 24.0635C96.8096 23.7217 96.584 23.3229 96.4291 22.8672C96.2742 22.4115 96.1967 21.917 96.1967 21.3838ZM97.8441 21.2266V21.3838C97.8441 21.7165 97.8783 22.0309 97.9467 22.3271C98.015 22.6234 98.1221 22.8831 98.268 23.1064C98.4138 23.3298 98.6006 23.5052 98.8285 23.6328C99.0564 23.7604 99.3275 23.8242 99.642 23.8242C99.9473 23.8242 100.212 23.7604 100.435 23.6328C100.663 23.5052 100.85 23.3298 100.996 23.1064C101.141 22.8831 101.248 22.6234 101.317 22.3271C101.39 22.0309 101.426 21.7165 101.426 21.3838V21.2266C101.426 20.8984 101.39 20.5885 101.317 20.2969C101.248 20.0007 101.139 19.7386 100.989 19.5107C100.843 19.2829 100.656 19.1051 100.428 18.9775C100.205 18.8454 99.9382 18.7793 99.6283 18.7793C99.3184 18.7793 99.0495 18.8454 98.8217 18.9775C98.5984 19.1051 98.4138 19.2829 98.268 19.5107C98.1221 19.7386 98.015 20.0007 97.9467 20.2969C97.8783 20.5885 97.8441 20.8984 97.8441 21.2266ZM104.561 14.5H106.209V23.4209L106.052 25H104.561V14.5ZM111.035 21.2334V21.377C111.035 21.9238 110.973 22.4274 110.85 22.8877C110.732 23.3434 110.55 23.7399 110.304 24.0771C110.062 24.4144 109.761 24.6764 109.401 24.8633C109.046 25.0456 108.633 25.1367 108.164 25.1367C107.704 25.1367 107.303 25.0501 106.961 24.877C106.619 24.7038 106.332 24.4577 106.099 24.1387C105.872 23.8197 105.687 23.4391 105.546 22.9971C105.404 22.555 105.304 22.0674 105.245 21.5342V21.0762C105.304 20.5384 105.404 20.0508 105.546 19.6133C105.687 19.1712 105.872 18.7907 106.099 18.4717C106.332 18.1481 106.617 17.8997 106.954 17.7266C107.296 17.5534 107.694 17.4668 108.15 17.4668C108.624 17.4668 109.041 17.5579 109.401 17.7402C109.766 17.9225 110.069 18.1823 110.31 18.5195C110.552 18.8522 110.732 19.2487 110.85 19.709C110.973 20.1693 111.035 20.6774 111.035 21.2334ZM109.388 21.377V21.2334C109.388 20.9007 109.36 20.5885 109.305 20.2969C109.251 20.0007 109.16 19.7409 109.032 19.5176C108.909 19.2943 108.74 19.1188 108.526 18.9912C108.317 18.859 108.054 18.793 107.74 18.793C107.448 18.793 107.198 18.8431 106.988 18.9434C106.778 19.0436 106.603 19.1803 106.462 19.3535C106.32 19.5267 106.209 19.7272 106.127 19.9551C106.049 20.1829 105.997 20.429 105.97 20.6934V21.9307C106.011 22.2725 106.097 22.5869 106.229 22.874C106.366 23.1566 106.557 23.3844 106.804 23.5576C107.05 23.7262 107.366 23.8105 107.754 23.8105C108.059 23.8105 108.317 23.749 108.526 23.626C108.736 23.5029 108.902 23.332 109.025 23.1133C109.153 22.89 109.244 22.6302 109.299 22.334C109.358 22.0378 109.388 21.7188 109.388 21.377Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_53_18892">
                            <rect width="136" height="40" rx="8" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </button>
                </Link>
            </div>
        <div className='sidebarUnderline w-full'></div>

      {/* Sidebar Links */}
      <div className=" flex flex-col items-left space-y-2 gap-[20px]">
        <Link className={pathname === '/allcandidates' ? 'active-link' : ''} href="/allcandidates">
          <span>
          Candidates
          </span>
        </Link>
        <Link className={pathname === '/tasks' ? 'active-link' : ''} href="/tasks">
        <span>        
          Interviews
          </span>
        </Link>
        <Link className={pathname === '/working-on' ? 'active-link' : ''} href="/working-on">
          <span className='text-red-400'>  
              Talent Board
          </span>
        </Link>
        <Link className={pathname === '/working-on' ? 'active-link' : ''} href="/working-on">
        <span className='text-red-400'>    
          My Team
        </span>
        </Link>
        <Link className={pathname === '/working-on' ? 'active-link' : ''} href="/working-on">
        <span className='text-red-400'>     
          Employed 
          </span>
        </Link>
        <Link className={pathname === '/working-on' ? 'active-link' : ''} href="/working-on">
        <span className='text-red-400'>  
          Help
        </span>
        </Link>
        <Link className={pathname === '/userprofile' ? 'active-link' : ''} href="/userprofile">
        <span>    
          Account 
          </span>
        </Link>
        <Link className={pathname === '/working-on' ? 'active-link' : ''} href="/working-on">
        <span className='text-red-400'>
          Analytics
        </span>
        </Link>
        <Link className={pathname === '/profile' ? 'active-link' : ''} href="/profile">
        <span className=''>
          Profile
        </span>
        </Link>
        <Link className={pathname === '/working-on' ? 'active-link' : ''} href="/working-on">
        <span className='text-red-400'>
          Settings
        </span>
        </Link>
        <Link className={pathname === '/onboarding' ? 'active-link' : ''} href="/onboarding">
        <span className=''>
          Onboard
        </span>
        </Link>
        <SignedIn>
          <SignOutButton signOutCallback={()=>{router.push('/sign-in')}}>
              <div className='flex cursor-pointer font-[400]'>
                LogOut
              </div>
          </SignOutButton>
        </SignedIn>

        <OrganizationSwitcher appearance={{
          elements:{
            organizationSwitcherTrigger:"py-2 px-4"
          }
        }}/>

        {/* {!user ? (<button className="gitHub-btn bg-orange-500 text-white rounded-xl p-2" type="button" onClick={handleSignIn}>
              GoogleSignIn
          </button>):
          (<button className="gitHub-btn bg-orange-500 text-white rounded-xl p-2" type="button" onClick={handleSignOut}>
            Logout
          </button>)}
      {user ? (
        <div className="font-bold flex flex-col items-center justify center text-yellow-400 text-2xl">
          <p>Welcome, {user?.displayName}!</p>
        </div>
      ) : (
        <div className="font-bold text-red-600 text-2xl">
          <p>Please SignUp or login</p> 
        </div>
      )} */}
      </div>
    </aside>
  );
};

export default LeftSidebar;

// import Layout from "@/components/Layout";
// import {useSession}from "next-auth/react";

// export default function Home() {
//   const {data: session} = useSession();
//   return <Layout>
//     <div className="text-blue-900 flex justify-between">
//       <h2>Здравствуйте, <b>{session?.user?.name}</b></h2>
//       <div>
//         <div className="bg-gray-300 flex gap-1 text-black rounded-lg overflow-hidden">
//           <img src={session?.user?.image} alt="" className="w-6 h-6"/>
//         <span className=" px-2">
//           {session?.user?.name}
//           </span>
        
//         </div>
//       </div>
      
//     </div>
//   </Layout>
// }

import Layout from "@/components/Layout";
import HomeHeader from "@/components/HomeHeader";
import HomeStats from "@/components/HomeStats";

export default function Home() {
  return (
    <Layout>
      <HomeHeader />
      <HomeStats />
    </Layout>
  );
}
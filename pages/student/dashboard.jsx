
import React from 'react'
import EpreuveList from "../../components/epreuveList"
import { getSession } from 'next-auth/react';

export default function dashboardUser() {
  
  return (
      
   
    <EpreuveList />
    
  )
}
export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  
  if (!session?.user) {
      return {
          redirect: {
              destination: '/student/login',
              permanent: false,
          },
      };
  }
  return {
      props: { session },
  };
}




      
     
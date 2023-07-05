import React from 'react'
import EpreuveList from '@/components/epreuveList'
import { getSession } from 'next-auth/react';



export default function dashboard() {
  return (
    <div>
      <EpreuveList/>
    </div>
  )
}
export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req });
    if (!session) {
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




      
     
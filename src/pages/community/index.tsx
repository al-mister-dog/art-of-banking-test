import { useSession, getSession } from "next-auth/react";
import Image from "next/image";

export default function Index() {
  const { data: session } = useSession();
  return (
    <>
      <h1>Welcome {session.user.name}</h1>
      <Image src={session.user.image} height={100} width={100}></Image>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/registration/signin",
      },
    };
  }
  return {
    props: { session },
  };
}

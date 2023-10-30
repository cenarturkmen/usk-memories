import { Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";

export function ProfileBar() {
  const { data: session, status } = useSession();

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-tr from-blue-500 to-red-600 p-[5.5px] rounded-full">
          <Image
            src={session?.user!.image!}
            width={200}
            height={200}
            alt={session?.user!.name!}
            className="rounded-full"
          />
        </div>
        <Typography variant="h4"> Your Profile </Typography>
        <Typography variant="h5"> {session?.user!.name} </Typography>
        <Typography variant="h5"> {session?.user!.email} </Typography>
      </div>
    </>
  );
}

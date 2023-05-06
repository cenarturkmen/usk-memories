import { Typography } from "@mui/material";
import { useSession } from "next-auth/react";
import Image from "next/image";

export function ProfileBar() {
  const { data: session, status } = useSession();

  return (
    <>
      <div className="flex flex-col items-center">
        <Typography variant="h3"> Your Profile </Typography>
        <Typography variant="h4"> {session?.user!.name} </Typography>
        <Typography variant="h4"> {session?.user!.email} </Typography>
        <Image
          src={session?.user!.image!}
          width={200}
          height={200}
          alt={session?.user!.name!}
        />
      </div>
    </>
  );
}

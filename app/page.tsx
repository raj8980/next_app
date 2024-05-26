import axios from "axios";
import Image from "next/image";

export default async function Home() {
  const userDetails = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>
            Name: {userDetails?.name}
          </div>
          {userDetails?.email}
        </div>
      </div>
    </div>
  );
}

async function getUserDetails(){
  const response = await axios.get("http://localhost:3000/api/user");
  return response.data;
}

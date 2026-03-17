import Image from "next/image";
import Link from "next/link";

const projectInfo = [
  {
    Name: "project 1", 
    Description: "default description", 
    Image: 
      <Image 
      src={"/images/comingsoonflor.jpg"}
      alt="Landon Borrego Headshot"
      width={300}
      height={300}
      />, 
    Link: <Link href={"/"} className="hover:text-gray-500 transition-colors">dummy link</Link>
  },
  {
    Name: "project 2", 
    Description: "default description", 
    Image: 
      <Image 
      src={"/images/comingsoonflor.jpg"}
      alt="Landon Borrego Headshot"
      width={300}
      height={300}
      />, 
    Link: <Link href={"/"} className="hover:text-gray-500 transition-colors">dummy link</Link>
  },
  {
    Name: "project 3", 
    Description: "default description", 
    Image: 
      <Image 
      src={"/images/comingsoonflor.jpg"}
      alt="Coming Soon Banner"
      width={300}
      height={300}
      />, 
    Link: <Link href={"/"} className="hover:text-gray-500 transition-colors">dummy link</Link>
  }
];

export default function Projects () {
  return (
    <div className="w-full flex flex-row justify-between">
      {projectInfo.map((proj) => (
        <div key={proj.Name} className="flex flex-col border border-white">
          <div>
            {proj.Image}
          </div>

          <div>
            {proj.Name}
          </div>

          <div>
            {proj.Link}
          </div>

        </div>
      ))}
    </div>
  );
};

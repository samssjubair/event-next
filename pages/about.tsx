import Image from "next/image";
import React from "react";

const about = () => {
  return (
    <main className="container mx-auto my-6">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <Image
            src="https://source.unsplash.com/random/800x600"
            alt="Team Member"
            className="rounded shadow-lg"
            height={400}
            width={400}
          />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            facilisis aliquam ligula, non tempor nibh elementum vel. Nulla
            facilisi. Sed consectetur fringilla rhoncus. Fusce interdum sapien
            vitae libero eleifend, vel pellentesque purus auctor. Nam hendrerit
            sapien ac libero interdum pharetra.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aliquam id elit nec tellus fermentum accumsan. Duis mollis mi non
            porttitor bibendum. Maecenas quis nulla et lacus malesuada pulvinar.
            Nullam at interdum felis, id vestibulum felis. Sed quis magna odio.
            Pellentesque molestie volutpat lobortis. Fusce tempor lorem ac orci
            blandit, vel efficitur quam bibendum. Donec quis elit ut velit
            egestas consectetur.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Meet our talented team of professionals who are dedicated to
            providing the best service to our clients.
          </p>
          <ul className="list-disc ml-8">
            <li className="mb-2">
              <span className="font-bold">John Smith</span> - CEO
            </li>
            <li className="mb-2">
              <span className="font-bold">Jane Doe</span> - Designer
            </li>
            <li className="mb-2">
              <span className="font-bold">Bob Johnson</span> - Developer
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 px-4 mb-8">
          <Image
            src="https://source.unsplash.com/random/800x600"
            alt="Team Member"
            className="rounded shadow-lg"
            width={400}
            height={400}
          />
        </div>
      </div>
    </main>
  );
};

export default about;

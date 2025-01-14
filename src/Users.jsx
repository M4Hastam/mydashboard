import React, { useEffect } from "react";
import useCheckAcceptRules from "./hooks/customhook/useCheckAcceptRules";
const members = [
  {
    id: "1",
    name: "Jane Doe",
    bio: "Full-stack developer with a passion for creating beautiful and functional web applications.",
    imageUrl: "https://1-mov.ir/wp-content/uploads/2024/03/سریال-سیلو-silo.jpg",
  },
  {
    id: "2",
    name: "John Smith",
    bio: "UX designer focused on creating intuitive and engaging user experiences across various platforms.",
    imageUrl: "https://1-mov.ir/wp-content/uploads/2024/03/سریال-سیلو-silo.jpg",
  },
  {
    id: "3",
    name: "Emily Johnson",
    bio: "Product manager with a knack for bridging the gap between technical and business stakeholders.",
    imageUrl: "https://1-mov.ir/wp-content/uploads/2024/03/سریال-سیلو-silo.jpg",
  },
  {
    id: "4",
    name: "Michael Brown",
    bio: "DevOps engineer specializing in cloud infrastructure and continuous integration/deployment pipelines.",
    imageUrl: "https://1-mov.ir/wp-content/uploads/2024/03/سریال-سیلو-silo.jpg",
  },
];

export default function Users() {
  useCheckAcceptRules();
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div
              key={member.id}
              className=" overflow-hidden shadow-lg rounded-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
            >
              <img
                src={member.imageUrl}
                alt={member.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className=" text-gray-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

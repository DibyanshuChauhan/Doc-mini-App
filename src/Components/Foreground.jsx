import { useRef, useState } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "Quickly draft and organize professional documents with an intuitive interface.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Create Documents", tagColor: "green" },
    },
    {
      desc: "Share and edit in real time with teams, ensuring productivity and alignment.",
      filesize: ".8mb",
      close: true,
      tag: {
        isOpen: true,
        tagTitle: "Collaborate Seamlessly",
        tagColor: "blue",
      },
    },
    {
      desc: "Effortlessly format and customize documents to suit your needs, from reports to notes.",
      filesize: ".5mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Access Anywhere", tagColor: "green" },
    },
    {
      desc: "Simplify your workflow with built-in templates and smart editing tools.",
      filesize: ".4mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Access Anywhere", tagColor: "green" },
    },
    {
      desc: "Securely store and access documents on the go with cloud integration.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Access Anywhere", tagColor: "green" },
    },
  ];
  useState();
  return (
    <div ref={ref} className="w-full h-full fixed top-0 left-0 z-[3] flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;

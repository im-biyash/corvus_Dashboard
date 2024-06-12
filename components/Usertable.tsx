import React from "react";


import anuj from "../assets/anuj.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";

// Employee data
const employees = [
  {
    name: "Anuj karn",
    jobTitle: "Full stack Developer",
    department: "Manager",
   
    avatarSrc: anuj,
  },
  {
    name: "John Doe",
    jobTitle: "Backend Developer",
    department: "IT",
    
    avatarSrc:
      "https://avatars.design/wp-content/uploads/2022/09/5business-team-employee-personal-avatar.png",
  },
  {
    name: "Jane Smith",
    jobTitle: "UI/UX Designer",
    department: "Design",
   
    avatarSrc:
      "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?t=st=1718183707~exp=1718187307~hmac=3900846836b9d435f655d19d1cd0379b4350cbacdcf3bcda9fec5befdc3335cb&w=740",
  },
  {
    name: "Emily Johnson",
    jobTitle: "Marketing Specialist",
    department: "Marketing",
    
    avatarSrc: "https://github.com/shadcn.png",
  },
  {
    name: "Michael Brown",
    jobTitle: "Sales Manager",
    department: "Sales",
   
    avatarSrc:
      "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?s=2048x2048&w=is&k=20&c=yif473DFhN451o-tNC1tASFFoP5QTOYcqS26dhEbv6U=",
  },
];

const Usertable = () => {
  return (
    <div className="p-3">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Name</TableHead>
            <TableHead>Job Title</TableHead>
            <TableHead>Department</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={employee.avatarSrc} />
                  <AvatarFallback>{employee.name[0]}</AvatarFallback>
                </Avatar>
                <span>{employee.name}</span>
              </TableCell>
              <TableCell>{employee.jobTitle}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell className="text-right space-x-2">
                <Button>Profile</Button>
                <Button variant=''>payment</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Usertable;

"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Assuming there's an Input component

interface Employee {
  name: string;
  email: string;
  phone: string;
  address: string;
  jobTitle: string;
  department: string;
  salary: string;
  paymentInfo: string;
  avatarSrc: string;
}

interface PaymentRecord {
  date: string;
  amount: string;
  method: string;
  status: string;
}

const initialEmployees: Employee[] = [
  {
    name: "Anuj Karn",
    email: "anuj@example.com",
    phone: "9745654746",
    address: "Biratnagar, Nepal",
    jobTitle: "Full stack Developer",
    department: "Manager",
    salary: "$120,000",
    paymentInfo: "Bank Account - XXXX1234",
    avatarSrc: "https://github.com/shadcn.png",
  },
  {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "324230329432",
    address: "Chitwan, Nepal",
    jobTitle: "Backend Developer",
    department: "IT",
    salary: "$100,000",
    paymentInfo: "Bank Account - XXXX5678",
    avatarSrc:
      "https://avatars.design/wp-content/uploads/2022/09/5business-team-employee-personal-avatar.png",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "98234324324",
    address: "Pokhara, Nepal",
    jobTitle: "UI/UX Designer",
    department: "Design",
    salary: "$90,000",
    paymentInfo: "Bank Account - XXXX9012",
    avatarSrc:
      "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100226.jpg?t=st=1718183707~exp=1718187307~hmac=3900846836b9d435f655d19d1cd0379b4350cbacdcf3bcda9fec5befdc3335cb&w=740",
  },
  {
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    phone: "9845951708",
    address: "London, UK",
    jobTitle: "Marketing Specialist",
    department: "Marketing",
    salary: "$80,000",
    paymentInfo: "Bank Account - XXXX3456",
    avatarSrc: "https://github.com/shadcn.png",
  },
  {
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "983234324",
    address: "New York, USA",
    jobTitle: "Sales Manager",
    department: "Sales",
    salary: "$110,000",
    paymentInfo: "Bank Account - XXXX7890",
    avatarSrc:
      "https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.jpg?s=2048x2048&w=is&k=20&c=yif473DFhN451o-tNC1tASFFoP5QTOYcqS26dhEbv6U=",
  },
];

const ProfileModal: React.FC<{
  employee: Employee;
  onClose: () => void;
  onSave: (updatedEmployee: Employee) => void;
}> = ({ employee, onClose, onSave }) => {
  const [editEmployee, setEditEmployee] = useState<Employee>({ ...employee });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(editEmployee);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="p-4 bg-white dark:bg-[#0a192f] rounded-lg w-[500px] h-auto flex flex-col items-center">
        <h1 className="text-xl mb-4 text-black dark:text-white">
          Edit Profile
        </h1>
        <Avatar className="mt-4 h-[100px] w-[100px]">
          <AvatarImage className="rounded-full" src={editEmployee.avatarSrc} />
          <AvatarFallback>{editEmployee.name[0]}</AvatarFallback>
        </Avatar>
        <div className="w-full mt-4 space-y-2">
          <Input
            name="name"
            value={editEmployee.name}
            readOnly
            placeholder="Name"
          />
          <Input
            name="email"
            value={editEmployee.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <Input
            name="phone"
            value={editEmployee.phone}
            onChange={handleChange}
            placeholder="Phone"
          />
          <Input
            name="address"
            value={editEmployee.address}
            onChange={handleChange}
            placeholder="Address"
          />
          <Input
            name="jobTitle"
            value={editEmployee.jobTitle}
            onChange={handleChange}
            placeholder="Job Title"
          />
          <Input
            name="department"
            value={editEmployee.department}
            onChange={handleChange}
            placeholder="Department"
          />
          <Input
            name="salary"
            value={editEmployee.salary}
            onChange={handleChange}
            placeholder="Salary"
          />
          <Input
            name="paymentInfo"
            value={editEmployee.paymentInfo}
            onChange={handleChange}
            placeholder="Payment Info"
          />
        </div>
        <div className="mt-4 space-x-2">
          <Button variant="destructive" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </div>
    </div>
  );
};

const PaymentModal: React.FC<{ employee: Employee; onClose: () => void }> = ({
  employee,
  onClose,
}) => {
  const [paymentRecords, setPaymentRecords] = useState<PaymentRecord[]>([
    {
      date: "2024-01-15",
      amount: "$5,000",
      method: "Bank Transfer",
      status: "Completed",
    },
    {
      date: "2024-02-15",
      amount: "$5,000",
      method: "Bank Transfer",
      status: "Completed",
    },
   
  ]);

  const [newPayment, setNewPayment] = useState<PaymentRecord>({
    date: "",
    amount: "",
    method: "",
    status: "Pending",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewPayment((prev) => ({ ...prev, [name]: value }));
  };

  const addPayment = () => {
    setPaymentRecords((prev) => [...prev, newPayment]);
    setNewPayment({ date: "", amount: "", method: "", status: "Pending" });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="p-4 bg-white dark:bg-[#0a192f] rounded-lg w-[600px] h-auto flex flex-col items-center">
        <h1 className="text-xl mb-4 text-black dark:text-white">
          Manage Payments for {employee.name}
        </h1>
        <div className="w-full mt-4 space-y-2 max-h-64 overflow-y-auto">
          <h2 className="text-lg mb-2 text-black dark:text-white">
            Payment History
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paymentRecords.map((record, index) => (
                <TableRow key={index}>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>{record.amount}</TableCell>
                  <TableCell>{record.method}</TableCell>
                  <TableCell>{record.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="w-full mt-4 space-y-2">
          <h2 className="text-lg mb-2 text-black dark:text-white">
            Add Payment
          </h2>
          <Input
            name="date"
            type="date"
            value={newPayment.date}
            onChange={handleChange}
            placeholder="Date"
          />
          <Input
            name="amount"
            value={newPayment.amount}
            onChange={handleChange}
            placeholder="Amount"
          />
          <select
            name="method"
            value={newPayment.method}
            onChange={handleChange}
            className="border rounded p-2 w-full"
          >
            <option value="">Select Method</option>
            <option value="Esewa">Esewa</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Others">Others</option>
          </select>
          <Button onClick={addPayment}>Add Payment</Button>
        </div>
        <div className="mt-4 space-x-2">
          <Button variant="destructive" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div> 
  );
};

const Usertable: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [profileModel, setProfileModel] = useState<boolean>(false);
  const [paymentModel, setPaymentModel] = useState<boolean>(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  const openProfile = (employee: Employee) => {
    setSelectedEmployee(employee);
    setProfileModel(true);
  };

  const closeProfile = () => {
    setProfileModel(false);
    setSelectedEmployee(null);
  };

  const saveProfile = (updatedEmployee: Employee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.name === updatedEmployee.name ? updatedEmployee : emp
      )
    );
  };

  const openPayment = (employee: Employee) => {
    setSelectedEmployee(employee);
    setPaymentModel(true);
  };

  const closePayment = () => {
    setPaymentModel(false);
    setSelectedEmployee(null);
  };
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-3">
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by name..."
        className="mb-3 w-[300px] px-3 py-2 border border-gray-400 rounded-md"
      />
      <Table className="w-full">
        <TableHeader>
          <TableRow >
            <TableHead className="">Name</TableHead>
            <TableHead className="hidden sm:table-cell">Job Title</TableHead>
            <TableHead className="hidden sm:table-cell">Department</TableHead>
            <TableHead className="text-right mr-20 relative right-[50px] ">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        {filteredEmployees.map((employee, index) => (
            <TableRow key={index}>
              <TableCell className="  space-x-3  align-middle">
               <div className="flex items-center gap-3">
                <Avatar className="flex flex-row items-center gap-2">
                  <AvatarImage src={employee.avatarSrc} />
                  <AvatarFallback>{employee.name[0]}</AvatarFallback>
                  <span>{employee.name[0]}</span>
                </Avatar>
                <span>{employee.name}</span>
               </div>
              </TableCell>
              <TableCell className="hidden sm:table-cell align-middle">
                {employee.jobTitle}
              </TableCell>
              <TableCell className="hidden sm:table-cell align-middle">
                {employee.department}
              </TableCell>
              <TableCell className="lg:flex lg:flex-row lg:justify-end lg:gap-2 sm:gap-5 flex flex-col gap-2 item align-middle">
                <Button onClick={() => openProfile(employee)}>Profile</Button>
                <Button onClick={() => openPayment(employee)}>Payment</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {profileModel && selectedEmployee && (
        <ProfileModal
          employee={selectedEmployee}
          onClose={closeProfile}
          onSave={saveProfile}
        />
      )}

      {paymentModel && selectedEmployee && (
        <PaymentModal employee={selectedEmployee} onClose={closePayment} />
      )}
    </div>
  );
};

export default Usertable;

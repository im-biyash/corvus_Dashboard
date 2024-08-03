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
import { Input } from "@/components/ui/input";

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

const generateDummyEmployees = (): Employee[] => {
  const dummyEmployees: Employee[] = [];
  const departments = ["IT", "Marketing", "Sales", "Design", "Operations"];
  const jobTitles = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Data Analyst",
    "Marketing Specialist",
    "Sales Manager1",
    "Operations Manager",
    "Product Manager",
    "HR Manager",
  ];

  const randomNames = [
    "John", "Emma", "Michael", "Sophia", "William", "Olivia", "James", "Amelia",
    "Benjamin", "Charlotte", "Daniel", "Isabella", "Matthew", "Mia", "Logan", "Evelyn",
    "Alexander", "Harper", "David", "Abigail", "Joseph", "Emily", "Jackson", "Elizabeth",
    "Samuel", "Ava", "Elijah", "Grace", "Gabriel", "Chloe", "Joshua", "Ella"
  ];

  for (let i = 1; i <= 100; i++) {
    const randomIndex = Math.floor(Math.random() * departments.length);
    const randomJobIndex = Math.floor(Math.random() * jobTitles.length);
    const randomNameIndex = Math.floor(Math.random() * randomNames.length);

    const employee: Employee = {
      name: randomNames[randomNameIndex],
      email: `employee${i}@example.com`,
      phone: `${Math.floor(Math.random() * 9000000000) + 1000000000}`,
      address: `Address ${i}`,
      jobTitle: jobTitles[randomJobIndex],
      department: departments[randomIndex],
      salary: `$${Math.floor(Math.random() * 100000) + 50000}`,
      paymentInfo: `Bank Account - XXXX${Math.floor(Math.random() * 9000) + 1000}`,
      avatarSrc: `https://randomuser.me/api/portraits/men/${i}.jpg`,
    };

    dummyEmployees.push(employee);
  }

  return dummyEmployees;
};

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
  const [paymentRecords, setPaymentRecords] = useState([
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

  const [newPayment, setNewPayment] = useState({
    date: "",
    amount: "",
    method: "",
    status: "Pending",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
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
          {paymentRecords.length > 0 ? (
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
          ) : (
            <p className="text-gray-500">No payment records found.</p>
          )}
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
  const [employees, setEmployees] = useState<Employee[]>(
    generateDummyEmployees()
  );
  const [profileModel, setProfileModel] = useState(false);
  const [paymentModel, setPaymentModel] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5); // Number of employees per page
  const [sortField, setSortField] = useState<keyof Employee>("name"); // Default field to sort
  const [ascending, setAscending] = useState(true); // Sort direction
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null
  ); // State for department filter

  const openProfile = (employee: Employee) => {
    setSelectedEmployee(employee);
    setProfileModel(true);
  };

  const closeProfile = () => {
    setProfileModel(false);
    setSelectedEmployee(null);
  };

  const openPayment = (employee: Employee) => {
    setSelectedEmployee(employee);
    setPaymentModel(true);
  };

  const closePayment = () => {
    setPaymentModel(false);
    setSelectedEmployee(null);
  };

  const saveProfile = (updatedEmployee: Employee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.name === updatedEmployee.name ? updatedEmployee : emp
      )
    );
  };

  // Filtering employees based on search query and selected department
  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedDepartment === null ||
        employee.department === selectedDepartment)
  );

  // Sorting function
  const sortEmployees = () => {
    const sortedEmployees = [...filteredEmployees].sort((a, b) => {
      const fieldA = a[sortField].toUpperCase();
      const fieldB = b[sortField].toUpperCase();
      if (fieldA < fieldB) return ascending ? -1 : 1;
      if (fieldA > fieldB) return ascending ? 1 : -1;
      return 0;
    });
    return sortedEmployees;
  };

  // Toggle sorting direction
  const toggleSortDirection = () => {
    setAscending((prevAscending) => !prevAscending);
  };

  // Pagination logic
  const totalEmployees = filteredEmployees.length;
  const totalPages = Math.ceil(totalEmployees / pageSize);

  // Constants for pagination customization
  const MAX_VISIBLE_PAGES = 5; // Maximum number of page buttons visible
  const PAGES_TO_SHOW = 3; // Number of pages to show before and after ellipsis

  // Calculate the range of pages to display
  let startPage = Math.max(1, currentPage - PAGES_TO_SHOW);
  let endPage = Math.min(totalPages, startPage + MAX_VISIBLE_PAGES - 1);

  if (endPage - startPage < MAX_VISIBLE_PAGES - 1) {
    startPage = Math.max(1, endPage - MAX_VISIBLE_PAGES + 1);
  }

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleDepartmentFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const department = e.target.value;
    setSelectedDepartment(department === "all" ? null : department);
  };

  return (
    <div className="p-3">
      <div className="flex flex-col sm:flex-col sm:justify-between sm:items-center mb-3">
        <div className="mb-3 sm:mb-0 sm:mr-3">
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name..."
            className="w-full sm:w-[300px] px-3 py-2 border border-gray-500 rounded-md"
          />
        </div>
        <div className="mb-3 sm:mb-0 sm:mr-3">
          <select
            value={selectedDepartment || "all"}
            onChange={handleDepartmentFilterChange}
            className="w-full sm:w-[200px] px-3 py-2 border border-gray-400 rounded-md"
          >
            <option value="all">All Departments</option>
            <option value="IT">IT</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
            <option value="Sales">Sales</option>
            
            <option value="Design">Design</option>
            <option value="Operations">Operations</option>
          </select>
        </div>
        <div>
          <Button onClick={toggleSortDirection}>
            {ascending ? "Sort Z-A" : "Sort A-Z"}
          </Button>
        </div>
      </div>

      {filteredEmployees.length === 0 ? (
        <p className="text-gray-500 text-center">No employees found.</p>
      ) : (
        <>
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="hidden sm:table-cell">Job Title</TableHead>
                <TableHead className="hidden sm:table-cell">Department</TableHead>
                <TableHead className="text-right">Actions .</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortEmployees()
                .slice((currentPage - 1) * pageSize, currentPage * pageSize)
                .map((employee, index) => (
                  <TableRow key={index}>
                    <TableCell className="align-middle">
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
                    <TableCell className="flex justify-end gap-2">
                      <Button size="lg" onClick={() => openProfile(employee)}>
                        Edit profile
                      </Button>
                      <Button size="lg" onClick={() => openPayment(employee)}>
                        Payment
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>

          {/* Pagination controls */}
          {totalEmployees > pageSize && (
            <div className="mt-3 flex justify-center items-center space-x-2">
              <Button
                className="px-2 py-1"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
              >
                {"<"}
              </Button>
              {startPage > 1 && (
                <Button className="px-2 py-1 w-8" onClick={() => paginate(1)}>
                  1
                </Button>
              )}
              {startPage > 2 && <span className="mx-1">...</span>}
              {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                <Button
                  key={startPage + index}
                  className={`px-2 py-1 mx-1 w-8 ${
                    currentPage === startPage + index
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => paginate(startPage + index)}
                >
                  {startPage + index}
                </Button>
              ))}
              {endPage < totalPages - 2 && <span className="mx-1">...</span>}
              {endPage < totalPages && (
                <Button
                  className="px-2 py-1 w-8"
                  onClick={() => paginate(totalPages)}
                >
                  {totalPages}
                </Button>
              )}
              <Button
                className="px-2 py-1 w-8"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
              >
                {">"}
              </Button>
            </div>
          )}
        </>
      )}

      {/* Profile and Payment modals */}
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

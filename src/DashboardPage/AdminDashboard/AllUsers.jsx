import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Table } from "flowbite-react";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between pt-5">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-800">All Users</h2>
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-800">Total Users : {users.length}</h2>
            </div>
            <div className="w-full mt-12">
                <div className="overflow-x-auto">
                    <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell>No:</Table.HeadCell>
                            <Table.HeadCell>Name</Table.HeadCell>
                            <Table.HeadCell>Email</Table.HeadCell>
                            <Table.HeadCell>Role</Table.HeadCell>
                            <Table.HeadCell>Delete</Table.HeadCell>

                        </Table.Head>
                        <Table.Body className="divide-y">
                            {
                                users.map((user, index) => <Table.Row key={user._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell>
                                        {index + 1}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {user.name}
                                    </Table.Cell>
                                    <Table.Cell>{user.email}</Table.Cell>
                                    <Table.Cell>{user.role}</Table.Cell>
                                    {/* 
                                    <Table.Cell>
                                        <button onClick={() => handleDeltete(product._id)}><HiTrash className="text-red-700 text-xl bg-gray-300 rounded-sm" /></button>
                                    </Table.Cell> */}
                                </Table.Row>)
                            }
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
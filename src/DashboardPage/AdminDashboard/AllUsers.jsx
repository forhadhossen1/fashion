import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Table } from "flowbite-react";
import { HiTrash, HiUserGroup } from "react-icons/hi";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users',{
                headers: {
                    authorization : `Bearer ${localStorage.getItem('access-token')}`
                }
            });
            return res.data;
        }
    })

    const handleMakeAdmin = (id) => {
        axiosSecure.patch(`/users/admin/${id}`)
            .then(res => {
                // console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: 'Now he is Admin !',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }


    const handleDelteteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete user!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
                                icon: "success"
                            });

                            refetch();
                        }
                    })
            }
        });
    }

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
                                    <Table.Cell>
                                        {user.role === 'admin' ? 'Admin' : <button onClick={() => handleMakeAdmin(user._id)}><HiUserGroup className="text-red-700 text-xl  rounded-sm" /></button>}
                                    </Table.Cell>

                                    <Table.Cell>
                                        <button onClick={() => handleDelteteUser(user._id)}><HiTrash className="text-red-700 text-xl bg-gray-300 rounded-sm" /></button>
                                    </Table.Cell>
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
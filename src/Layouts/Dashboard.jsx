import { Sidebar } from "flowbite-react";
import { HiChartPie, HiClipboardList, HiHome, HiInbox, HiPencilAlt, HiShoppingBag, HiUser, HiUserGroup, HiViewBoards } from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {

    // TODO : get isAdmin value from the database
    const isAdmin = true;
    return (
        <div className="flex">
            <div>
                <Sidebar aria-label="Sidebar with content separator example" className="h-[97vh] my-3">
                    <Sidebar.Items>

                        {
                            isAdmin ?
                                <>
                                    <Sidebar.ItemGroup>
                                        <Link to='/dashboard/allusers'>
                                            <Sidebar.Item icon={HiUserGroup}>
                                                All Users
                                            </Sidebar.Item>
                                        </Link>
                                        <Link to='/dashboard/manageUsers'>
                                            <Sidebar.Item icon={HiUser}>
                                                Manage Users
                                            </Sidebar.Item>
                                        </Link>
                                        <Link to='/dashboard/addProduct'>
                                            <Sidebar.Item icon={HiClipboardList}>
                                                Add Product
                                            </Sidebar.Item>
                                        </Link>
                                        <Link to='/dashboard/manageProduct'>
                                            <Sidebar.Item icon={HiPencilAlt}>
                                                Manage Product
                                            </Sidebar.Item>
                                        </Link>
                                    </Sidebar.ItemGroup>
                                </>
                                :
                                <Sidebar.ItemGroup>
                                    <Link to='/dashboard/userPanel'>
                                        <Sidebar.Item icon={HiChartPie}>
                                            User Panel
                                        </Sidebar.Item>
                                    </Link>
                                    <Sidebar.Item icon={HiInbox}>
                                        Inbox
                                    </Sidebar.Item>
                                    <Link to='/dashboard/addedProduct'>
                                        <Sidebar.Item icon={HiShoppingBag}>
                                            Added Products
                                        </Sidebar.Item>
                                    </Link>
                                </Sidebar.ItemGroup>
                        }

                        <Sidebar.ItemGroup>
                            <Link to='/'>
                                <Sidebar.Item href="#" icon={HiHome}>
                                    Home
                                </Sidebar.Item>
                            </Link>
                            <Sidebar.Item href="#" icon={HiViewBoards}>
                                Documentation
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>

                    </Sidebar.Items>
                </Sidebar>

            </div>
            <div className="p-3 w-full">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
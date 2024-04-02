import { Sidebar } from "flowbite-react";
import { HiChartPie, HiHeart, HiHome, HiInbox, HiShoppingBag, HiUser, HiViewBoards } from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div>
                <Sidebar aria-label="Sidebar with content separator example" className="h-[97vh] my-3">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>

                            <Link to='/dashboard/userPanel'>
                                <Sidebar.Item icon={HiChartPie}>
                                    User Panel
                                </Sidebar.Item>
                            </Link>
                            
                            <Link>
                            <Sidebar.Item icon={HiHeart}>
                                Favourite Product
                            </Sidebar.Item>
                            </Link>

                            <Sidebar.Item icon={HiInbox}>
                                Inbox
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiUser}>
                                Users
                            </Sidebar.Item>
                            <Link to='/dashboard/addedProduct'>
                                <Sidebar.Item icon={HiShoppingBag}>
                                    Added Products
                                </Sidebar.Item></Link>
                        </Sidebar.ItemGroup>
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
            <div className="p-3">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
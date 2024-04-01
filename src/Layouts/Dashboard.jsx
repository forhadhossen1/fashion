import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div>
                <Sidebar aria-label="Sidebar with content separator example">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item href="#" icon={HiChartPie}>
                                Dashboard
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiViewBoards}>
                                Kanban
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiInbox}>
                                Inbox
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiUser}>
                                Users
                            </Sidebar.Item>
                            <Link to='/dashboard/addedProduct'>
                                <Sidebar.Item icon={HiShoppingBag}>
                                    Added Products
                                </Sidebar.Item></Link>
                            <Sidebar.Item href="#" icon={HiArrowSmRight}>
                                Sign In
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiTable}>
                                Sign Up
                            </Sidebar.Item>
                        </Sidebar.ItemGroup>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item href="#" icon={HiChartPie}>
                                Upgrade to Pro
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiViewBoards}>
                                Documentation
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={BiBuoy}>
                                Help
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
import { DashboardOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';

export const MenuConstant = [
    {
        key: 1,
        parent: "Dashboard",
        icon: <DashboardOutlined />,
        link: "/dashboard",
        childs: [
            {
                label: "Option 1",
                link: "/authentication"
            },
            {
                label: "Option 2",
                link: "/opt2"
            }
        ]
    },
    {
        key: 2,
        parent: "Setting",
        icon: <SettingOutlined />,
        link: "/setting",
        childs: [
            {
                label: "Option 1",
                link: "/opt1"
            }
        ]
    },
    {
        key: 3,
        parent: "Profile",
        icon: <UserOutlined />,
        link: "/users",
        childs: []
    }
]
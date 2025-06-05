import { useNavigate } from 'react-router';
import { useQuery } from '@tanstack/react-query';

import { UserOutlined } from '@ant-design/icons';

export default function UserInfo(props) {
    const navigate = useNavigate();
    const { data: userInfo } = useQuery({
        queryKey: ['userInfo'],
        queryFn: () => Promise.resolve(null), // 加這個！
        enabled: false, // 只讀快取，不自動執行 queryFn
    });
    const goToProfile = () => {
        if (userInfo?.email)
            navigate("/auth/profile")
        else
            navigate("/auth/login?redirect=/auth/profile");
    };
    const userName =
        userInfo?.displayName ||
        (userInfo?.email ? userInfo.email.split("@")[0] : "") ||
        "";


    return (
        <nav
            onClick={goToProfile}
            style={{ ...props.style }}
            className="cursor-pointer flex flex-col items-center group"
        >
            {/* 使用者圖示 */}
            <UserOutlined className="text-2xl cursor-pointer" />
            <p className="hidden md:block text-[0.5rem] md:text-[0.7rem] opacity-60 mt-[-0.2rem] md:mt-[0.3rem] text-current">
                {userName}
            </p>
        </nav>
    );
}
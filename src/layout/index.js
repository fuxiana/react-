import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

function getItem(
  label,key,icon,children,
) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export const MenuList=[
  getItem('图表', '/addressMap', <PieChartOutlined />),
  getItem('登入', '/login', <DesktopOutlined />),
]
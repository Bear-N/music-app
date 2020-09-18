import { Toast, Modal } from "antd-mobile"

//弹框
export const successAlert = msg => {
    Toast.info(msg, 1)
}

//确认弹框
export const confirmAlert = (fn) => {
    Modal.alert('提示', '你确定要删除吗？', [
        { text: '取消', onPress: () => {}, style: 'default' },
        { text: '确定', onPress: () => {fn()} },
    ]);
}
import sendRequest from './send-request';

const BASE_URL ='/api/departments';

export function listDept(deptNames) {
    return sendRequest(BASE_URL, 'GET', deptNames);

}

export function showDept(deptName) {
    return sendRequest(`${BASE_URL}/showdept`, 'GET', deptName)
}